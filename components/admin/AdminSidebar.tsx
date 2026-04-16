'use client';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Globe, BarChart3, LogOut, ShieldAlert } from 'lucide-react';

const NAV = [
  { href: '/admin/outreach',      label: 'Email Outreach', icon: Mail      },
  { href: '/admin/website-check', label: 'Website Check',  icon: Globe     },
  { href: '/admin/analytics',     label: 'Analytics',      icon: BarChart3 },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router   = useRouter();

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <div className="w-52 flex-shrink-0 flex flex-col"
      style={{ background: '#0f0c1a', borderRight: '1px solid #1e1a2e' }}>

      {/* Logo */}
      <div className="px-4 py-4" style={{ borderBottom: '1px solid #1e1a2e' }}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(139,47,232,0.2)', border: '1px solid rgba(139,47,232,0.35)' }}>
            <ShieldAlert size={15} style={{ color: '#a855f7' }} />
          </div>
          <div>
            <div className="text-xs font-black leading-tight" style={{ color: '#fff' }}>IPC Admin</div>
            <div className="text-[10px] leading-tight" style={{ color: '#4b4560' }}>Danger Zone</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map(n => {
          const Icon   = n.icon;
          const active = pathname.startsWith(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{
                background:  active ? 'rgba(139,47,232,0.15)' : 'transparent',
                border:      active ? '1px solid rgba(139,47,232,0.3)' : '1px solid transparent',
                color:       active ? '#c084fc' : '#6b6585',
              }}
            >
              <Icon size={15} />
              {n.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4" style={{ borderTop: '1px solid #1e1a2e' }}>
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
          style={{ color: '#4b4560' }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#f87171'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(127,0,0,0.15)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#4b4560'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
        >
          <LogOut size={15} />
          Log out
        </button>
      </div>
    </div>
  );
}
