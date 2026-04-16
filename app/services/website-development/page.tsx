'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, Check, CheckCircle2,
  Globe, Smartphone, Search, Star,
  Hotel, ShoppingBag, Scissors, Utensils, Briefcase, Camera,
  DollarSign, BarChart3, MessageCircle, Calendar,
  Zap, Shield, Palette, Clock, Users, TrendingUp
} from 'lucide-react';

/* ── Realistic browser mockup ───────────────────────────────────────── */
function BrowserMockup({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white group hover:-translate-y-1 transition-all duration-300">
      {/* Browser chrome */}
      <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-white rounded px-2 py-0.5 text-[10px] text-gray-400 border border-gray-200 truncate mx-1">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

/* ── Invented business mockups ──────────────────────────────────────── */
const MOCKUPS = [
  {
    url: 'www.anseblanchevilla.mu',
    component: (
      <div className="h-56 overflow-hidden">
        {/* Nav */}
        <div className="bg-[#0a2a1a] px-4 py-2 flex items-center justify-between">
          <span className="text-white text-[9px] font-black tracking-widest uppercase">Anse Blanche Villa</span>
          <div className="flex gap-3">
            {['Rooms','Gallery','Book'].map(t => (
              <span key={t} className="text-white/60 text-[8px]">{t}</span>
            ))}
          </div>
        </div>
        {/* Hero */}
        <div className="relative h-28 overflow-hidden" style={{background:'linear-gradient(180deg,#1a5c35 0%,#0d3d22 100%)'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=600&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white/80 text-[8px] tracking-widest uppercase mb-1">Rodrigues Island</p>
            <h3 className="text-white font-black text-sm leading-tight mb-2">Your Paradise<br/>Awaits</h3>
            <button className="bg-[#c8a84b] text-[#0a2a1a] text-[8px] font-black px-3 py-1 rounded-full">Book Direct</button>
          </div>
        </div>
        {/* Rooms strip */}
        <div className="bg-white px-3 py-2 flex gap-2">
          {['Sea View Suite','Garden Bungalow','Family Villa'].map((r, i) => (
            <div key={i} className="flex-1 bg-gray-50 rounded-lg p-1.5 text-center border border-gray-100">
              <div className="text-[7px] font-black text-gray-700 leading-tight">{r}</div>
              <div className="text-[7px] text-[#1a5c35] font-bold mt-0.5">From Rs 4,500</div>
            </div>
          ))}
        </div>
      </div>
    ),
    label: 'Anse Blanche Villa',
    type: 'Accommodation · Direct Bookings',
  },
  {
    url: 'www.lelagonbleu.mu',
    component: (
      <div className="h-56 overflow-hidden bg-[#1a0a00]">
        {/* Nav */}
        <div className="px-4 py-2 flex items-center justify-between border-b border-white/10">
          <span className="text-[#d4a847] text-[9px] font-black tracking-widest uppercase">Le Lagon Bleu</span>
          <div className="flex gap-3">
            {['Menu','Story','Reserve'].map(t => (
              <span key={t} className="text-white/50 text-[8px]">{t}</span>
            ))}
          </div>
        </div>
        {/* Hero */}
        <div className="relative h-24">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center px-4">
            <div>
              <p className="text-[#d4a847] text-[7px] font-bold tracking-widest uppercase mb-1">Fine Dining · Mauritius</p>
              <h3 className="text-white font-black text-sm">Taste the Ocean</h3>
              <p className="text-white/60 text-[8px] mt-0.5">Fresh seafood. Every night.</p>
            </div>
          </div>
        </div>
        {/* Menu preview */}
        <div className="px-3 py-2 flex gap-2">
          {[
            { dish:'Grilled Capitaine', price:'Rs 850' },
            { dish:'Octopus Vindaye', price:'Rs 720' },
            { dish:'Lobster Thermidor', price:'Rs 1,450' },
          ].map((d, i) => (
            <div key={i} className="flex-1 border-t border-white/10 pt-1.5">
              <div className="text-[7px] text-white/70 leading-tight">{d.dish}</div>
              <div className="text-[7px] text-[#d4a847] font-bold mt-0.5">{d.price}</div>
            </div>
          ))}
        </div>
        <div className="px-3 pb-2">
          <button className="w-full bg-[#d4a847] text-[#1a0a00] text-[8px] font-black py-1 rounded">Reserve a Table</button>
        </div>
      </div>
    ),
    label: 'Le Lagon Bleu',
    type: 'Restaurant · Online Reservations',
  },
  {
    url: 'www.coraldiverodrigues.com',
    component: (
      <div className="h-56 overflow-hidden bg-[#03142b]">
        {/* Nav */}
        <div className="px-4 py-2 flex items-center justify-between">
          <span className="text-white text-[9px] font-black">🤿 Coral Dive</span>
          <button className="bg-[#00b4d8] text-white text-[7px] font-bold px-2 py-0.5 rounded-full">Book a Dive</button>
        </div>
        {/* Hero */}
        <div className="relative h-24">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 flex items-end px-3 pb-2">
            <div>
              <h3 className="text-white font-black text-sm drop-shadow">Dive Rodrigues</h3>
              <p className="text-white/80 text-[8px]">Explore the untouched reefs of the Indian Ocean</p>
            </div>
          </div>
        </div>
        {/* Packages */}
        <div className="px-3 py-2 grid grid-cols-3 gap-1.5">
          {[
            { name:'Intro Dive', duration:'2h', price:'Rs 1,800' },
            { name:'Full Day', duration:'6h', price:'Rs 3,500' },
            { name:'PADI Course', duration:'3 days', price:'Rs 9,000' },
          ].map((p, i) => (
            <div key={i} className={`rounded-lg p-1.5 text-center ${i===1?'bg-[#00b4d8]':'bg-white/8 border border-white/10'}`}>
              <div className={`text-[7px] font-black ${i===1?'text-[#03142b]':'text-white'}`}>{p.name}</div>
              <div className={`text-[7px] ${i===1?'text-[#03142b]/70':'text-white/50'}`}>{p.duration}</div>
              <div className={`text-[7px] font-bold mt-0.5 ${i===1?'text-[#03142b]':'text-[#00b4d8]'}`}>{p.price}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    label: 'Coral Dive Rodrigues',
    type: 'Tourism Activity · Tour Booking',
  },
  {
    url: 'www.salonisabelle.mu',
    component: (
      <div className="h-56 overflow-hidden bg-white">
        {/* Nav */}
        <div className="px-4 py-2 flex items-center justify-between border-b border-pink-100">
          <span className="text-[#9d174d] text-[9px] font-black tracking-wide">Salon Isabelle</span>
          <button className="bg-[#9d174d] text-white text-[7px] font-bold px-2 py-1 rounded-full">Book Now</button>
        </div>
        {/* Hero */}
        <div className="relative h-24 bg-pink-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d]/70 to-transparent flex items-center px-3">
            <div>
              <h3 className="text-white font-black text-sm">Feel Beautiful</h3>
              <p className="text-white/80 text-[8px]">Hair · Nails · Beauty · Mauritius</p>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="px-3 py-2 flex gap-2">
          {['Coupe & Coiffure','Manucure','Soin Visage','Maquillage'].map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-8 h-8 rounded-full bg-pink-100 mx-auto mb-1 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#9d174d]/40" />
              </div>
              <div className="text-[6px] text-gray-600 font-medium leading-tight w-10">{s}</div>
            </div>
          ))}
        </div>
        <div className="px-3">
          <div className="bg-pink-50 rounded-lg px-3 py-1.5 flex items-center justify-between">
            <span className="text-[8px] text-gray-600">Next available: <strong>Today 14h00</strong></span>
            <span className="text-[7px] text-[#9d174d] font-bold">Book slot →</span>
          </div>
        </div>
      </div>
    ),
    label: 'Salon Isabelle',
    type: 'Beauty & Wellness · Appointments',
  },
  {
    url: 'www.epiceriesoleil.mu',
    component: (
      <div className="h-56 overflow-hidden bg-white">
        {/* Nav */}
        <div className="bg-[#d97706] px-4 py-2 flex items-center justify-between">
          <span className="text-white text-[9px] font-black">🛒 Épicerie du Soleil</span>
          <div className="flex items-center gap-2">
            <span className="text-white/80 text-[8px]">Port Louis</span>
            <div className="bg-white/20 text-white text-[7px] px-2 py-0.5 rounded-full">Order Online</div>
          </div>
        </div>
        {/* Banner */}
        <div className="bg-amber-50 px-3 py-2 flex items-center justify-between border-b border-amber-100">
          <span className="text-[8px] text-amber-800 font-bold">🎉 Livraison gratuite pour Rs 500+</span>
          <span className="text-[7px] text-amber-600">Valide jusqu&apos;au 30 avril</span>
        </div>
        {/* Product grid */}
        <div className="px-3 py-2 grid grid-cols-4 gap-1.5">
          {[
            { name:'Riz Basmati 5kg', price:'Rs 245', badge:'Promo' },
            { name:'Huile Végétale 2L', price:'Rs 89', badge:'' },
            { name:'Lait Frais', price:'Rs 42', badge:'Nouveau' },
            { name:'Confiture Maison', price:'Rs 135', badge:'Local' },
          ].map((p, i) => (
            <div key={i} className="border border-gray-100 rounded-lg p-1 relative">
              {p.badge && <div className="absolute top-0.5 right-0.5 bg-[#d97706] text-white text-[5px] font-bold px-1 rounded-full">{p.badge}</div>}
              <div className="h-8 bg-amber-50 rounded mb-1" />
              <div className="text-[6px] text-gray-700 font-medium leading-tight">{p.name}</div>
              <div className="text-[7px] font-black text-[#d97706] mt-0.5">{p.price}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    label: 'Épicerie du Soleil',
    type: 'Retail Shop · E-commerce',
  },
  {
    url: 'www.plomberiepro.mu',
    component: (
      <div className="h-56 overflow-hidden bg-white">
        {/* Nav */}
        <div className="bg-[#1e3a5f] px-4 py-2 flex items-center justify-between">
          <span className="text-white text-[9px] font-black">🔧 PlomberiePro MU</span>
          <button className="bg-[#f59e0b] text-[#1e3a5f] text-[7px] font-black px-2 py-0.5 rounded">Urgence 24h/7j</button>
        </div>
        {/* Hero */}
        <div className="bg-[#1e3a5f] px-4 py-3 flex items-center justify-between">
          <div>
            <h3 className="text-white font-black text-xs">Intervention rapide<br/>dans toute l&apos;île</h3>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_,i) => <Star key={i} size={7} className="text-[#f59e0b] fill-[#f59e0b]" />)}
              <span className="text-white/50 text-[7px] ml-1">4.9 (128 avis)</span>
            </div>
          </div>
          <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-xl p-2 text-center">
            <div className="text-[#f59e0b] font-black text-xs">30 min</div>
            <div className="text-white/50 text-[7px]">réponse</div>
          </div>
        </div>
        {/* Services */}
        <div className="px-3 py-2 grid grid-cols-3 gap-1.5">
          {['Fuite d\'eau','Débouchage','Installation','Chauffe-eau','Carrelage','Devis gratuit'].map((s, i) => (
            <div key={i} className={`rounded-lg px-2 py-1.5 text-center ${i===5?'bg-[#f59e0b] text-[#1e3a5f]':'bg-gray-50 border border-gray-100'}`}>
              <div className={`text-[6px] font-bold leading-tight ${i===5?'text-[#1e3a5f]':'text-gray-600'}`}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    label: 'PlomberiePro MU',
    type: 'Trades & Services · Lead Generation',
  },
];

const WHY_REASONS = [
  { icon: DollarSign, title: 'Enable direct bookings',     desc: 'Give your guests a simple way to book directly with you, with no platform in between.',      stat: '0%',   statLabel: 'commission on direct bookings', bg: 'bg-purple/8',   iconColor: 'text-purple',   statColor: 'purple-text' },
  { icon: Users,      title: 'Own your guest relationship', desc: 'Build your contact list, send offers, and encourage guests to come back — on your terms.',  stat: '100%', statLabel: 'of guest data stays yours',      bg: 'bg-gold/8',     iconColor: 'text-gold-dark', statColor: 'gold-text'   },
  { icon: Search,     title: 'Be found on Google',          desc: 'A professional website with SEO puts you in front of people actively searching for you.',    stat: '3.5B', statLabel: 'Google searches per day',        bg: 'bg-blue-50',    iconColor: 'text-blue-600', statColor: 'text-blue-600' },
  { icon: TrendingUp, title: 'Build your brand',            desc: 'Your story, your photos, your personality. Guests book experiences — not anonymous listings.', stat: '80%',  statLabel: 'of travelers research online first', bg: 'bg-emerald-50', iconColor: 'text-emerald-600', statColor: 'text-emerald-600' },
  { icon: Smartphone, title: 'Open 24/7, on any device',    desc: 'Your website works while you sleep — fast-loading on phones, tablets, and laptops alike.',   stat: '60%',  statLabel: 'of web traffic is mobile',       bg: 'bg-orange-50',  iconColor: 'text-orange-500', statColor: 'text-orange-500' },
  { icon: BarChart3,  title: 'Credibility that converts',   desc: 'In 2026, a professional website is expected. It signals that your business is serious.',     stat: '75%',  statLabel: 'judge credibility by website',   bg: 'bg-pink-50',    iconColor: 'text-pink-600', statColor: 'text-pink-600' },
];

const TARGETS = [
  { icon: Hotel,       label: 'Guesthouses & Villas',   desc: 'Showcase your rooms, amenities, and take direct reservations.' },
  { icon: Utensils,    label: 'Restaurants & Cafes',    desc: 'Online menu, opening hours, table reservations — all in one place.' },
  { icon: Camera,      label: 'Tourism & Activities',   desc: 'Dive centres, hiking tours, fishing trips. Book directly online.' },
  { icon: Scissors,    label: 'Beauty & Wellness',      desc: 'Salons, spas, clinics. Online appointment booking, 24/7.' },
  { icon: ShoppingBag, label: 'Retail & E-commerce',    desc: 'Sell your products online across Mauritius and beyond.' },
  { icon: Briefcase,   label: 'Services & Consultants', desc: 'Any professional service needs a credible, modern online presence.' },
];

const WHAT_WE_DELIVER = [
  'Custom design — built around your brand',
  'Mobile-first, fast-loading',
  'SEO optimised from day one',
  'Direct booking / enquiry form',
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
    <div className="min-h-screen" style={{ background: '#F8F7FF' }}>

      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple transition-colors font-medium">
            <ArrowLeft size={16} /> Back to Island Pro Consulting
          </Link>
          <a href="#book" className="purple-gradient text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-purple hidden sm:block">
            Book Free Consultation
          </a>
        </div>
      </header>

      {/* ── HERO — dark navy, bold ──────────────────────────────────── */}
      <section className="bg-navy relative overflow-hidden pt-20 pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple/25 blur-[120px]" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-gold/12 blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(#8B2FE8 1px,transparent 1px),linear-gradient(90deg,#8B2FE8 1px,transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light text-xs font-bold px-4 py-2 rounded-full mb-8">
              <Globe size={12} /> Website Development · Mauritius & Rodrigues
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
              Your business,<br />
              <span className="purple-text">beautifully online.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl mb-10">
              We design and build fast, modern websites that turn visitors into customers — and give your guests a direct way to reach you, any time of day.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <a href="#book" className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple text-sm">
                Book a Free Call <ArrowRight size={16} />
              </a>
              <a href="#showcase" className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-7 py-4 rounded-xl hover:border-gold/50 hover:text-gold transition-all text-sm">
                See Examples
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { v: '5–10 days', l: 'delivery time'         },
                { v: 'Mobile-first', l: 'every project'      },
                { v: 'Bilingual', l: 'EN + FR available'     },
                { v: '30 days', l: 'free support after launch'},
              ].map(s => (
                <div key={s.l}>
                  <div className="text-lg font-black gold-text">{s.v}</div>
                  <div className="text-white/40 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY A WEBSITE — colored cards on cream ─────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/25 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              Why It Matters
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-3">
              6 reasons your business<br />needs a website <span className="purple-text">right now</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_REASONS.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className={`${r.bg} rounded-3xl p-6 border border-white hover:shadow-card transition-all group`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-sm`}>
                      <Icon size={20} className={r.iconColor} />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-black ${r.statColor}`}>{r.stat}</div>
                      <div className="text-[9px] text-gray-400 leading-tight max-w-[80px]">{r.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="font-black text-navy text-sm mb-2">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SHOWCASE — dark with realistic mockups ─────────────────── */}
      <section id="showcase" className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold font-bold text-xs px-4 py-2 rounded-full mb-4">
              Website Showcase
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-3">
              What your website<br />
              <span className="gold-text">could look like</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Every site is custom-designed for your business. Here are examples across different industries — all invented for illustration.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCKUPS.map((m, i) => (
              <div key={i}>
                <BrowserMockup url={m.url}>
                  {m.component}
                </BrowserMockup>
                <div className="mt-3 px-1">
                  <div className="text-white font-black text-sm">{m.label}</div>
                  <div className="text-white/40 text-xs">{m.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE — purple gradient bg, equal cards ─────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #8B2FE8 0%, #C040F0 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-3">
              Built for every business<br />in Mauritius &amp; Rodrigues
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              If you serve customers, you deserve a beautiful online presence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TARGETS.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-3 group-hover:bg-white/25 transition-colors">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-black text-white text-sm mb-1">{t.label}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET — dark navy with gold accents ─────────────── */}
      <section className="py-24 bg-navy-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold font-bold text-xs px-4 py-2 rounded-full mb-6">
                What&apos;s Included
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                Everything you need.<br />
                <span className="gold-text">Nothing you don&apos;t.</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                We handle everything from design to launch. No technical knowledge needed on your side.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHAT_WE_DELIVER.map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <div className="w-5 h-5 rounded-full bg-purple/20 flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-purple-light" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Palette, title: 'Custom Design',  desc: 'Unique to your brand — not a template', color: 'bg-purple/20 text-purple-light' },
                { icon: Zap,     title: 'Fast Delivery',  desc: '5–10 days from brief to launch',          color: 'bg-gold/15 text-gold'         },
                { icon: Shield,  title: 'SEO Ready',      desc: 'Built to rank on Google from day one',     color: 'bg-blue-500/15 text-blue-400' },
                { icon: Clock,   title: '30-day Support', desc: 'Free adjustments after launch',             color: 'bg-emerald-500/15 text-emerald-400' },
              ].map(c => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-all">
                    <div className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center mb-3`}>
                      <Icon size={18} />
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

      {/* ── FREE CONSULTATION FORM — light with purple accent ──────── */}
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
              Tell us about your business. We&apos;ll listen, answer your questions, and give you an honest picture of what a website can do for you. No pressure, no invoice.
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
                  <input type="text" required placeholder="e.g. Mon Guesthouse, Port Mathurin"
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
                  <div className="flex gap-4">
                    {['WhatsApp', 'Phone call', 'Email'].map(m => (
                      <label key={m} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contact_method" value={m} className="accent-purple" />
                        <span className="text-sm text-navy/70">{m}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Anything else?</label>
                  <textarea rows={3} placeholder="Tell us briefly about your business and what you have in mind..."
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all resize-none" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 purple-gradient text-white font-bold text-sm py-4 rounded-xl hover:opacity-90 transition-all shadow-purple disabled:opacity-60">
                  {loading
                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    : <><Calendar size={15} /> Request My Free Consultation</>
                  }
                </button>
                <div className="flex items-center justify-center gap-6 pt-1">
                  {['No commitment','No invoice','20 minutes max'].map(t => (
                    <div key={t} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Check size={11} className="text-emerald-500" /> {t}
                    </div>
                  ))}
                </div>
              </form>
            )}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-3">Prefer to reach out directly?</p>
            <a href="https://wa.me/23058137384?text=Hello!+I+am+interested+in+a+website+for+my+business."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-all">
              <MessageCircle size={16} /> WhatsApp us now
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <div className="bg-navy py-8 text-center border-t border-white/8">
        <Link href="/" className="text-white/40 hover:text-gold text-sm transition-colors">
          &larr; Back to Island Pro Consulting
        </Link>
        <p className="text-white/20 text-xs mt-2">&copy; 2026 Island Pro Consulting · Mauritius</p>
      </div>
    </div>
  );
}
