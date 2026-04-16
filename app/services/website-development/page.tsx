'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, Check, CheckCircle2,
  TrendingUp, Users, Globe, Smartphone, Search, Star,
  Hotel, ShoppingBag, Scissors, Utensils, Briefcase, Camera,
  DollarSign, BarChart3, MessageCircle, Calendar,
  Zap, Shield, Palette, Clock
} from 'lucide-react';

// Beautiful browser-window mockup component
function SiteMockup({ title, subtitle, colors, accent, spots }: {
  title: string; subtitle: string;
  colors: string[]; accent: string; spots: { x: number; y: number; w: number; h: number; c: string }[];
}) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-white/60 bg-white">
      {/* Browser chrome */}
      <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-gray-400 mx-2 border border-gray-200">
          www.your-business.mu
        </div>
      </div>
      {/* Page content mockup */}
      <div className="relative h-44 overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}>
        {/* Nav bar */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-black/20 flex items-center px-3 gap-3">
          <div className="w-10 h-2 rounded-full bg-white/70" />
          <div className="flex-1" />
          {[1,2,3].map(i => <div key={i} className="w-6 h-1.5 rounded-full bg-white/40" />)}
          <div className="w-10 h-4 rounded-md bg-white/90" />
        </div>
        {/* Hero area */}
        <div className="absolute top-10 left-4 right-4">
          <div className="w-32 h-3 rounded-full bg-white/90 mb-2" />
          <div className="w-48 h-2 rounded-full bg-white/60 mb-1" />
          <div className="w-40 h-2 rounded-full bg-white/50 mb-4" />
          <div className="w-20 h-6 rounded-lg" style={{ background: accent }} />
        </div>
        {/* Decorative spots */}
        {spots.map((s, i) => (
          <div key={i} className="absolute rounded-lg opacity-80"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.w}%`, height: `${s.h}px`, background: s.c }} />
        ))}
      </div>
      {/* Bottom info bar */}
      <div className="bg-white px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-xs font-black text-gray-800">{title}</div>
          <div className="text-[10px] text-gray-400">{subtitle}</div>
        </div>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => <Star key={i} size={8} className="text-yellow-400 fill-yellow-400" />)}
        </div>
      </div>
    </div>
  );
}

const MOCKUPS = [
  {
    title: 'Rodrigues Paradise Villa',
    subtitle: 'Accommodation · Direct Bookings',
    colors: ['#0ea5e9', '#0369a1'],
    accent: '#f97316',
    spots: [
      { x: 55, y: 20, w: 40, h: 60, c: 'rgba(255,255,255,0.15)' },
      { x: 60, y: 50, w: 35, h: 30, c: 'rgba(255,255,255,0.1)' },
    ],
  },
  {
    title: 'Le Petit Bistro',
    subtitle: 'Restaurant · Online Menu & Reservations',
    colors: ['#dc2626', '#7f1d1d'],
    accent: '#fbbf24',
    spots: [
      { x: 50, y: 15, w: 45, h: 80, c: 'rgba(255,200,100,0.2)' },
    ],
  },
  {
    title: 'Coiffure Prestige',
    subtitle: 'Beauty Salon · Appointment Booking',
    colors: ['#ec4899', '#9d174d'],
    accent: '#f9fafb',
    spots: [
      { x: 52, y: 10, w: 42, h: 90, c: 'rgba(255,255,255,0.12)' },
    ],
  },
  {
    title: 'Rodrigues Dive Centre',
    subtitle: 'Tourism Activity · Tour Bookings',
    colors: ['#059669', '#064e3b'],
    accent: '#fbbf24',
    spots: [
      { x: 55, y: 20, w: 38, h: 70, c: 'rgba(0,255,200,0.15)' },
    ],
  },
  {
    title: 'Delices de l\'Ocean',
    subtitle: 'Takeaway & Catering · Order Online',
    colors: ['#7c3aed', '#4c1d95'],
    accent: '#f97316',
    spots: [
      { x: 50, y: 15, w: 44, h: 75, c: 'rgba(255,255,255,0.1)' },
    ],
  },
  {
    title: 'Boutique Creole',
    subtitle: 'Retail Shop · E-commerce',
    colors: ['#d97706', '#78350f'],
    accent: '#ffffff',
    spots: [
      { x: 52, y: 18, w: 40, h: 65, c: 'rgba(255,255,255,0.15)' },
    ],
  },
];

const WHY_REASONS = [
  {
    icon: DollarSign,
    title: 'Enable direct bookings from your guests',
    desc: 'Your own website gives guests a simple way to book directly with you. No middleman, no platform fees — just a direct relationship that benefits everyone.',
    stat: '0%',
    statLabel: 'commission on direct bookings',
    color: 'purple',
  },
  {
    icon: Users,
    title: 'Own your guest relationship',
    desc: 'Platforms own your guests — their emails, preferences, reviews. Your own website lets you build a direct relationship, collect contacts, and encourage repeat visits.',
    stat: '100%',
    statLabel: 'of guest data stays yours',
    color: 'purple',
  },
  {
    icon: Search,
    title: 'Be found on Google',
    desc: 'When someone searches "guesthouse Rodrigues" or "villa Mauritius", a professional website with SEO puts you directly in front of them — not buried in a listing page.',
    stat: '3.5B',
    statLabel: 'Google searches per day',
    color: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Build your brand, not theirs',
    desc: 'Your listing on Booking.com looks like every other listing. A website is 100% your brand — your story, your photos, your personality. Guests book experiences, not commodities.',
    stat: '80%',
    statLabel: 'of travelers research online first',
    color: 'gold',
  },
  {
    icon: Smartphone,
    title: 'Open 24/7, on any device',
    desc: 'Your website works while you sleep. Mobile-optimised, fast-loading, always available — whether a customer is in France, Réunion, or down the road.',
    stat: '60%',
    statLabel: 'of web traffic is mobile',
    color: 'green',
  },
  {
    icon: BarChart3,
    title: 'Credibility that converts',
    desc: 'A professional website instantly builds trust. In 2026, not having one signals that your business may not be serious. First impressions happen online.',
    stat: '75%',
    statLabel: 'judge credibility by website',
    color: 'purple',
  },
];

const TARGETS = [
  { icon: Hotel,       label: 'Guesthouses & Villas',    desc: 'Rodrigues has 200+ accommodations. Most still rely 100% on booking platforms.' },
  { icon: Utensils,    label: 'Restaurants & Cafes',     desc: 'Menus, reservations, opening hours — all at a customer\'s fingertips.' },
  { icon: Camera,      label: 'Tourism Activities',      desc: 'Diving, hiking, fishing tours. Showcase your experience and take direct bookings.' },
  { icon: Scissors,    label: 'Beauty & Wellness',       desc: 'Salons, spas, clinics. Online appointment booking 24/7.' },
  { icon: ShoppingBag, label: 'Retail & E-commerce',     desc: 'Sell products online to Mauritius and beyond.' },
  { icon: Briefcase,   label: 'Services & Consultants',  desc: 'Any professional service needs a credible online presence.' },
];

const WHAT_WE_DELIVER = [
  'Custom design — built around your brand',
  'Mobile-first, fast-loading',
  'SEO optimised from day one',
  'Direct booking / contact form',
  'Google Maps integration',
  'WhatsApp chat button',
  'Social media links',
  'Photo gallery',
  'Bilingual (EN + FR) on request',
  'Delivered in 5–10 business days',
  'Free minor revisions for 30 days',
  'Hosting guidance included',
];

export default function WebsiteDevelopmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── NAVBAR (simple light) ──────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple transition-colors font-medium">
            <ArrowLeft size={16} /> Back to Island Pro Consulting
          </Link>
          <a href="#book"
            className="purple-gradient text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-purple hidden sm:block">
            Book Free Consultation
          </a>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple/5 pt-20 pb-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple/8 border border-purple/20 text-purple text-xs font-bold px-4 py-2 rounded-full mb-6">
              <Globe size={12} /> For Rodrigues & Mauritius businesses
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-[1.05] mb-6">
              Your own website.<br />
              <span className="purple-text">Your own bookings.</span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mb-4">
              Booking platforms are a great starting point — but your own website gives guests a direct way to reach you, book with you, and build a lasting relationship with your business.
            </p>
            <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-10">
              Whether you run a guesthouse in Rodrigues, a restaurant in Mauritius, or any business that deserves to be found online — we build beautiful, fast, and effective websites that work for you 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#book"
                className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple text-sm">
                Book a Free Call <ArrowRight size={16} />
              </a>
              <a href="#showcase"
                className="inline-flex items-center gap-2 border-2 border-navy/15 text-navy font-bold px-7 py-4 rounded-xl hover:border-purple/40 hover:text-purple transition-all text-sm">
                See Examples
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT BOOKING OPPORTUNITY ────────────────────────────── */}
      <section className="py-16 bg-purple/4 border-y border-purple/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-navy mb-2">The power of direct bookings</h2>
            <p className="text-gray-500 text-sm">Based on average nightly rates in Rodrigues (Rs 3,500–8,000/night)</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Via booking platforms', sublabel: 'Commission per booking', value: '15–25%', note: 'Paid on every reservation', highlight: false },
              { label: 'Via your own website', sublabel: 'Commission per booking', value: 'Rs 0', note: '100% of revenue stays with you', highlight: true },
              { label: 'A website pays for itself', sublabel: 'Typically after', value: '4–6 bookings', note: 'Then it works for free, forever', highlight: true },
            ].map((c, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 transition-all ${
                c.highlight ? 'bg-white border-purple/25 shadow-card' : 'bg-white border-gray-100'
              }`}>
                <div className="text-xs font-bold text-gray-400 mb-1">{c.label}</div>
                <div className="text-xs text-gray-400 mb-2">{c.sublabel}</div>
                <div className={`text-2xl font-black mb-1 ${c.highlight ? 'purple-text' : 'text-navy'}`}>{c.value}</div>
                <div className={`text-xs font-semibold ${c.highlight ? 'text-emerald-600' : 'text-gray-400'}`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY YOU NEED A WEBSITE ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/8 border border-purple/20 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              Why It Matters
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              6 reasons your business<br />needs a website <span className="purple-text">right now</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_REASONS.map((r, i) => {
              const Icon = r.icon;
              const colorMap: Record<string, string> = {
                red: 'bg-red-50 text-red-600', purple: 'bg-purple/8 text-purple',
                blue: 'bg-blue-50 text-blue-600', gold: 'bg-amber-50 text-amber-600',
                green: 'bg-emerald-50 text-emerald-600',
              };
              const statColorMap: Record<string, string> = {
                red: 'text-red-600', purple: 'purple-text',
                blue: 'text-blue-600', gold: 'text-amber-600', green: 'text-emerald-600',
              };
              return (
                <div key={i} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:border-purple/20 hover:shadow-card transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${colorMap[r.color]}`}>
                      <Icon size={20} />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-black ${statColorMap[r.color]}`}>{r.stat}</div>
                      <div className="text-[10px] text-gray-400 leading-tight max-w-[80px]">{r.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="font-black text-navy mb-2 text-sm leading-tight">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ──────────────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight mb-3">
              Built for <span className="purple-text">every business</span> in Mauritius & Rodrigues
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From a beachside guesthouse in Rodrigues to a hair salon in Port Louis — if you serve customers, you need to be found online.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TARGETS.map((t, i) => {
              const Icon = t.icon;
              const isAccom = i === 0;
              return (
                <div key={i} className={`rounded-2xl p-5 border-2 transition-all ${
                  isAccom
                    ? 'bg-purple/5 border-purple/25 shadow-purple'
                    : 'bg-white border-gray-100 hover:border-purple/20'
                }`}>
                  {isAccom && (
                    <div className="inline-flex items-center gap-1 bg-purple/10 text-purple text-[10px] font-black px-2 py-0.5 rounded-full mb-2">
                      Primary Target
                    </div>
                  )}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    isAccom ? 'bg-purple/15 text-purple' : 'bg-gray-50 text-gray-500'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-black text-navy text-sm mb-1">{t.label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SITE SHOWCASE ─────────────────────────────────────────── */}
      <section id="showcase" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold-dark font-bold text-xs px-4 py-2 rounded-full mb-4">
              Website Showcase
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight mb-3">
              What your website could look like
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every site is custom-designed for your business. Here are examples across different industries.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCKUPS.map((m, i) => <SiteMockup key={i} {...m} />)}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ──────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                What&apos;s Included
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                Everything you need.<br />
                <span className="gold-text">Nothing you don&apos;t.</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                We handle the whole process — from design to launch. No tech knowledge required on your end.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHAT_WE_DELIVER.map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <Check size={14} className="text-purple-light flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Palette, title: 'Custom Design',     desc: 'Unique to your brand — not a template' },
                { icon: Zap,     title: 'Fast Delivery',     desc: '5–10 business days from brief to launch' },
                { icon: Shield,  title: 'SEO Ready',         desc: 'Built to rank on Google from day one' },
                { icon: Clock,   title: '30-day Support',    desc: 'Free adjustments after launch' },
              ].map(c => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-purple/20 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-purple-light" />
                    </div>
                    <h3 className="text-white font-black text-sm mb-1">{c.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOK A FREE CALL ──────────────────────────────────────── */}
      <section id="book" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/25 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              Zero Commitment
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight mb-3">
              Book a free 20-minute call
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Tell us about your business. We&apos;ll listen, answer your questions, and give you an honest idea of what a website can do for you. No pressure, no invoice.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-navy/8 shadow-card p-8 lg:p-10 max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={36} className="text-purple" />
                </div>
                <h3 className="text-2xl font-black text-navy mb-2">Request received!</h3>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                  Thank you! We will contact you within 24 hours to confirm your free consultation slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-navy/60">Your Name *</label>
                    <input type="text" required placeholder="Jean-Marc Dupont"
                      className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-navy/60">Phone / WhatsApp *</label>
                    <input type="tel" required placeholder="+230 5XXX XXXX"
                      className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Email</label>
                  <input type="email" placeholder="you@example.com"
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Your Business *</label>
                  <input type="text" required placeholder="e.g. Rodrigues Paradise Guesthouse"
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Do you currently have a website?</label>
                  <select className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all appearance-none">
                    <option value="">Select...</option>
                    <option>No website yet</option>
                    <option>Yes — I want to redesign it</option>
                    <option>Yes — I want to improve it</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Preferred contact method</label>
                  <div className="flex gap-3">
                    {['WhatsApp', 'Phone call', 'Email'].map(m => (
                      <label key={m} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contact_method" value={m} className="accent-purple" />
                        <span className="text-sm text-navy/70">{m}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Anything else you want us to know?</label>
                  <textarea rows={3} placeholder="Tell us briefly about your business and what you're looking for..."
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all resize-none" />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 purple-gradient text-white font-bold text-sm py-4 rounded-xl hover:opacity-90 transition-all shadow-purple disabled:opacity-60 mt-2">
                  {loading
                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    : <><Calendar size={15} /> Request My Free Consultation</>
                  }
                </button>

                <div className="flex items-center justify-center gap-6 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Check size={12} className="text-emerald-500" /> No commitment
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Check size={12} className="text-emerald-500" /> No invoice
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Check size={12} className="text-emerald-500" /> 20 minutes max
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* WhatsApp alternative */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-3">Prefer to reach out directly?</p>
            <a href="https://wa.me/23058137384?text=Hello%21+I+am+interested+in+a+website+for+my+business."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-all">
              <MessageCircle size={16} /> WhatsApp us now
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER (minimal) ──────────────────────────────────────── */}
      <div className="bg-navy py-8 text-center">
        <Link href="/" className="text-white/40 hover:text-gold text-sm transition-colors">
          &larr; Back to Island Pro Consulting
        </Link>
        <p className="text-white/20 text-xs mt-2">&copy; 2026 Island Pro Consulting · Mauritius</p>
      </div>

    </div>
  );
}
