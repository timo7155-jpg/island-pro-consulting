'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  Send, CheckCircle, Eye, MessageSquare,
  RefreshCw, Upload, X, Mail,
} from 'lucide-react';
import { getSupabase } from '@/lib/supabase';

type Business = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  type: string;
  location: string;
  website_status: string;
  outreach_status: string;
  notes: string | null;
};

const STATUS_BADGE: Record<string, { bg: string; color: string; label: string }> = {
  pending:   { bg: 'rgba(60,60,80,0.5)',    color: '#888',    label: 'Pending'   },
  sent:      { bg: 'rgba(37,99,235,0.15)',  color: '#60a5fa', label: 'Sent'      },
  opened:    { bg: 'rgba(217,119,6,0.15)',  color: '#fbbf24', label: 'Opened'    },
  replied:   { bg: 'rgba(22,163,74,0.15)',  color: '#4ade80', label: 'Replied'   },
  converted: { bg: 'rgba(139,47,232,0.2)',  color: '#c084fc', label: 'Converted' },
  skipped:   { bg: 'rgba(30,27,46,0.8)',    color: '#4b4560', label: 'Skipped'   },
};

const WS_BADGE: Record<string, { bg: string; color: string }> = {
  none:         { bg: 'rgba(185,28,28,0.2)',  color: '#f87171' },
  booking_only: { bg: 'rgba(194,65,12,0.2)',  color: '#fb923c' },
  outdated:     { bg: 'rgba(161,98,7,0.2)',   color: '#fbbf24' },
  ok:           { bg: 'rgba(37,99,235,0.15)', color: '#60a5fa' },
  good:         { bg: 'rgba(22,163,74,0.15)', color: '#4ade80' },
  unknown:      { bg: 'rgba(60,60,80,0.4)',   color: '#888'    },
};

const FILTER_TABS = ['all', 'pending', 'sent', 'opened', 'replied', 'converted', 'skipped'] as const;
type FilterTab = typeof FILTER_TABS[number];

function Badge({ val, map }: { val: string; map: Record<string, { bg: string; color: string; label?: string }> }) {
  const s = map[val] ?? map.unknown ?? { bg: 'rgba(60,60,80,0.4)', color: '#888' };
  return (
    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
      style={{ background: s.bg, color: s.color }}>
      {('label' in s && s.label) ? s.label : val.replace('_', ' ')}
    </span>
  );
}

export default function OutreachPage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading]       = useState(true);
  const [filter, setFilter]         = useState<FilterTab>('all');
  const [selected, setSelected]     = useState<Set<string>>(new Set());
  const [sending, setSending]       = useState<Set<string>>(new Set());
  const [dbError, setDbError]       = useState('');
  const [notConfigured, setNotConfigured] = useState(false);

  const fetchBusinesses = useCallback(async () => {
    setLoading(true);
    setDbError('');
    try {
      const sb = getSupabase();
      const { data, error: err } = await sb
        .from('businesses')
        .select('*')
        .order('priority', { ascending: true })
        .order('name',     { ascending: true });

      if (err) {
        if (err.message.includes('does not exist') || err.message.includes('relation')) {
          setNotConfigured(true);
        } else {
          setDbError(err.message);
        }
      } else {
        setBusinesses(data ?? []);
      }
    } catch (e: unknown) {
      setDbError(e instanceof Error ? e.message : 'Connection failed');
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchBusinesses(); }, [fetchBusinesses]);

  const counts = FILTER_TABS.reduce((acc, f) => {
    acc[f] = f === 'all' ? businesses.length : businesses.filter(b => b.outreach_status === f).length;
    return acc;
  }, {} as Record<FilterTab, number>);

  const filtered = filter === 'all'
    ? businesses
    : businesses.filter(b => b.outreach_status === filter);

  async function sendProposal(b: Business) {
    if (!b.email) { alert('No email address for ' + b.name); return; }
    setSending(s => new Set(s).add(b.id));

    const res = await fetch('/api/admin/send-proposal', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        businessId:    b.id,
        businessName:  b.name,
        toEmail:       b.email,
        websiteStatus: b.website_status,
      }),
    });

    if (res.ok) {
      setBusinesses(bs => bs.map(x => x.id === b.id ? { ...x, outreach_status: 'sent' } : x));
    } else {
      alert('Failed to send to ' + b.name);
    }
    setSending(s => { const n = new Set(s); n.delete(b.id); return n; });
  }

  async function updateStatus(id: string, status: string) {
    const sb = getSupabase();
    await sb.from('businesses').update({ outreach_status: status, updated_at: new Date().toISOString() }).eq('id', id);
    setBusinesses(bs => bs.map(b => b.id === id ? { ...b, outreach_status: status } : b));
  }

  async function batchSend() {
    const toSend = filtered.filter(b => selected.has(b.id) && b.email && b.outreach_status === 'pending');
    if (toSend.length === 0) { alert('No pending businesses with email addresses selected.'); return; }
    if (!confirm(`Send proposal to ${toSend.length} businesses?`)) return;

    for (const b of toSend) {
      await sendProposal(b);
      await new Promise(r => setTimeout(r, 600));
    }
    setSelected(new Set());
  }

  async function importFromJson() {
    try {
      const res  = await fetch('/rodrigues-accommodations.json');
      const data = await res.json() as Record<string, unknown>[];
      const sb   = getSupabase();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const rows = data.map(({ id: _id, ...rest }) => rest);
      const { error: err } = await sb.from('businesses').insert(rows);
      if (err) { alert('Import error: ' + err.message); return; }
      alert(`Imported ${data.length} businesses!`);
      fetchBusinesses();
    } catch (e) {
      alert('Import failed: ' + (e instanceof Error ? e.message : String(e)));
    }
  }

  if (notConfigured) {
    return (
      <div className="p-8 max-w-2xl">
        <h1 className="text-white font-black text-xl mb-6">Email Outreach</h1>
        <div className="rounded-2xl p-6" style={{ background: 'rgba(161,98,7,0.1)', border: '1px solid rgba(161,98,7,0.3)' }}>
          <h3 className="font-black mb-2 text-base" style={{ color: '#fbbf24' }}>⚠️ Database Not Set Up</h3>
          <p className="text-sm mb-4" style={{ color: 'rgba(251,191,36,0.7)' }}>
            Add these variables in Vercel → Settings → Environment Variables, then redeploy:
          </p>
          <div className="rounded-xl p-4 text-xs space-y-1.5 mb-4 font-mono" style={{ background: '#0f0c1a', color: '#4ade80' }}>
            <div>NEXT_PUBLIC_SUPABASE_URL=https://yduebgrezasqdqouhmes.supabase.co</div>
            <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here</div>
          </div>
          <p className="text-sm" style={{ color: 'rgba(251,191,36,0.7)' }}>
            Then run the SQL in <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: '#1e1a2e', color: '#c084fc' }}>public/admin-setup.sql</code> in your Supabase dashboard (SQL Editor).
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 min-h-full">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="font-black text-xl" style={{ color: '#fff' }}>Email Outreach</h1>
          <p className="text-sm mt-0.5" style={{ color: '#4b4560' }}>Send proposals · Track opens · Convert leads</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={importFromJson}
            className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
            style={{ background: '#1e1a2e', color: '#888', border: '1px solid #2a2545' }}>
            <Upload size={13} /> Import List
          </button>
          {selected.size > 0 && (
            <button onClick={batchSend}
              className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
              style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)', color: '#fff' }}>
              <Send size={13} /> Batch Send ({selected.size})
            </button>
          )}
          <button onClick={fetchBusinesses}
            className="p-2.5 rounded-xl transition-all"
            style={{ background: '#1e1a2e', color: '#6b6585' }}>
            <RefreshCw size={14} />
          </button>
        </div>
      </div>

      {dbError && (
        <div className="text-sm px-4 py-3 rounded-xl mb-4"
          style={{ background: 'rgba(127,0,0,0.15)', border: '1px solid rgba(180,0,0,0.25)', color: '#f87171' }}>
          {dbError}
        </div>
      )}

      {/* Filter tabs + counts */}
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTER_TABS.map(f => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl transition-all capitalize"
              style={{
                background: active ? 'rgba(139,47,232,0.2)' : '#1e1a2e',
                border:     active ? '1px solid rgba(139,47,232,0.4)' : '1px solid #2a2545',
                color:      active ? '#c084fc' : '#6b6585',
              }}
            >
              {f}
              <span className="text-[10px] px-1.5 py-0.5 rounded-full font-black"
                style={{ background: active ? 'rgba(139,47,232,0.3)' : 'rgba(60,60,80,0.5)', color: active ? '#e9d5ff' : '#888' }}>
                {counts[f]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Table */}
      {loading ? (
        <div className="text-sm py-20 text-center" style={{ color: '#4b4560' }}>
          Loading businesses...
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-sm py-20 text-center" style={{ color: '#4b4560' }}>
          {filter === 'all'
            ? 'No businesses yet. Click "Import List" to load the Rodrigues accommodation list.'
            : `No businesses with status "${filter}".`}
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #1e1a2e' }}>
          {/* Head */}
          <div className="grid grid-cols-[28px,1fr,100px,90px,120px,100px] gap-3 px-4 py-3 text-[11px] font-bold uppercase tracking-wider"
            style={{ background: '#0f0c1a', borderBottom: '1px solid #1e1a2e', color: '#4b4560' }}>
            <div>
              <input type="checkbox"
                className="w-3.5 h-3.5"
                checked={selected.size === filtered.length && filtered.length > 0}
                onChange={e => setSelected(e.target.checked ? new Set(filtered.map(b => b.id)) : new Set())}
              />
            </div>
            <div>Business</div>
            <div className="hidden sm:block">Website</div>
            <div>Status</div>
            <div className="hidden md:block">Email</div>
            <div>Actions</div>
          </div>

          {/* Rows */}
          {filtered.map((b, i) => (
            <div key={b.id}
              className="grid grid-cols-[28px,1fr,100px,90px,120px,100px] gap-3 px-4 py-3 items-center transition-colors"
              style={{
                borderBottom: i < filtered.length - 1 ? '1px solid rgba(30,26,46,0.7)' : 'none',
                background:   'transparent',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(30,26,46,0.5)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}
            >
              <div>
                <input type="checkbox" className="w-3.5 h-3.5"
                  checked={selected.has(b.id)}
                  onChange={e => {
                    const n = new Set(selected);
                    e.target.checked ? n.add(b.id) : n.delete(b.id);
                    setSelected(n);
                  }}
                />
              </div>

              <div>
                <div className="text-sm font-bold truncate" style={{ color: '#e2e0f0', maxWidth: 220 }}>{b.name}</div>
                <div className="text-xs" style={{ color: '#4b4560' }}>{b.location}</div>
              </div>

              <div className="hidden sm:block">
                <Badge val={b.website_status} map={WS_BADGE} />
              </div>

              <div>
                <Badge val={b.outreach_status} map={STATUS_BADGE} />
              </div>

              <div className="hidden md:block truncate text-xs" style={{ color: b.email ? '#6b6585' : '#3a3555', fontStyle: b.email ? 'normal' : 'italic' }}>
                {b.email ? b.email : 'no email'}
              </div>

              <div className="flex items-center gap-1">
                {/* Send */}
                {['pending', 'sent'].includes(b.outreach_status) && b.email && (
                  <button onClick={() => sendProposal(b)} disabled={sending.has(b.id)}
                    title="Send Proposal"
                    className="p-1.5 rounded-lg transition-all disabled:opacity-40"
                    style={{ background: 'rgba(139,47,232,0.15)', color: '#c084fc' }}>
                    {sending.has(b.id)
                      ? <RefreshCw size={12} className="animate-spin" />
                      : <Send size={12} />}
                  </button>
                )}
                {/* No email warning */}
                {['pending'].includes(b.outreach_status) && !b.email && (
                  <span title="No email — add in Website Check" className="p-1.5">
                    <Mail size={12} style={{ color: '#3a3555' }} />
                  </span>
                )}
                {/* Mark opened */}
                {b.outreach_status === 'sent' && (
                  <button onClick={() => updateStatus(b.id, 'opened')}
                    title="Mark Opened"
                    className="p-1.5 rounded-lg transition-all"
                    style={{ background: 'rgba(217,119,6,0.1)', color: '#fbbf24' }}>
                    <Eye size={12} />
                  </button>
                )}
                {/* Mark replied */}
                {['sent', 'opened'].includes(b.outreach_status) && (
                  <button onClick={() => updateStatus(b.id, 'replied')}
                    title="Mark Replied"
                    className="p-1.5 rounded-lg transition-all"
                    style={{ background: 'rgba(22,163,74,0.1)', color: '#4ade80' }}>
                    <MessageSquare size={12} />
                  </button>
                )}
                {/* Mark converted */}
                {b.outreach_status === 'replied' && (
                  <button onClick={() => updateStatus(b.id, 'converted')}
                    title="Mark Converted ✓"
                    className="p-1.5 rounded-lg transition-all"
                    style={{ background: 'rgba(139,47,232,0.15)', color: '#c084fc' }}>
                    <CheckCircle size={12} />
                  </button>
                )}
                {/* Skip */}
                {b.outreach_status !== 'skipped' && b.outreach_status !== 'converted' && (
                  <button onClick={() => updateStatus(b.id, 'skipped')}
                    title="Skip"
                    className="p-1.5 rounded-lg transition-all"
                    style={{ background: 'rgba(30,26,46,0.5)', color: '#4b4560' }}>
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
