export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { createClient } from '@supabase/supabase-js';

// ─── Auth ────────────────────────────────────────────────────────────────────
async function isAuthorized(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get('admin_token')?.value;
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(
      process.env.ADMIN_JWT_SECRET ?? 'ipc-admin-secret-change-me'
    );
    await jwtVerify(token, secret);
    return true;
  } catch { return false; }
}

// ─── Booking / social platform domains ───────────────────────────────────────
const BOOKING_DOMAINS = [
  'booking.com', 'airbnb.com', 'airbnb.fr', 'tripadvisor.com', 'tripadvisor.fr',
  'expedia.com', 'hotels.com', 'agoda.com', 'vrbo.com', 'homeaway.com',
  'mauritiusholiday.mu', 'rodrigues-island.com', 'iles-rodrigues.com',
  'holidaycheck.com', 'holidaylettings.co.uk',
];
const SOCIAL_DOMAINS = ['facebook.com', 'instagram.com', 'twitter.com', 'tiktok.com'];

function urlType(url: string): 'own' | 'booking' | 'social' | 'other' {
  try {
    const d = new URL(url).hostname.toLowerCase().replace(/^www\./, '');
    if (BOOKING_DOMAINS.some(p => d.includes(p))) return 'booking';
    if (SOCIAL_DOMAINS.some(p => d.includes(p))) return 'social';
    return 'own';
  } catch { return 'other'; }
}

// ─── Google Places search ─────────────────────────────────────────────────────
async function findViaGooglePlaces(name: string, location: string): Promise<{
  websiteUrl: string | null;
  placeName: string | null;
}> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return { websiteUrl: null, placeName: null };

  const query  = `${name} ${location} Rodrigues Mauritius`;
  const fields = 'website,name';
  // locationbias: 30km radius around Rodrigues Island
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`
            + `?input=${encodeURIComponent(query)}`
            + `&inputtype=textquery`
            + `&fields=${fields}`
            + `&locationbias=circle:30000@-19.7177,63.4217`
            + `&key=${key}`;

  try {
    const res  = await fetch(url, { signal: AbortSignal.timeout(8000) });
    const data = await res.json() as {
      status: string;
      candidates: Array<{ website?: string; name?: string }>;
    };

    if (data.status === 'OK' && data.candidates?.length > 0) {
      const c = data.candidates[0];
      return { websiteUrl: c.website ?? null, placeName: c.name ?? null };
    }
  } catch { /* timeout or network error */ }

  return { websiteUrl: null, placeName: null };
}

// ─── Website quality analyser ─────────────────────────────────────────────────
interface QualityResult {
  status: 'none' | 'booking_only' | 'outdated' | 'ok' | 'good';
  score: number;
  signals: string[];
  note: string;
}

async function analyzeWebsite(websiteUrl: string): Promise<QualityResult> {
  try {
    const controller = new AbortController();
    const t0 = Date.now();
    const timer = setTimeout(() => controller.abort(), 9000);

    const res = await fetch(websiteUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) '
          + 'AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8',
      },
      signal: controller.signal,
      redirect: 'follow',
    });
    clearTimeout(timer);

    const loadMs = Date.now() - t0;

    if (!res.ok) {
      return { status: 'outdated', score: 0, signals: [], note: `HTTP ${res.status}` };
    }

    const contentType = res.headers.get('content-type') ?? '';
    if (!contentType.includes('html')) {
      return { status: 'outdated', score: 1, signals: ['reachable'], note: 'Non-HTML response' };
    }

    const html  = await res.text();
    const lower = html.toLowerCase();
    const finalUrl = res.url;

    // Quality signals
    const sigs: Record<string, boolean> = {
      ssl:        finalUrl.startsWith('https://'),
      viewport:   /name=["']viewport["']/.test(lower),
      modern_cms: /wordpress|squarespace|wix\.com|webflow|shopify|elementor|divi|avada|themeforest/.test(lower),
      has_images: (lower.match(/<img[\s>]/g) ?? []).length >= 4,
      navigation: /<nav[\s>]|class=["'][^"']*nav|class=["'][^"']*menu/.test(lower),
      booking:    /book now|réserver|book online|check availability|réservation|book a room|availability/i.test(lower),
      contact:    /contact|whatsapp|mailto:|tel:|phone|téléphone/i.test(lower),
      recent:     (() => {
        const m = lower.match(/©\s*(\d{4})|copyright[^<]{0,10}(\d{4})/);
        const yr = m ? parseInt(m[1] ?? m[2]) : 0;
        return yr >= 2022;
      })(),
      fast:       loadMs < 3000,
      rich_content: lower.length > 8000,   // has substantial content
    };

    const signals = Object.entries(sigs).filter(([, v]) => v).map(([k]) => k);
    const score   = signals.length;

    let status: QualityResult['status'];
    if (score >= 7)      status = 'good';
    else if (score >= 4) status = 'ok';
    else                 status = 'outdated';

    return {
      status,
      score,
      signals,
      note: `Score ${score}/10 — ${signals.slice(0, 4).join(', ')}${signals.length > 4 ? '…' : ''}`,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Error';
    if (msg.includes('abort')) return { status: 'outdated', score: 0, signals: [], note: 'Timeout' };
    return { status: 'outdated', score: 0, signals: [], note: msg.slice(0, 60) };
  }
}

// ─── Main handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  if (!await isAuthorized(req)) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  let businessId: string, businessName: string, location: string;
  try {
    ({ businessId, businessName, location } = await req.json());
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  // Step 1: Find the website via Google Places
  const { websiteUrl: placesUrl } = await findViaGooglePlaces(businessName, location ?? '');

  let websiteUrl:    string | null = null;
  let websiteStatus: QualityResult['status'] = 'none';
  let note = '';

  if (placesUrl) {
    const type = urlType(placesUrl);
    if (type === 'booking') {
      websiteUrl    = placesUrl;
      websiteStatus = 'booking_only';
      note          = 'Found on booking platform only';
    } else if (type === 'own') {
      websiteUrl = placesUrl;
      const q    = await analyzeWebsite(placesUrl);
      websiteStatus = q.status;
      note          = q.note;
    } else {
      // Social or other — treat as no own website
      websiteStatus = 'none';
      note          = 'Only social media found';
    }
  } else {
    websiteStatus = 'none';
    note          = 'Not found on Google Maps/Places';
  }

  // Step 2: Persist to Supabase
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (sbUrl && sbKey && businessId) {
    const sb = createClient(sbUrl, sbKey);
    await sb.from('businesses').update({
      website_url:    websiteUrl,
      website_status: websiteStatus,
      notes:          note,
      updated_at:     new Date().toISOString(),
    }).eq('id', businessId);
  }

  return NextResponse.json({ ok: true, websiteUrl, websiteStatus, note });
}
