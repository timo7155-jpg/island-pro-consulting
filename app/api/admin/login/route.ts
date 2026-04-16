export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const validEmail    = process.env.ADMIN_EMAIL    ?? 'timo7155@gmail.com';
    const validPassword = process.env.ADMIN_PASSWORD ?? 'PalmPearl7937!';
    const secret        = new TextEncoder().encode(
      process.env.ADMIN_JWT_SECRET ?? 'ipc-admin-secret-change-me'
    );

    if (email !== validEmail || password !== validPassword) {
      return NextResponse.json({ ok: false, error: 'Invalid credentials' }, { status: 401 });
    }

    const token = await new SignJWT({ email, role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(secret);

    const res = NextResponse.json({ ok: true });
    res.cookies.set('admin_token', token, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge:   60 * 60 * 24 * 7,
      path:     '/',
    });
    return res;
  } catch {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
