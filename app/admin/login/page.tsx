'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShieldAlert, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/admin/login', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/admin/outreach');
    } else {
      setError('Invalid credentials. Access denied.');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6"
      style={{ background: '#09060F' }}>

      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[700px] h-[500px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(ellipse, rgba(139,0,0,0.15) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(139,47,232,0.1) 0%, transparent 70%)' }} />
      </div>

      <div className="relative w-full max-w-sm">

        {/* Warning pill */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2.5 text-xs font-bold px-4 py-2 rounded-full"
            style={{ background: 'rgba(127,0,0,0.25)', border: '1px solid rgba(180,0,0,0.35)', color: '#f87171' }}>
            <ShieldAlert size={13} />
            Authorized Personnel Only
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8" style={{ background: '#111018', border: '1px solid #1e1b2e' }}>
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(139,47,232,0.15)', border: '1px solid rgba(139,47,232,0.3)' }}>
              <ShieldAlert size={22} style={{ color: '#a855f7' }} />
            </div>
            <h1 className="font-black text-lg" style={{ color: '#fff' }}>Admin Portal</h1>
            <p className="text-xs mt-1" style={{ color: '#4b4560' }}>Island Pro Consulting — Internal Use</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold mb-1.5" style={{ color: '#6b6585' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full text-sm rounded-xl px-4 py-3 focus:outline-none transition-colors placeholder-[#3a3555]"
                style={{
                  background: '#1a1728',
                  border: '1px solid #2a2545',
                  color: '#fff',
                }}
                placeholder="admin@example.com"
                onFocus={e => { e.currentTarget.style.borderColor = '#8B2FE8'; }}
                onBlur={e => { e.currentTarget.style.borderColor = '#2a2545'; }}
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-1.5" style={{ color: '#6b6585' }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full text-sm rounded-xl px-4 py-3 pr-11 focus:outline-none transition-colors placeholder-[#3a3555]"
                  style={{
                    background: '#1a1728',
                    border: '1px solid #2a2545',
                    color: '#fff',
                  }}
                  placeholder="••••••••"
                  onFocus={e => { e.currentTarget.style.borderColor = '#8B2FE8'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#2a2545'; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPw(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: '#4b4560' }}
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-xs px-4 py-3 rounded-xl"
                style={{ background: 'rgba(127,0,0,0.2)', border: '1px solid rgba(180,0,0,0.3)', color: '#f87171' }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full font-black text-sm py-3.5 rounded-xl transition-all mt-2 disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #8B2FE8, #C040F0)', color: '#fff' }}
            >
              {loading ? 'Verifying...' : 'Enter Danger Zone →'}
            </button>
          </form>
        </div>

        <div className="flex items-center justify-between mt-6">
          <Link href="/"
            className="flex items-center gap-1.5 text-xs transition-colors hover:opacity-80"
            style={{ color: '#4b4560' }}>
            <ArrowLeft size={12} />
            Back to homepage
          </Link>
          <p className="text-xs" style={{ color: '#2e2845' }}>
            Authorized staff only
          </p>
        </div>
      </div>
    </div>
  );
}
