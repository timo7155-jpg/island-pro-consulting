export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const SITE   = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://islandproconsulting.mu';

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

function buildSubject(name: string, ws: string): string {
  if (ws === 'none')         return `Un site web pour ${name} — développez votre activité`;
  if (ws === 'booking_only') return `${name} — votre propre site, moins de commission`;
  return `Modernisez votre présence en ligne — ${name}`;
}

function buildIntro(name: string, ws: string): string {
  if (ws === 'none')
    return `Nous avons remarqué que <strong>${name}</strong> n'a pas encore de site web. C'est une opportunité à saisir — vos concurrents sont déjà en ligne.`;
  if (ws === 'booking_only')
    return `<strong>${name}</strong> est visible sur les plateformes de réservation — mais sans site propre, vous payez des commissions élevées et perdez le contrôle de votre image.`;
  return `Le site web de <strong>${name}</strong> mériterait une mise à jour pour mieux attirer des clients en 2025.`;
}

export async function POST(req: NextRequest) {
  if (!await isAuthorized(req)) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { businessId, businessName, toEmail, websiteStatus } = await req.json();

    if (!toEmail) {
      return NextResponse.json({ ok: false, error: 'No email address' }, { status: 400 });
    }

    const trackingToken = crypto.randomUUID();
    const trackingUrl   = `${SITE}/api/admin/track/${trackingToken}`;
    const subject       = buildSubject(businessName, websiteStatus ?? 'none');
    const intro         = buildIntro(businessName, websiteStatus ?? 'none');

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f4fe;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f4fe;padding:32px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

  <tr><td style="background:linear-gradient(135deg,#8B2FE8 0%,#C040F0 100%);padding:28px 36px;">
    <div style="color:#fff;font-size:20px;font-weight:900;letter-spacing:-0.5px;">Island Pro Consulting</div>
    <div style="color:rgba(255,255,255,0.7);font-size:12px;margin-top:4px;">Terre Rouge, Rodrigues · Mauritius</div>
  </td></tr>

  <tr><td style="padding:36px 36px 28px;">
    <p style="color:#333;font-size:15px;margin:0 0 18px;">Bonjour,</p>
    <p style="color:#333;font-size:15px;line-height:1.75;margin:0 0 24px;">${intro} Nous sommes Island Pro Consulting, basé à Terre Rouge, Rodrigues — nous aidons les entreprises locales à se développer en ligne.</p>

    <div style="background:#f8f5ff;border-left:4px solid #8B2FE8;padding:18px 22px;border-radius:0 10px 10px 0;margin:0 0 24px;">
      <div style="color:#8B2FE8;font-weight:900;font-size:14px;margin-bottom:10px;">Ce que nous proposons :</div>
      <div style="color:#555;font-size:14px;line-height:2.0;">
        ✓ Site web professionnel, visible sur Google<br>
        ✓ Réservations directes — zéro commission<br>
        ✓ Présence active sur les réseaux sociaux<br>
        ✓ Tarifs adaptés aux entreprises de Rodrigues<br>
        ✓ Rencontre en personne disponible
      </div>
    </div>

    <p style="color:#333;font-size:15px;line-height:1.75;margin:0 0 28px;">Un premier échange sans engagement — à votre lieu ou chez nous à Terre Rouge. Répondez simplement à cet email ou contactez-nous par WhatsApp.</p>

    <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
      <tr>
        <td style="padding-right:12px;">
          <a href="https://wa.me/23058137384?text=Bonjour%2C%20j%27ai%20reçu%20votre%20message%20et%20je%20souhaite%20en%20savoir%20plus."
             style="background:#25D366;color:#fff;padding:13px 22px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;">💬 WhatsApp</a>
        </td>
        <td>
          <a href="mailto:contact@islandproconsulting.mu"
             style="background:#8B2FE8;color:#fff;padding:13px 22px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;">✉️ Répondre par email</a>
        </td>
      </tr>
    </table>

    <div style="border-top:1px solid #eee;padding-top:20px;">
      <p style="color:#aaa;font-size:11px;margin:0;line-height:1.8;">
        Island Pro Consulting · Terre Rouge, Rodrigues, Republic of Mauritius<br>
        <a href="mailto:contact@islandproconsulting.mu" style="color:#8B2FE8;text-decoration:none;">contact@islandproconsulting.mu</a> · +230 5813 7384 ·
        <a href="${SITE}" style="color:#8B2FE8;text-decoration:none;">islandproconsulting.mu</a>
      </p>
    </div>
  </td></tr>

</table>
</td></tr>
</table>
<img src="${trackingUrl}" width="1" height="1" alt="" style="display:none;width:1px;height:1px;border:0;" />
</body>
</html>`;

    const { error } = await resend.emails.send({
      from:    'Island Pro Consulting <onboarding@resend.dev>',
      to:      [toEmail],
      replyTo: 'contact@islandproconsulting.mu',
      subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 });
    }

    // Update Supabase if configured
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (sbUrl && sbKey && businessId) {
      const sb = createClient(sbUrl, sbKey);

      await sb.from('outreach_emails').insert({
        business_id:    businessId,
        tracking_token: trackingToken,
        subject,
        status:         'sent',
        sent_at:        new Date().toISOString(),
      });

      await sb.from('businesses')
        .update({ outreach_status: 'sent', updated_at: new Date().toISOString() })
        .eq('id', businessId);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('send-proposal error:', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
