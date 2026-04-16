'use client';
import { useState, useEffect, useCallback } from 'react';
import { ExternalLink, RefreshCw, Upload, PenLine, Check, Send } from 'lucide-react';
import { getSupabase } from '@/lib/supabase';

type Business = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  type: string;
  location: string;
  website_url: string | null;
  website_status: string;
  priority: string;
  outreach_status: string;
  notes: string | null;
};

const WS_CONFIG: Record<string, { label: string; bg: string; color: string; priority: string }> = {
  none:         { label: 'No website',    bg: 'rgba(185,28,28,0.18)',  color: '#f87171', priority: 'HIGH'   },
  booking_only: { label: 'Booking only',  bg: 'rgba(194,65,12,0.18)',  color: '#fb923c', priority: 'HIGH'   },
  outdated:     { label: 'Outdated',      bg: 'rgba(161,98,7,0.18)',   color: '#fbbf24', priority: 'MEDIUM' },
  ok:           { label: 'OK',            bg: 'rgba(37,99,235,0.15)',  color: '#60a5fa', priority: 'LOW'    },
  good:         { label: 'Good',          bg: 'rgba(22,163,74,0.15)',  color: '#4ade80', priority: 'SKIP'   },
  unknown:      { label: 'Unknown',       bg: 'rgba(60,60,80,0.4)',    color: '#888',    priority: '—'      },
};

const PRIORITY_GROUPS = [
  { key: 'high',    label: '🔴 High Priority',    statusFilter: ['none', 'booking_only'], desc: 'No website or booking-platform only — top targets' },
  { key: 'medium',  label: '🟡 Medium Priority',   statusFilter: ['outdated'],            desc: 'Outdated website — good upgrade opportunity'       },
  { key: 'low',     label: '🟢 Low / Skip',         statusFilter: ['ok', 'good'],          desc: 'Decent website — less urgent'                      },
];

function EditableEmail({
  businessId, email, onSaved,
}: { businessId: string; email: string | null; onSaved: (val: string) => void }) {
  const [editing, setEditing] = useState(false);
  const [val, setVal]         = useState(email ?? '');
  const [saving, setSaving]   = useState(false);

  async function save() {
    setSaving(true);
    const sb = getSupabase();
    await sb.from('businesses').update({ email: val || null }).eq('id', businessId);
    onSaved(val);
    setEditing(false);
    setSaving(false);
  }

  if (editing) {
    return (
      <div className="flex items-center gap-1.5">
        <input
          type="email"
          value={val}
          onChange={e => setVal(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && save()}
          autoFocus
          className="text-xs px-2 py-1 rounded-lg flex-1 min-w-0 focus:outline-none"
          style={{ background: '#1e1a2e', border: '1px solid rgba(139,47,232,0.5)', color: '#e2e0f0', width: 160 }}
          placeholder="email@example.com"
        />
        <button onClick={save} disabled={saving}
          className="p-1 rounded-lg"
          style={{ background: 'rgba(22,163,74,0.2)', color: '#4ade80' }}>
          {saving ? <RefreshCw size={11} className="animate-spin" /> : <Check size={11} />}
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => setEditing(true)}
      className="flex items-center gap-1.5 text-xs transition-colors group"
      style={{ color: email ? '#6b6585' : '#3a3555' }}>
      {email ? (
        <span className="truncate max-w-[140px]">{email}</span>
      ) : (
        <span className="italic" style={{ color: '#3a3555' }}>+ add email</span>
      )}
      <PenLine size={10} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" style={{ color: '#6b6585' }} />
    </button>
  );
}

export default function WebsiteCheckPage() {
  const [businesses, setBusinesses]       = useState<Business[]>([]);
  const [loading, setLoading]             = useState(true);
  const [sending, setSending]             = useState<Set<string>>(new Set());
  const [notConfigured, setNotConfigured] = useState(false);

  const fetchBusinesses = useCallback(async () => {
    setLoading(true);
    try {
      const sb = getSupabase();
      const { data, error } = await sb
        .from('businesses')
        .select('*')
        .order('name');

      if (error) {
        if (error.message.includes('does not exist') || error.message.includes('relation')) {
          setNotConfigured(true);
        }
      } else {
        setBusinesses(data ?? []);
      }
    } catch { /* silent */ }
    setLoading(false);
  }, []);

  useEffect(() => { fetchBusinesses(); }, [fetchBusinesses]);

  function updateEmailInState(id: string, email: string) {
    setBusinesses(bs => bs.map(b => b.id === id ? { ...b, email: email || null } : b));
  }

  async function sendProposal(b: Business) {
    if (!b.email) { alert('Add an email address first.'); return; }
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

  async function importFromJson() {
    try {
      const res  = await fetch('/rodrigues-accommodations.json');
      const data = await res.json() as Record<string, unknown>[];
      const sb   = getSupabase();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const rows = data.map(({ id: _id, ...rest }) => rest);
      const { error } = await sb.from('businesses').insert(rows);
      if (error) { alert('Import error: ' + error.message); return; }
      alert(`Imported ${data.length} businesses!`);
      fetchBusinesses();
    } catch (e) {
      alert('Import failed: ' + (e instanceof Error ? e.message : String(e)));
    }
  }

  if (notConfigured) {
    return (
      <div className="p-8">
        <h1 className="text-white font-black text-xl mb-4">Website Check</h1>
        <div className="rounded-2xl p-6 max-w-xl"
          style={{ background: 'rgba(161,98,7,0.1)', border: '1px solid rgba(161,98,7,0.3)' }}>
          <p className="font-black mb-2" style={{ color: '#fbbf24' }}>⚠️ Database not configured</p>
          <p className="text-sm" style={{ color: 'rgba(251,191,36,0.7)' }}>
            Configure Supabase env vars and run the setup SQL. See the Outreach tab for instructions.
          </p>
        </div>
      </div>
    );
  }

  const highCount   = businesses.filter(b => ['none','booking_only'].includes(b.website_status)).length;
  const medCount    = businesses.filter(b => b.website_status === 'outdated').length;
  const lowCount    = businesses.filter(b => ['ok','good'].includes(b.website_status)).length;

  return (
    <div className="p-6 lg:p-8 min-h-full">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="font-black text-xl" style={{ color: '#fff' }}>Website Check</h1>
          <p className="text-sm mt-0.5" style={{ color: '#4b4560' }}>
            Identify prospects · Add emails · Send proposals
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={importFromJson}
            className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl"
            style={{ background: '#1e1a2e', color: '#888', border: '1px solid #2a2545' }}>
            <Upload size={13} /> Import Rodrigues List
          </button>
          <button onClick={fetchBusinesses}
            className="p-2.5 rounded-xl"
            style={{ background: '#1e1a2e', color: '#6b6585' }}>
            <RefreshCw size={14} />
          </button>
        </div>
      </div>

      {/* Priority stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: 'HIGH — No / Booking only',  count: highCount, bg: 'rgba(185,28,28,0.12)', border: 'rgba(185,28,28,0.25)', color: '#f87171' },
          { label: 'MEDIUM — Outdated',          count: medCount,  bg: 'rgba(161,98,7,0.12)',  border: 'rgba(161,98,7,0.25)',  color: '#fbbf24' },
          { label: 'LOW / SKIP',                 count: lowCount,  bg: 'rgba(22,163,74,0.08)', border: 'rgba(22,163,74,0.2)',  color: '#4ade80' },
        ].map(s => (
          <div key={s.label} className="rounded-2xl p-4 text-center"
            style={{ background: s.bg, border: `1px solid ${s.border}` }}>
            <div className="text-2xl font-black" style={{ color: s.color }}>{loading ? '—' : s.count}</div>
            <div className="text-[10px] font-bold mt-1 uppercase tracking-wide" style={{ color: s.color }}>{s.label}</div>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="text-sm py-20 text-center" style={{ color: '#4b4560' }}>Loading businesses...</div>
      ) : businesses.length === 0 ? (
        <div className="text-sm py-20 text-center" style={{ color: '#4b4560' }}>
          No businesses yet. Click &ldquo;Import Rodrigues List&rdquo; to get started.
        </div>
      ) : (
        <div className="space-y-8">
          {PRIORITY_GROUPS.map(group => {
            const rows = businesses.filter(b => group.statusFilter.includes(b.website_status));
            if (rows.length === 0) return null;
            return (
              <div key={group.key}>
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-sm font-black" style={{ color: '#e2e0f0' }}>{group.label}</h2>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: '#1e1a2e', color: '#4b4560' }}>{rows.length}</span>
                  <span className="text-xs" style={{ color: '#4b4560' }}>{group.desc}</span>
                </div>

                <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #1e1a2e' }}>
                  {rows.map((b, i) => {
                    const ws     = WS_CONFIG[b.website_status] ?? WS_CONFIG.unknown;
                    const isSent = ['sent','opened','replied','converted'].includes(b.outreach_status);
                    return (
                      <div key={b.id}
                        className="grid items-center gap-3 px-4 py-3 transition-colors"
                        style={{
                          gridTemplateColumns: '1fr 90px 170px 80px 90px',
                          borderBottom: i < rows.length - 1 ? '1px solid rgba(30,26,46,0.7)' : 'none',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(30,26,46,0.4)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}
                      >
                        {/* Name */}
                        <div>
                          <div className="text-sm font-bold truncate" style={{ color: '#e2e0f0' }}>{b.name}</div>
                          <div className="text-xs" style={{ color: '#4b4560' }}>{b.type} · {b.location}</div>
                        </div>

                        {/* Website status */}
                        <div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: ws.bg, color: ws.color }}>
                            {ws.label}
                          </span>
                        </div>

                        {/* Email (editable) */}
                        <div>
                          <EditableEmail
                            businessId={b.id}
                            email={b.email}
                            onSaved={val => updateEmailInState(b.id, val)}
                          />
                        </div>

                        {/* Website link */}
                        <div>
                          {b.website_url ? (
                            <a href={b.website_url} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs"
                              style={{ color: '#6b6585' }}>
                              <ExternalLink size={11} /> View
                            </a>
                          ) : (
                            <span className="text-xs italic" style={{ color: '#2e2845' }}>—</span>
                          )}
                        </div>

                        {/* Send / status */}
                        <div>
                          {isSent ? (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize"
                              style={{ background: 'rgba(139,47,232,0.15)', color: '#c084fc' }}>
                              {b.outreach_status}
                            </span>
                          ) : b.email ? (
                            <button onClick={() => sendProposal(b)} disabled={sending.has(b.id)}
                              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all disabled:opacity-40"
                              style={{ background: 'rgba(139,47,232,0.2)', color: '#c084fc' }}>
                              {sending.has(b.id)
                                ? <RefreshCw size={11} className="animate-spin" />
                                : <Send size={11} />}
                              Send
                            </button>
                          ) : (
                            <span className="text-xs italic" style={{ color: '#2e2845' }}>add email first</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
