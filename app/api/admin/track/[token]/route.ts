export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://islandproconsulting.mu';

// 1×1 transparent GIF
const PIXEL = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64'
);

export async function GET(
  req: NextRequest,
  { params }: { params: { token: string } }
) {
  const action = req.nextUrl.searchParams.get('action');
  const target = req.nextUrl.searchParams.get('target'); // base64-encoded URL

  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // ── CLICK TRACKING ───────────────────────────────────────────────
  if (action === 'click' && target) {
    let redirectUrl = SITE;
    try {
      redirectUrl = Buffer.from(target, 'base64').toString('utf-8');
    } catch { /* bad base64 — fallback to site */ }

    if (sbUrl && sbKey) {
      try {
        const sb = createClient(sbUrl, sbKey);

        const { data: emailRow } = await sb
          .from('outreach_emails')
          .select('id, click_count, business_id')
          .eq('tracking_token', params.token)
          .single();

        if (emailRow) {
          await sb.from('outreach_emails').update({
            click_count:  (emailRow.click_count ?? 0) + 1,
            clicked_at:   new Date().toISOString(),
            link_clicked: redirectUrl,
          }).eq('id', emailRow.id);

          if (emailRow.business_id) {
            const { data: biz } = await sb
              .from('businesses')
              .select('click_count, outreach_status')
              .eq('id', emailRow.business_id)
              .single();

            await sb.from('businesses').update({
              click_count: (biz?.click_count ?? 0) + 1,
              clicked_at:  new Date().toISOString(),
              // Promote to 'opened' if still only 'sent'
              ...(biz?.outreach_status === 'sent' ? { outreach_status: 'opened' } : {}),
            }).eq('id', emailRow.business_id);
          }
        }
      } catch { /* silent */ }
    }

    return NextResponse.redirect(redirectUrl, { status: 302 });
  }

  // ── OPEN TRACKING (1×1 pixel) ────────────────────────────────────
  try {
    if (sbUrl && sbKey) {
      const sb = createClient(sbUrl, sbKey);

      const { data } = await sb
        .from('outreach_emails')
        .select('id, opened_count, opened_at, business_id')
        .eq('tracking_token', params.token)
        .single();

      if (data) {
        await sb.from('outreach_emails').update({
          opened_at:    data.opened_at ?? new Date().toISOString(),
          opened_count: (data.opened_count ?? 0) + 1,
        }).eq('id', data.id);

        if (data.business_id) {
          await sb.from('businesses')
            .update({ outreach_status: 'opened' })
            .eq('id', data.business_id)
            .eq('outreach_status', 'sent');
        }
      }
    }
  } catch { /* silent fail — always return the pixel */ }

  return new NextResponse(PIXEL, {
    headers: {
      'Content-Type':  'image/gif',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma':        'no-cache',
    },
  });
}
