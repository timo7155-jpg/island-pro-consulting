'use client';
import { useState, useEffect, useCallback } from 'react';
import { BarChart3, Users, Eye, TrendingUp, ExternalLink, RefreshCw } from 'lucide-react';
import { getSupabase } from '@/lib/supabase';

type Stats = {
  total: number;
  sent: number;
  opened: number;
  replied: number;
  converted: number;
};

export default function AnalyticsPage() {
  const [stats, setStats]   = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      const sb = getSupabase();
      const { data } = await sb.from('businesses').select('outreach_status');
      if (data) {
        setStats({
          total:     data.length,
          sent:      data.filter(d => ['sent','opened','replied','converted'].includes(d.outreach_status)).length,
          opened:    data.filter(d => ['opened','replied','converted'].includes(d.outreach_status)).length,
          replied:   data.filter(d => ['replied','converted'].includes(d.outreach_status)).length,
          converted: data.filter(d => d.outreach_status === 'converted').length,
        });
      }
    } catch { /* silent */ }
    setLoading(false);
  }, []);

  useEffect(() => { fetchStats(); }, [fetchStats]);

  const openRate    = stats && stats.sent > 0 ? Math.round((stats.opened / stats.sent) * 100) : 0;
  const replyRate   = stats && stats.opened > 0 ? Math.round((stats.replied / stats.opened) * 100) : 0;
  const convertRate = stats && stats.replied > 0 ? Math.round((stats.converted / stats.replied) * 100) : 0;

  return (
    <div className="p-6 lg:p-8 min-h-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-xl" style={{ color: '#fff' }}>Analytics</h1>
          <p className="text-sm mt-0.5" style={{ color: '#4b4560' }}>Outreach funnel · Website traffic</p>
        </div>
        <button onClick={fetchStats}
          className="p-2.5 rounded-xl"
          style={{ background: '#1e1a2e', color: '#6b6585' }}>
          <RefreshCw size={14} />
        </button>
      </div>

      {/* Outreach Funnel */}
      <section className="mb-10">
        <h2 className="text-xs font-black uppercase tracking-wider mb-4" style={{ color: '#4b4560' }}>
          Outreach Funnel
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { icon: Users,    label: 'Total Businesses', value: stats?.total,     color: '#888'    },
            { icon: BarChart3, label: 'Proposals Sent',  value: stats?.sent,      color: '#60a5fa' },
            { icon: Eye,       label: 'Opened',          value: stats?.opened,    color: '#fbbf24' },
            { icon: TrendingUp,label: 'Replied',         value: stats?.replied,   color: '#4ade80' },
            { icon: TrendingUp,label: 'Converted',       value: stats?.converted, color: '#c084fc' },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="rounded-2xl p-5 text-center"
                style={{ background: '#0f0c1a', border: '1px solid #1e1a2e' }}>
                <Icon size={18} className="mx-auto mb-2" style={{ color: s.color }} />
                <div className="text-2xl font-black" style={{ color: '#fff' }}>
                  {loading ? '—' : (s.value ?? 0)}
                </div>
                <div className="text-[10px] font-bold mt-1 uppercase tracking-wide" style={{ color: '#4b4560' }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rates */}
        {!loading && stats && stats.sent > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { label: 'Open Rate',    value: openRate,    desc: 'of sent emails were opened'    },
              { label: 'Reply Rate',   value: replyRate,   desc: 'of opens led to a reply'       },
              { label: 'Convert Rate', value: convertRate, desc: 'of replies became clients'     },
            ].map(r => (
              <div key={r.label} className="rounded-2xl p-4 text-center"
                style={{ background: 'rgba(139,47,232,0.08)', border: '1px solid rgba(139,47,232,0.2)' }}>
                <div className="text-3xl font-black" style={{ color: '#c084fc' }}>{r.value}%</div>
                <div className="text-xs font-black mt-1" style={{ color: '#e2e0f0' }}>{r.label}</div>
                <div className="text-[10px] mt-0.5" style={{ color: '#4b4560' }}>{r.desc}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Website Traffic */}
      <section className="mb-10">
        <h2 className="text-xs font-black uppercase tracking-wider mb-4" style={{ color: '#4b4560' }}>
          Website Traffic
        </h2>
        <div className="rounded-2xl p-6" style={{ background: '#0f0c1a', border: '1px solid #1e1a2e' }}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid #1e1a2e' }}>
              <BarChart3 size={18} style={{ color: '#c084fc' }} />
            </div>
            <div>
              <h3 className="font-black text-sm mb-1" style={{ color: '#fff' }}>Vercel Analytics</h3>
              <p className="text-sm mb-4" style={{ color: '#4b4560', lineHeight: 1.7 }}>
                Your website traffic is tracked by Vercel Analytics. View page views, unique visitors, and top pages directly in your Vercel dashboard.
              </p>
              <a
                href="https://vercel.com/timosalim7155s-projects/island-pro-consulting/analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-xl transition-all"
                style={{ background: 'rgba(139,47,232,0.2)', color: '#c084fc', border: '1px solid rgba(139,47,232,0.3)' }}
              >
                <ExternalLink size={14} /> Open Vercel Analytics
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Tips */}
      <section>
        <h2 className="text-xs font-black uppercase tracking-wider mb-4" style={{ color: '#4b4560' }}>
          Tips to Improve Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { title: 'Follow up after 3 days', desc: 'If no reply after 3 days, send a short WhatsApp follow-up. Response rates triple.' },
            { title: 'Personalise the subject', desc: 'Emails with the business name in the subject get opened 40% more.' },
            { title: 'Target "no website" first', desc: 'Businesses with zero web presence have the clearest pain point — close rate is higher.' },
            { title: 'Offer a free 15-min call', desc: 'Lower the barrier to entry. A short call converts better than a long proposal.' },
          ].map(tip => (
            <div key={tip.title} className="rounded-2xl p-5"
              style={{ background: '#0f0c1a', border: '1px solid #1e1a2e' }}>
              <div className="text-sm font-black mb-1.5" style={{ color: '#e2e0f0' }}>💡 {tip.title}</div>
              <div className="text-xs leading-relaxed" style={{ color: '#4b4560' }}>{tip.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
