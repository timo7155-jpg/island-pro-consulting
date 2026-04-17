export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { createClient } from '@supabase/supabase-js';

// ─── Auth ─────────────────────────────────────────────────────────────────────
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

// ─── URL classification ────────────────────────────────────────────────────────
const BOOKING_DOMAINS = [
  'booking.com','airbnb.com','airbnb.fr','tripadvisor.com','tripadvisor.fr',
  'expedia.com','hotels.com','agoda.com','vrbo.com','homeaway.com',
  'mauritiusholiday.mu','rodrigues-island.com','iles-rodrigues.com',
  'holidaycheck.com','holidaylettings.co.uk','laterooms.com',
];
const SOCIAL_DOMAINS = ['facebook.com','instagram.com','twitter.com','tiktok.com','youtube.com'];
const SKIP_DOMAINS   = ['wikipedia.org','tripadvisor.com','yelp.com','google.com','bing.com',
                        'duckduckgo.com','foursquare.com','maps.google.com'];

function urlType(url: string): 'own' | 'booking' | 'social' | 'skip' {
  try {
    const d = new URL(url).hostname.toLowerCase().replace(/^www\./, '');
    if (BOOKING_DOMAINS.some(p => d.includes(p))) return 'booking';
    if (SOCIAL_DOMAINS.some(p => d.includes(p)))  return 'social';
    if (SKIP_DOMAINS.some(p => d.includes(p)))     return 'skip';
    return 'own';
  } catch { return 'skip'; }
}

// ─── Strategy 1: Google Places API ────────────────────────────────────────────
async function findViaGooglePlaces(name: string, location: string): Promise<string | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;
  const query = `${name} ${location} Rodrigues Mauritius`;
  const url   = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`
              + `?input=${encodeURIComponent(query)}`
              + `&inputtype=textquery&fields=website`
              + `&locationbias=circle:30000@-19.7177,63.4217&key=${key}`;
  try {
    const res  = await fetch(url, { signal: AbortSignal.timeout(7000) });
    const data = await res.json() as { status: string; candidates: Array<{ website?: string }> };
    if (data.status === 'OK' && data.candidates?.[0]?.website) {
      return data.candidates[0].website;
    }
  } catch { /* timeout */ }
  return null;
}

// ─── Strategy 2: Bing web search scraping ─────────────────────────────────────
async function searchBing(query: string): Promise<string[]> {
  const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}&count=8&setlang=en`;
  try {
    const res = await fetch(searchUrl, {
      headers: {
        'User-Agent':      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept':          'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'identity',
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return [];
    const html = await res.text();

    const urls: string[] = [];
    // Bing puts result links in <h2><a href="..."> — these are the direct destination URLs
    const hrefRe = /<h2[^>]*>\s*<a[^>]+href="(https?:\/\/[^"?#]+[^"]*)"[^>]*>/g;
    let m;
    while ((m = hrefRe.exec(html)) !== null) {
      try {
        const u = new URL(m[1]);
        const clean = u.origin + u.pathname.replace(/\/$/, '');
        if (!urls.includes(clean)) urls.push(clean);
      } catch { /* skip */ }
    }
    return urls;
  } catch { return []; }
}

// ─── Strategy 3: DuckDuckGo HTML search ───────────────────────────────────────
async function searchDDG(query: string): Promise<string[]> {
  const searchUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(searchUrl, {
      headers: {
        'User-Agent':      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept':          'text/html',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return [];
    const html = await res.text();

    const urls: string[] = [];
    // DDG result links: <a class="result__a" href="...">
    const re = /class="result__a"[^>]+href="([^"]+)"/g;
    let m;
    while ((m = re.exec(html)) !== null) {
      // DDG sometimes uses relative redirect links — decode them
      let href = m[1];
      if (href.startsWith('//duckduckgo.com/l/?')) {
        const uddg = new URLSearchParams(href.split('?')[1]).get('uddg');
        if (uddg) href = decodeURIComponent(uddg);
      }
      if (href.startsWith('http') && !urls.includes(href)) {
        urls.push(href);
      }
    }
    return urls;
  } catch { return []; }
}

// ─── Strategy 3 & 4: Email domain check + URL pattern guessing ────────────────
function slugify(name: string): string {
  return name.toLowerCase()
    .replace(/[àâä]/g,'a').replace(/[éèêë]/g,'e').replace(/[îï]/g,'i')
    .replace(/[ôö]/g,'o').replace(/[ùûü]/g,'u').replace(/[ç]/g,'c')
    .replace(/['']/g,'').replace(/\s+/g,'').replace(/[^a-z0-9]/g,'');
}
function slugifyDash(name: string): string {
  return name.toLowerCase()
    .replace(/[àâä]/g,'a').replace(/[éèêë]/g,'e').replace(/[îï]/g,'i')
    .replace(/[ôö]/g,'o').replace(/[ùûü]/g,'u').replace(/[ç]/g,'c')
    .replace(/['']/g,'').replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
}

// Generic / ISP / free email domains — not the business's own website
const GENERIC_EMAIL_DOMAINS = new Set([
  'gmail.com','yahoo.com','yahoo.fr','hotmail.com','hotmail.fr','outlook.com',
  'live.com','icloud.com','me.com','orange.mu','myt.mu','intnet.mu','trimetys.com',
  'adrenaline.mu','4sights.mu','novonotarius.mu','omnicane.com','cielgroup.com',
  'repelectric.net','tpg.com.au','yahoo.com.au','msn.com',
]);

function guessUrls(name: string, email?: string | null): string[] {
  const s  = slugify(name);
  const sd = slugifyDash(name);

  const urls: string[] = [];

  // Priority: email domain (if it's a custom domain, it's likely their website)
  if (email) {
    const domain = email.split('@')[1]?.toLowerCase();
    if (domain && !GENERIC_EMAIL_DOMAINS.has(domain) && !GENERIC_EMAIL_DOMAINS.has(domain.split('.').slice(-2).join('.'))) {
      urls.push(`https://www.${domain}`);
      urls.push(`https://${domain}`);
    }
  }

  // Slug-based guesses
  urls.push(
    `https://www.${s}.com`,
    `https://www.${s}.mu`,
    `https://www.${sd}.com`,
    `https://www.${sd}.mu`,
    `https://${s}.com`,
    `https://${s}.mu`,
    // Rodrigues-specific suffix patterns
    `https://www.${s}rodrigues.com`,
    `https://www.${sd}-rodrigues.com`,
    `https://${sd}-rodrigues.com`,
    // Accommodation prefix patterns
    `https://www.gite-${sd}.com`,
    `https://gite${s}.com`,
    `https://www.villa-${sd}.com`,
    `https://villa${s}.com`,
    `https://www.hotel${s}.com`,
    `https://www.lodge${s}.com`,
    `https://residence${s}.com`,
    `https://www.${sd}lodge.com`,
    `https://www.${sd}hotel.com`,
  );

  return Array.from(new Set(urls)); // deduplicate
}

async function urlExists(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': 'Mozilla/5.0' },
      signal: AbortSignal.timeout(5000),
      redirect: 'follow',
    });
    return res.ok;
  } catch { return false; }
}

// ─── Website quality analyser ─────────────────────────────────────────────────
async function analyzeWebsite(rawUrl: string): Promise<{
  status: 'booking_only' | 'outdated' | 'ok' | 'good';
  score:  number;
  note:   string;
}> {
  try {
    const res = await fetch(rawUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
        'Accept': 'text/html',
      },
      signal: AbortSignal.timeout(9000),
      redirect: 'follow',
    });

    if (!res.ok) return { status: 'outdated', score: 0, note: `HTTP ${res.status}` };

    const t0   = Date.now();
    const html = await res.text();
    const ms   = Date.now() - t0;
    const low  = html.toLowerCase();

    const sigs: Record<string, boolean> = {
      ssl:          res.url.startsWith('https://'),
      viewport:     /name=["']viewport["']/.test(low),
      modern_cms:   /wordpress|squarespace|wix\.com|webflow|shopify|elementor|divi/.test(low),
      has_images:   (low.match(/<img[\s>]/g) ?? []).length >= 4,
      navigation:   /<nav[\s>]|class=["'][^"']*nav|class=["'][^"']*menu/.test(low),
      booking:      /book now|réserver|book online|check availability|réservation|book a room|availability/i.test(low),
      contact:      /contact|whatsapp|mailto:|tel:|phone|téléphone/i.test(low),
      recent:       (() => {
        const m = low.match(/©\s*(\d{4})|copyright[^<]{0,10}(\d{4})/);
        return m ? parseInt(m[1] ?? m[2]) >= 2022 : false;
      })(),
      fast:         ms < 3000,
      rich_content: low.length > 8000,
    };

    const signals = Object.entries(sigs).filter(([,v]) => v).map(([k]) => k);
    const score   = signals.length;
    const status  = score >= 7 ? 'good' : score >= 4 ? 'ok' : 'outdated';

    return {
      status,
      score,
      note: `Score ${score}/10 · ${signals.slice(0,4).join(', ')}${signals.length > 4 ? '…' : ''}`,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Error';
    return { status: 'outdated', score: 0, note: msg.includes('abort') ? 'Timeout' : msg.slice(0,60) };
  }
}

// ─── Main orchestrator ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  if (!await isAuthorized(req)) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  let businessId: string, businessName: string, location: string, businessEmail: string | null;
  try {
    ({ businessId, businessName, location, businessEmail } = await req.json());
    businessEmail = businessEmail ?? null;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  let websiteUrl:    string | null = null;
  let websiteStatus  = 'none';
  let note           = '';
  let foundVia       = '';

  // ── Strategy 1: Google Places ───────────────────────────────────────────────
  const placesUrl = await findViaGooglePlaces(businessName, location ?? '');
  if (placesUrl) {
    websiteUrl = placesUrl;
    foundVia   = 'Google Places';
  }

  // ── Strategy 2: URL patterns (email domain first, then slug guesses) ────────
  if (!websiteUrl) {
    const guesses = guessUrls(businessName, businessEmail);
    for (const guess of guesses) {
      if (await urlExists(guess)) {
        websiteUrl = guess;
        foundVia   = businessEmail && guess.includes(businessEmail.split('@')[1] ?? '___')
          ? 'email domain' : 'URL pattern';
        break;
      }
    }
  }

  // ── Strategy 3: Web search (Bing → DDG fallback) ───────────────────────────
  if (!websiteUrl) {
    const query    = `"${businessName}" Rodrigues`;
    const bingUrls = await searchBing(query);
    const ddgUrls  = bingUrls.length > 0 ? [] : await searchDDG(query);
    const allUrls  = [...bingUrls, ...ddgUrls];

    const ownUrl = allUrls.find(u => urlType(u) === 'own');
    if (ownUrl) {
      websiteUrl = ownUrl;
      foundVia   = bingUrls.length > 0 ? 'Bing search' : 'DuckDuckGo search';
    } else {
      const bookingUrl = allUrls.find(u => urlType(u) === 'booking');
      if (bookingUrl) {
        websiteUrl    = bookingUrl;
        websiteStatus = 'booking_only';
        note          = 'Only found on booking platform';
        foundVia      = 'web search';
      }
    }
  }

  // ── Analyse quality of own website ─────────────────────────────────────────
  if (websiteUrl && websiteStatus !== 'booking_only') {
    const type = urlType(websiteUrl);
    if (type === 'booking') {
      websiteStatus = 'booking_only';
      note          = `On booking platform (${foundVia})`;
    } else {
      const q       = await analyzeWebsite(websiteUrl);
      websiteStatus = q.status;
      note          = `${q.note} [via ${foundVia}]`;
    }
  } else if (!websiteUrl) {
    websiteStatus = 'none';
    note          = 'Not found via Places, Bing, DDG, or URL patterns';
  }

  // ── Save to Supabase ────────────────────────────────────────────────────────
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
