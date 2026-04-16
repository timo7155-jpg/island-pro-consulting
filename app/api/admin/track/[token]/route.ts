export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// 1×1 transparent GIF
const PIXEL = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64'
);

export async function GET(
  _req: NextRequest,
  { params }: { params: { token: string } }
) {
  try {
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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
  } catch {
    // Silent fail — always return the pixel
  }

  return new NextResponse(PIXEL, {
    headers: {
      'Content-Type':  'image/gif',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma':        'no-cache',
    },
  });
}
