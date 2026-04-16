export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO     = process.env.CONTACT_EMAIL ?? 'contact@islandproconsulting.mu';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, dropdown, message, service } = body;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8f7ff;padding:32px;border-radius:12px;">
        <div style="background:linear-gradient(135deg,#8B2FE8,#C040F0);padding:20px 24px;border-radius:8px;margin-bottom:24px;">
          <h2 style="color:white;margin:0;font-size:18px;">New Enquiry — Island Pro Consulting</h2>
          <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:13px;">${service ?? 'General'}</p>
        </div>

        <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;">
          ${name    ? `<tr><td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;color:#666;font-size:12px;width:140px;font-weight:bold;">Name</td><td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;color:#0D1126;font-size:14px;">${name}</td></tr>` : ''}
          ${email   ? `<tr><td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;color:#666;font-size:12px;font-weight:bold;">Email</td><td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="mailto:${email}" style="color:#8B2FE8;">${email}</a></td></tr>` : ''}
          ${phone   ? `<tr><td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;color:#666;font-size:12px;font-weight:bold;">Phone / WA</td><td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;color:#0D1126;font-size:14px;"><a href="https://wa.me/${phone.replace(/\D/g,'')}" style="color:#25D366;">${phone}</a></td></tr>` : ''}
          ${dropdown? `<tr><td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;color:#666;font-size:12px;font-weight:bold;">${subject ?? 'Details'}</td><td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;color:#0D1126;font-size:14px;">${dropdown}</td></tr>` : ''}
          ${message ? `<tr><td style="padding:12px 16px;color:#666;font-size:12px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:12px 16px;color:#0D1126;font-size:14px;white-space:pre-line;">${message}</td></tr>` : ''}
        </table>

        <p style="margin-top:24px;font-size:11px;color:#aaa;text-align:center;">
          Sent via islandproconsulting.mu — ${new Date().toLocaleString('fr-MU', { timeZone: 'Indian/Mauritius' })}
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from:    'Island Pro Consulting <onboarding@resend.dev>',
      to:      [TO],
      replyTo: email ?? undefined,
      subject: `New enquiry: ${service ?? 'General'} — ${name ?? 'Unknown'}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
