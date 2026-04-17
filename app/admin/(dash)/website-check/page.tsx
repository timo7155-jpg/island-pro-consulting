'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  ExternalLink, RefreshCw, Search, Zap, Check,
  PenLine, Send, Globe, AlertCircle,
} from 'lucide-react';
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

type ScanResult = {
  websiteUrl: string | null;
  websiteStatus: string;
  note: string;
};

// ─── Status config ────────────────────────────────────────────────────────────
const WS: Record<string, { label: string; bg: string; color: string; icon: string }> = {
  none:         { label: 'No website',   bg: 'rgba(185,28,28,0.18)',  color: '#f87171', icon: '🚫' },
  booking_only: { label: 'Booking only', bg: 'rgba(194,65,12,0.18)',  color: '#fb923c', icon: '🏨' },
  outdated:     { label: 'Outdated',     bg: 'rgba(161,98,7,0.18)',   color: '#fbbf24', icon: '⚠️' },
  ok:           { label: 'OK',           bg: 'rgba(37,99,235,0.15)',  color: '#60a5fa', icon: '✓'  },
  good:         { label: 'Good',         bg: 'rgba(22,163,74,0.15)',  color: '#4ade80', icon: '⭐' },
  unknown:      { label: 'Not scanned',  bg: 'rgba(60,60,80,0.35)',   color: '#666',    icon: '?'  },
};

// ─── Editable email cell ───────────────────────────────────────────────────────
function EditableEmail({ businessId, email, onSaved }: {
  businessId: string; email: string | null; onSaved: (v: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [val, setVal]         = useState(email ?? '');
  const [saving, setSaving]   = useState(false);

  async function save() {
    setSaving(true);
    await getSupabase().from('businesses').update({ email: val || null }).eq('id', businessId);
    onSaved(val);
    setEditing(false);
    setSaving(false);
  }

  if (editing) return (
    <div className="flex items-center gap-1">
      <input type="email" value={val} onChange={e => setVal(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && save()}
        autoFocus className="text-xs px-2 py-1 rounded-lg flex-1 focus:outline-none"
        style={{ background: '#1e1a2e', border: '1px solid rgba(139,47,232,0.5)', color: '#e2e0f0', width: 150 }}
        placeholder="email@example.com" />
      <button onClick={save} disabled={saving}
        className="p-1 rounded-lg" style={{ background: 'rgba(22,163,74,0.2)', color: '#4ade80' }}>
        {saving ? <RefreshCw size={10} className="animate-spin" /> : <Check size={10} />}
      </button>
    </div>
  );

  return (
    <button onClick={() => setEditing(true)}
      className="flex items-center gap-1 text-xs group transition-colors"
      style={{ color: email ? '#6b6585' : '#3a3555' }}>
      {email
        ? <span className="truncate max-w-[130px]">{email}</span>
        : <span className="italic" style={{ color: '#3a3555' }}>+ add email</span>}
      <PenLine size={9} className="opacity-0 group-hover:opacity-60 flex-shrink-0" />
    </button>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
const FILTERS = ['all', 'unknown', 'none', 'booking_only', 'outdated', 'ok', 'good'] as const;
type Filter = typeof FILTERS[number];

export default function WebsiteCheckPage() {
  const [businesses, setBusinesses]   = useState<Business[]>([]);
  const [loading, setLoading]         = useState(true);
  const [filter, setFilter]           = useState<Filter>('all');
  const [scanning, setScanning]       = useState<Set<string>>(new Set());
  const [batchRunning, setBatchRunning] = useState(false);
  const [batchProgress, setBatchProgress] = useState({ done: 0, total: 0 });
  const [sending, setSending]         = useState<Set<string>>(new Set());
  const batchAbort = useRef(false);

  const fetchBusinesses = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await getSupabase().from('businesses').select('*').order('name');
      setBusinesses(data ?? []);
    } catch { /* silent */ }
    setLoading(false);
  }, []);

  useEffect(() => { fetchBusinesses(); }, [fetchBusinesses]);

  // ── Per-row scan ────────────────────────────────────────────────────────────
  async function scanOne(b: Business): Promise<ScanResult | null> {
    setScanning(s => new Set(s).add(b.id));
    try {
      const res = await fetch('/api/admin/check-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessId:    b.id,
          businessName:  b.name,
          location:      b.location ?? '',
          businessEmail: b.email,
        }),
      });
      if (!res.ok) return null;
      const result: ScanResult = await res.json();
      setBusinesses(bs => bs.map(x => x.id === b.id
        ? { ...x, website_url: result.websiteUrl, website_status: result.websiteStatus, notes: result.note }
        : x
      ));
      return result;
    } catch { return null; }
    finally {
      setScanning(s => { const n = new Set(s); n.delete(b.id); return n; });
    }
  }

  // ── Batch scan all unknown ──────────────────────────────────────────────────
  async function scanAllUnknown() {
    const queue = businesses.filter(b => b.website_status === 'unknown');
    if (queue.length === 0) { alert('All businesses have already been scanned.'); return; }
    if (!confirm(`Scan ${queue.length} unscanned businesses? This uses Google Places API and may take a few minutes.`)) return;

    setBatchRunning(true);
    batchAbort.current = false;
    setBatchProgress({ done: 0, total: queue.length });

    for (let i = 0; i < queue.length; i++) {
      if (batchAbort.current) break;
      await scanOne(queue[i]);
      setBatchProgress({ done: i + 1, total: queue.length });
      // Small delay between requests to avoid rate limiting
      if (i < queue.length - 1) await new Promise(r => setTimeout(r, 800));
    }

    setBatchRunning(false);
  }

  // ── Send proposal ───────────────────────────────────────────────────────────
  async function sendProposal(b: Business) {
    if (!b.email) { alert('Add an email address first.'); return; }
    setSending(s => new Set(s).add(b.id));
    const res = await fetch('/api/admin/send-proposal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        businessId: b.id, businessName: b.name,
        toEmail: b.email, websiteStatus: b.website_status,
      }),
    });
    if (res.ok) {
      setBusinesses(bs => bs.map(x => x.id === b.id ? { ...x, outreach_status: 'sent' } : x));
    } else { alert('Failed to send to ' + b.name); }
    setSending(s => { const n = new Set(s); n.delete(b.id); return n; });
  }

  // ── Derived stats ───────────────────────────────────────────────────────────
  const counts = {
    all:          businesses.length,
    unknown:      businesses.filter(b => b.website_status === 'unknown').length,
    none:         businesses.filter(b => b.website_status === 'none').length,
    booking_only: businesses.filter(b => b.website_status === 'booking_only').length,
    outdated:     businesses.filter(b => b.website_status === 'outdated').length,
    ok:           businesses.filter(b => b.website_status === 'ok').length,
    good:         businesses.filter(b => b.website_status === 'good').length,
  };

  const filtered = filter === 'all' ? businesses : businesses.filter(b => b.website_status === filter);
  const highPriority = counts.none + counts.booking_only;

  return (
    <div className="p-6 lg:p-8 min-h-full">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="font-black text-xl" style={{ color: '#fff' }}>Website Checker</h1>
          <p className="text-sm mt-0.5" style={{ color: '#4b4560' }}>
            Auto-discover websites · Score quality · Identify upgrade opportunities
          </p>
        </div>
        <div className="flex items-center gap-2">
          {batchRunning ? (
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold"
              style={{ background: 'rgba(139,47,232,0.15)', color: '#c084fc', border: '1px solid rgba(139,47,232,0.3)' }}>
              <RefreshCw size={13} className="animate-spin" />
              Scanning {batchProgress.done}/{batchProgress.total}…
              <button onClick={() => { batchAbort.current = true; }}
                className="ml-1 opacity-60 hover:opacity-100 text-xs">stop</button>
            </div>
          ) : (
            <button onClick={scanAllUnknown}
              className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
              style={{ background: 'rgba(139,47,232,0.2)', color: '#c084fc', border: '1px solid rgba(139,47,232,0.3)' }}>
              <Zap size={13} /> Scan All Unscanned ({counts.unknown})
            </button>
          )}
          <button onClick={fetchBusinesses}
            className="p-2.5 rounded-xl" style={{ background: '#1e1a2e', color: '#6b6585' }}>
            <RefreshCw size={14} />
          </button>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'High priority',  value: highPriority,      color: '#f87171', bg: 'rgba(185,28,28,0.12)', border: 'rgba(185,28,28,0.2)', hint: 'none + booking only' },
          { label: 'Outdated',       value: counts.outdated,   color: '#fbbf24', bg: 'rgba(161,98,7,0.12)',  border: 'rgba(161,98,7,0.2)',  hint: 'needs revamp'       },
          { label: 'OK / Good',      value: counts.ok + counts.good, color: '#4ade80', bg: 'rgba(22,163,74,0.08)', border: 'rgba(22,163,74,0.15)', hint: 'decent websites' },
          { label: 'Not scanned',    value: counts.unknown,    color: '#666',    bg: 'rgba(60,60,80,0.2)',   border: 'rgba(60,60,80,0.3)',  hint: 'run scan to check' },
        ].map(s => (
          <div key={s.label} className="rounded-2xl p-4" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
            <div className="text-2xl font-black mb-0.5" style={{ color: s.color }}>
              {loading ? '—' : s.value}
            </div>
            <div className="text-xs font-bold" style={{ color: s.color }}>{s.label}</div>
            <div className="text-[10px] mt-0.5" style={{ color: s.color, opacity: 0.5 }}>{s.hint}</div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {FILTERS.map(f => {
          const ws = WS[f] ?? { color: '#888', bg: '' };
          const active = filter === f;
          return (
            <button key={f} onClick={() => setFilter(f)}
              className="text-xs font-bold px-3 py-1.5 rounded-xl transition-all"
              style={{
                background: active ? (f === 'all' ? 'rgba(139,47,232,0.25)' : ws.bg) : '#1e1a2e',
                color:      active ? (f === 'all' ? '#c084fc' : ws.color) : '#4b4560',
                border:     active ? `1px solid ${f === 'all' ? 'rgba(139,47,232,0.4)' : ws.color}33` : '1px solid transparent',
              }}>
              {f === 'all' ? `All (${counts.all})` : `${WS[f]?.icon ?? ''} ${WS[f]?.label ?? f} (${counts[f as keyof typeof counts] ?? 0})`}
            </button>
          );
        })}
      </div>

      {/* Table */}
      {loading ? (
        <div className="text-sm py-20 text-center" style={{ color: '#4b4560' }}>Loading…</div>
      ) : filtered.length === 0 ? (
        <div className="text-sm py-16 text-center" style={{ color: '#4b4560' }}>No businesses in this filter.</div>
      ) : (
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #1e1a2e' }}>
          {/* Table header */}
          <div className="grid px-4 py-2 text-[10px] font-black uppercase tracking-widest"
            style={{
              gridTemplateColumns: '1fr 110px 110px 140px 80px 110px',
              background: '#0f0c1a',
              color: '#4b4560',
              borderBottom: '1px solid #1e1a2e',
            }}>
            <div>Business</div>
            <div>Website Status</div>
            <div>URL Found</div>
            <div>Email</div>
            <div>Scan</div>
            <div>Outreach</div>
          </div>

          {filtered.map((b, i) => {
            const ws       = WS[b.website_status] ?? WS.unknown;
            const isSent   = ['sent','opened','replied','converted'].includes(b.outreach_status);
            const isScanning = scanning.has(b.id);

            return (
              <div key={b.id}
                className="grid items-center gap-3 px-4 py-3 transition-colors"
                style={{
                  gridTemplateColumns: '1fr 110px 110px 140px 80px 110px',
                  borderBottom: i < filtered.length - 1 ? '1px solid rgba(30,26,46,0.6)' : 'none',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(30,26,46,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}>

                {/* Name */}
                <div className="min-w-0">
                  <div className="text-sm font-bold truncate" style={{ color: '#e2e0f0' }}>{b.name}</div>
                  <div className="text-[10px] truncate" style={{ color: '#4b4560' }}>
                    {b.type} · {b.location}
                  </div>
                  {b.notes && b.website_status !== 'unknown' && (
                    <div className="text-[10px] truncate mt-0.5" style={{ color: '#3a3555' }}>{b.notes}</div>
                  )}
                </div>

                {/* Website status badge */}
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: ws.bg, color: ws.color }}>
                    {ws.icon} {ws.label}
                  </span>
                </div>

                {/* URL */}
                <div className="min-w-0">
                  {b.website_url ? (
                    <a href={b.website_url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] transition-colors hover:opacity-80 truncate"
                      style={{ color: '#6b6585' }}>
                      <Globe size={10} className="flex-shrink-0" />
                      <span className="truncate">
                        {new URL(b.website_url).hostname.replace(/^www\./, '')}
                      </span>
                      <ExternalLink size={9} className="flex-shrink-0" />
                    </a>
                  ) : (
                    <span className="text-[11px] italic" style={{ color: '#2e2845' }}>—</span>
                  )}
                </div>

                {/* Email editable */}
                <div className="min-w-0">
                  <EditableEmail
                    businessId={b.id}
                    email={b.email}
                    onSaved={val => setBusinesses(bs => bs.map(x => x.id === b.id ? { ...x, email: val || null } : x))}
                  />
                </div>

                {/* Scan button */}
                <div>
                  <button
                    onClick={() => scanOne(b)}
                    disabled={isScanning || batchRunning}
                    className="flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-all disabled:opacity-40"
                    style={{
                      background: b.website_status === 'unknown'
                        ? 'rgba(139,47,232,0.2)' : 'rgba(60,60,80,0.25)',
                      color: b.website_status === 'unknown' ? '#c084fc' : '#4b4560',
                    }}>
                    {isScanning
                      ? <><RefreshCw size={10} className="animate-spin" /> Scanning…</>
                      : b.website_status === 'unknown'
                        ? <><Search size={10} /> Scan</>
                        : <><RefreshCw size={10} /> Re-scan</>}
                  </button>
                </div>

                {/* Outreach */}
                <div>
                  {isSent ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize"
                      style={{ background: 'rgba(139,47,232,0.15)', color: '#c084fc' }}>
                      {b.outreach_status}
                    </span>
                  ) : ['none', 'booking_only', 'outdated'].includes(b.website_status) && b.email ? (
                    <button onClick={() => sendProposal(b)} disabled={sending.has(b.id)}
                      className="flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-all disabled:opacity-40"
                      style={{ background: 'rgba(139,47,232,0.2)', color: '#c084fc' }}>
                      {sending.has(b.id)
                        ? <RefreshCw size={10} className="animate-spin" />
                        : <Send size={10} />}
                      Send
                    </button>
                  ) : b.website_status === 'unknown' ? (
                    <span className="text-[10px] italic" style={{ color: '#2e2845' }}>scan first</span>
                  ) : ['ok', 'good'].includes(b.website_status) ? (
                    <span className="text-[10px] italic" style={{ color: '#2e2845' }}>low priority</span>
                  ) : (
                    <span className="text-[10px] italic" style={{ color: '#2e2845' }}>
                      {b.email ? 'ready' : 'no email'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Legend */}
      {!loading && businesses.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4 items-start">
          <div className="rounded-xl p-4 flex-1 min-w-[280px]"
            style={{ background: 'rgba(139,47,232,0.05)', border: '1px solid rgba(139,47,232,0.1)' }}>
            <div className="text-xs font-black mb-2" style={{ color: '#c084fc' }}>
              <AlertCircle size={11} className="inline mr-1.5" />How scanning works
            </div>
            <div className="text-xs space-y-1" style={{ color: '#4b4560' }}>
              <div>1. Google Maps / Places API lookup by name + location</div>
              <div>2. Email domain check (custom domain → likely their website)</div>
              <div>3. URL pattern guessing (slug, -rodrigues, gite-, villa-…)</div>
              <div>4. Bing / DuckDuckGo web search fallback</div>
              <div>5. Fetches page and scores 10 quality signals</div>
              <div>Scores: 7-10 → <span style={{ color: '#4ade80' }}>Good</span> · 4-6 → <span style={{ color: '#60a5fa' }}>OK</span> · 1-3 → <span style={{ color: '#fbbf24' }}>Outdated</span></div>
            </div>
          </div>
          <div className="rounded-xl p-4 flex-1 min-w-[240px]"
            style={{ background: 'rgba(161,98,7,0.05)', border: '1px solid rgba(161,98,7,0.1)' }}>
            <div className="text-xs font-black mb-2" style={{ color: '#fbbf24' }}>Quality signals checked</div>
            <div className="text-xs space-y-1" style={{ color: '#4b4560' }}>
              {['SSL (https)', 'Mobile viewport', 'Modern CMS/framework', 'Multiple images',
                'Navigation menu', 'Booking capability', 'Contact info', 'Recent (2022+)', 'Fast load (<3s)', 'Rich content'].map(s => (
                <div key={s}>· {s}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
