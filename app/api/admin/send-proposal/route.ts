export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const SITE   = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://islandproconsulting.mu';

function trackClick(token: string, targetUrl: string): string {
  const b64 = Buffer.from(targetUrl).toString('base64');
  return `${SITE}/api/admin/track/${token}?action=click&target=${encodeURIComponent(b64)}`;
}

function buildEmailHtml(name: string, hook: string, trackingToken: string): string {
  const waRaw    = `https://wa.me/23058137384?text=${encodeURIComponent('Hello Mr. Lisette, I want to have more details about your services, can we book a meeting please?')}`;
  const waLink   = trackClick(trackingToken, waRaw);
  const siteLink = trackClick(trackingToken, SITE);
  const pixelUrl = `${SITE}/api/admin/track/${trackingToken}`;

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Island Pro Consulting</title></head>
<body style="margin:0;padding:0;background:#ede9fe;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ede9fe;padding:32px 16px;"><tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 6px 40px rgba(107,33,216,0.12);">

  <tr><td style="background:linear-gradient(135deg,#6B21D8 0%,#A855F7 100%);padding:26px 36px 22px;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td>
        <div style="color:#fff;font-size:21px;font-weight:900;letter-spacing:-0.5px;font-family:Arial,sans-serif;">Island Pro Consulting</div>
        <div style="color:rgba(255,255,255,0.65);font-size:12px;margin-top:3px;font-family:Arial,sans-serif;">Solutions num&eacute;riques &middot; Rodrigues &amp; Maurice</div>
      </td>
      <td align="right" style="vertical-align:middle;">
        <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:6px 12px;display:inline-block;">
          <span style="color:#fff;font-size:11px;font-weight:700;font-family:Arial,sans-serif;">&#127965; Rodrigues</span>
        </div>
      </td>
    </tr></table>
  </td></tr>

  <tr><td style="padding:34px 36px 30px;">

    <!-- Intro with founder photo -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
      <tr>
        <td style="vertical-align:top;padding-right:16px;width:72px;">
          <img src="${SITE}/founder.jpg" alt="Timoth&eacute;e Lisette" width="64" height="64"
            style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:3px solid #ede9fe;display:block;" />
        </td>
        <td style="vertical-align:middle;">
          <p style="color:#1e1b4b;font-size:15px;font-weight:700;margin:0 0 3px;font-family:Arial,sans-serif;">Bonjour,</p>
          <p style="color:#374151;font-size:14px;margin:0;font-family:Arial,sans-serif;">Je suis <strong>Timoth&eacute;e Lisette</strong>, fondateur d&apos;Island Pro Consulting, natif de Rodrigues.</p>
        </td>
      </tr>
    </table>

    <p style="color:#374151;font-size:15px;line-height:1.8;margin:0 0 28px;font-family:Arial,sans-serif;">${hook}</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ff;border-radius:14px;overflow:hidden;margin:0 0 24px;">
      <tr><td style="padding:20px 24px 6px;">
        <div style="color:#6B21D8;font-size:12px;font-weight:900;letter-spacing:0.8px;text-transform:uppercase;font-family:Arial,sans-serif;">&#128202; Le tourisme num&eacute;rique en chiffres</div>
      </td></tr>
      <tr><td style="padding:14px 24px 4px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="color:#4b5563;font-size:13px;font-family:Arial,sans-serif;">Voyageurs v&eacute;rifiant un site web avant de r&eacute;server</td>
            <td align="right" style="color:#6B21D8;font-size:14px;font-weight:900;white-space:nowrap;font-family:Arial,sans-serif;">78&thinsp;%</td>
          </tr>
        </table>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:7px;">
          <tr>
            <td width="78%" height="8" style="background:#6B21D8;border-radius:4px 0 0 4px;font-size:0;line-height:0;">&nbsp;</td>
            <td width="22%" height="8" style="background:#ddd6fe;border-radius:0 4px 4px 0;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="padding:14px 24px 4px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="color:#4b5563;font-size:13px;font-family:Arial,sans-serif;">Commission pr&eacute;lev&eacute;e par Booking.com ou Airbnb par r&eacute;servation</td>
            <td align="right" style="color:#d97706;font-size:14px;font-weight:900;white-space:nowrap;font-family:Arial,sans-serif;">15&ndash;25&thinsp;%</td>
          </tr>
        </table>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:7px;">
          <tr>
            <td width="20%" height="8" style="background:#d97706;border-radius:4px 0 0 4px;font-size:0;line-height:0;">&nbsp;</td>
            <td width="80%" height="8" style="background:#fef3c7;border-radius:0 4px 4px 0;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="padding:14px 24px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="color:#4b5563;font-size:13px;font-family:Arial,sans-serif;">H&eacute;bergements avec site pro&nbsp;: hausse des r&eacute;servations directes</td>
            <td align="right" style="color:#059669;font-size:14px;font-weight:900;white-space:nowrap;font-family:Arial,sans-serif;">+2&times;</td>
          </tr>
        </table>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:7px;">
          <tr>
            <td width="65%" height="8" style="background:#059669;border-radius:4px 0 0 4px;font-size:0;line-height:0;">&nbsp;</td>
            <td width="35%" height="8" style="background:#d1fae5;border-radius:0 4px 4px 0;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
        </table>
      </td></tr>
    </table>

    <p style="color:#374151;font-size:14px;line-height:1.8;margin:0 0 24px;font-family:Arial,sans-serif;">Ces chiffres parlent d&apos;eux-m&ecirc;mes&nbsp;: dans le secteur touristique actuel, votre visibilit&eacute; en ligne d&eacute;termine directement vos revenus. Sans site web, des centaines de voyageurs qui cherchent un h&eacute;bergement &agrave; Rodrigues passent &agrave; c&ocirc;t&eacute; de vous &mdash; et r&eacute;servent chez un concurrent qui a d&eacute;j&agrave; fait ce pas.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#fffbeb;border:1px solid #fde68a;border-radius:12px;margin:0 0 26px;">
      <tr><td style="padding:18px 22px;">
        <div style="color:#92400e;font-size:14px;font-weight:900;margin-bottom:7px;font-family:Arial,sans-serif;">&#9992;&#65039; Extension de l&apos;a&eacute;roport de Rodrigues</div>
        <div style="color:#78350f;font-size:13px;line-height:1.75;font-family:Arial,sans-serif;">Des centaines de nouveaux visiteurs sont attendus. Les h&eacute;bergements visibles en ligne capteront la grande majorit&eacute; de ces touristes. <strong>C&apos;est maintenant le bon moment d&apos;agir.</strong></div>
      </td></tr>
    </table>

    <div style="margin:0 0 20px;">
      <div style="color:#1e1b4b;font-size:14px;font-weight:900;margin-bottom:12px;font-family:Arial,sans-serif;">Ce que nous proposons pour <strong>${name}</strong>&nbsp;:</div>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="color:#374151;font-size:14px;padding:5px 0;font-family:Arial,sans-serif;"><span style="color:#6B21D8;font-weight:900;">&#10003;</span>&nbsp; Site web premium avec votre propre nom de domaine</td></tr>
        <tr><td style="color:#374151;font-size:14px;padding:5px 0;font-family:Arial,sans-serif;"><span style="color:#6B21D8;font-weight:900;">&#10003;</span>&nbsp; R&eacute;servations directes &mdash; z&eacute;ro commission plateforme</td></tr>
        <tr><td style="color:#374151;font-size:14px;padding:5px 0;font-family:Arial,sans-serif;"><span style="color:#6B21D8;font-weight:900;">&#10003;</span>&nbsp; R&eacute;f&eacute;rencement Google et fiche Google optimis&eacute;s</td></tr>
        <tr><td style="color:#059669;font-size:14px;padding:5px 0;font-weight:700;font-family:Arial,sans-serif;"><span style="font-weight:900;">&#10003;</span>&nbsp; <strong>Paiement uniquement apr&egrave;s votre totale satisfaction</strong></td></tr>
        <tr><td style="color:#374151;font-size:14px;padding:5px 0;font-family:Arial,sans-serif;"><span style="color:#6B21D8;font-weight:900;">&#10003;</span>&nbsp; Livraison en 5 &agrave; 10 jours ouvrables</td></tr>
        <tr><td style="color:#374151;font-size:14px;padding:5px 0;font-family:Arial,sans-serif;"><span style="color:#6B21D8;font-weight:900;">&#10003;</span>&nbsp; Rencontre en personne possible &agrave; Rodrigues</td></tr>
      </table>
    </div>

    <p style="color:#374151;font-size:14px;line-height:1.8;margin:0 0 22px;font-family:Arial,sans-serif;">Si vous souhaitez en savoir plus, contactez-moi directement par WhatsApp ou r&eacute;pondez &agrave; cet email. Je suis natif de Rodrigues et disponible pour une rencontre sur l&apos;&icirc;le.</p>

    <table cellpadding="0" cellspacing="0" style="margin:0 0 34px;">
      <tr>
        <td style="padding-right:12px;">
          <a href="${waLink}" style="background:#25D366;color:#fff;padding:13px 26px;border-radius:9px;text-decoration:none;font-weight:900;font-size:14px;display:inline-block;font-family:Arial,sans-serif;">&#128172; WhatsApp</a>
        </td>
        <td>
          <a href="${siteLink}" style="background:#6B21D8;color:#fff;padding:13px 26px;border-radius:9px;text-decoration:none;font-weight:900;font-size:14px;display:inline-block;font-family:Arial,sans-serif;">&#127758; Voir notre site web</a>
        </td>
      </tr>
    </table>

    <!-- 100% recommended badge -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;margin:0 0 24px;">
      <tr><td style="padding:14px 20px;">
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="font-size:22px;padding-right:12px;vertical-align:middle;">&#11088;</td>
            <td style="vertical-align:middle;">
              <div style="color:#15803d;font-size:13px;font-weight:900;font-family:Arial,sans-serif;">100% recommand&eacute; sur les r&eacute;seaux sociaux</div>
              <div style="color:#166534;font-size:12px;margin-top:2px;font-family:Arial,sans-serif;">Nos clients nous recommandent &agrave; leur entourage &mdash; c&apos;est notre plus grande fiert&eacute;.</div>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #ede9fe;">
      <tr><td style="padding-top:20px;">
        <div style="color:#1e1b4b;font-size:14px;font-weight:900;font-family:Arial,sans-serif;">Timoth&eacute;e Lisette</div>
        <div style="color:#7c3aed;font-size:13px;font-weight:700;margin-top:2px;font-family:Arial,sans-serif;">Fondateur &mdash; Island Pro Consulting</div>
        <div style="color:#6b7280;font-size:12px;margin-top:6px;line-height:1.8;font-family:Arial,sans-serif;">
          Natif de Rodrigues<br>
          &#128241; <a href="tel:+23058137384" style="color:#7c3aed;text-decoration:none;">+230&nbsp;5813&nbsp;7384</a>
          &nbsp;&middot;&nbsp;
          <a href="mailto:contact@islandproconsulting.mu" style="color:#7c3aed;text-decoration:none;">contact@islandproconsulting.mu</a>
        </div>
        <div style="color:#9ca3af;font-size:11px;margin-top:8px;font-family:Arial,sans-serif;">
          <a href="${SITE}" style="color:#7c3aed;text-decoration:none;">islandproconsulting.mu</a>
          &nbsp;&middot;&nbsp; Terre Rouge, Rodrigues, R&eacute;publique de Maurice
        </div>
      </td></tr>
    </table>
  </td></tr>
</table>
</td></tr></table>
<img src="${pixelUrl}" width="1" height="1" alt="" style="display:none;width:1px;height:1px;border:0;" />
</body>
</html>`;
}

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

export async function POST(req: NextRequest) {
  if (!await isAuthorized(req)) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json() as {
      businessId?:   string;
      businessName?: string;
      toEmail?:      string;
      emailHook?:    string;
      emailSubject?: string;
      preview?:      boolean;
    };

    const { businessId, businessName, toEmail, emailHook, emailSubject, preview } = body;

    let hook    = emailHook    ?? '';
    let subject = emailSubject ?? '';
    let name    = businessName ?? '';

    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Fetch hook & subject from DB if not provided directly
    if ((!hook || !subject) && businessId && sbUrl && sbKey) {
      const sb = createClient(sbUrl, sbKey);
      const { data: biz } = await sb
        .from('businesses')
        .select('name, email_hook, email_subject')
        .eq('id', businessId)
        .single();
      if (biz) {
        if (!name)    name    = biz.name          ?? name;
        if (!hook)    hook    = biz.email_hook    ?? '';
        if (!subject) subject = biz.email_subject ?? '';
      }
    }

    // Generic fallbacks
    if (!name)    name    = businessName ?? 'votre \u00e9tablissement';
    if (!subject) subject = `${name} \u2014 d\u00e9veloppons ensemble votre pr\u00e9sence en ligne \u00e0 Rodrigues`;
    if (!hook)    hook    = `Nous avons d\u00e9couvert ${name} lors de nos recherches sur les h\u00e9bergements de Rodrigues, et nous pensons qu\u2019un site web professionnel pourrait vraiment vous aider \u00e0 d\u00e9velopper votre client\u00e8le et \u00e0 vous faire conna\u00eetre aupr\u00e8s de voyageurs qui seraient ravis de vous d\u00e9couvrir. Avec la croissance du tourisme sur l\u2019\u00eele, de plus en plus de visiteurs planifient leur s\u00e9jour enti\u00e8rement en ligne \u2014 et nous serions heureux de vous accompagner dans cette d\u00e9marche, \u00e0 votre rythme et sans aucun paiement avant votre totale satisfaction.`;

    const trackingToken = crypto.randomUUID();
    const html = buildEmailHtml(name, hook, trackingToken);

    // Preview mode — return rendered HTML without sending
    if (preview) {
      return NextResponse.json({ ok: true, html, subject });
    }

    if (!toEmail) {
      return NextResponse.json({ ok: false, error: 'No email address' }, { status: 400 });
    }

    const { error: resendErr } = await resend.emails.send({
      from:    'Island Pro Consulting <onboarding@resend.dev>',
      to:      [toEmail],
      replyTo: 'contact@islandproconsulting.mu',
      subject,
      html,
    });

    if (resendErr) {
      console.error('Resend error:', resendErr);
      return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 });
    }

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
