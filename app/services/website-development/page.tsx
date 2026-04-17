'use client';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, Check,
  Globe, Smartphone, Search, Star,
  Hotel, ShoppingBag, Scissors, Utensils, Briefcase, Camera,
  DollarSign, BarChart3, MessageCircle,
  Zap, Shield, Palette, Clock, Users, TrendingUp
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';

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
    url: 'www.littleparadise.mu',
    component: (
      <div className="h-56 overflow-hidden">
        {/* Nav */}
        <div className="px-4 py-2.5 flex items-center justify-between" style={{background:'#2C1810'}}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#D4A847] flex items-center justify-center">
              <span className="text-[#2C1810] text-[7px] font-black">LP</span>
            </div>
            <span className="text-[#D4A847] text-[9px] font-black tracking-widest uppercase">Little Paradise</span>
          </div>
          <div className="flex gap-3">
            {['Lodge','Gallery','Book'].map(t => (
              <span key={t} className="text-white/60 text-[8px]">{t}</span>
            ))}
          </div>
        </div>
        {/* Hero — A-frame lodge */}
        <div className="relative h-32 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=700&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(44,24,16,0.85) 0%, rgba(44,24,16,0.2) 60%, transparent 100%)'}} />
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
            <p className="text-[#D4A847] text-[7px] font-bold tracking-widest uppercase mb-0.5">Eco Lodge · Rodrigues</p>
            <h3 className="text-white font-black text-xs leading-tight">A unique retreat in the heart<br/>of Rodrigues Island</h3>
          </div>
          <div className="absolute top-2 right-2 bg-[#D4A847] text-[#2C1810] text-[7px] font-black px-2 py-0.5 rounded-full">Book Direct</div>
        </div>
        {/* Info strip */}
        <div className="px-3 py-2 flex gap-2" style={{background:'#2C1810'}}>
          {[
            {label:'Eco Lodges', val:'From Rs 3,800'},
            {label:'Free Breakfast', val:'Included'},
            {label:'Rating', val:'⭐ 4.9 / 5'},
          ].map((s, i) => (
            <div key={i} className="flex-1 text-center">
              <div className="text-[#D4A847] text-[7px] font-black">{s.val}</div>
              <div className="text-white/50 text-[6px] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    label: 'Little Paradise Eco Lodge',
    type: 'Hotel · Direct Bookings',
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
      <div className="h-56 overflow-hidden" style={{background:'linear-gradient(180deg,#003d5c 0%,#005f8a 40%,#0085b8 100%)'}}>
        {/* Nav */}
        <div className="px-4 py-2 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-[#00c2e0]/30 flex items-center justify-center text-[9px]">🤿</div>
            <span className="text-white text-[9px] font-black tracking-wide">CORAL DIVE</span>
          </div>
          <button className="bg-[#00c2e0] text-[#003d5c] text-[7px] font-black px-2.5 py-1 rounded-full">Book a Dive</button>
        </div>
        {/* Hero — CSS ocean scene */}
        <div className="relative px-4 pt-3 pb-2">
          {/* Bubbles */}
          <div className="absolute right-6 top-2 w-3 h-3 rounded-full bg-white/10 border border-white/20" />
          <div className="absolute right-12 top-5 w-2 h-2 rounded-full bg-white/10 border border-white/20" />
          <div className="absolute right-8 top-7 w-1.5 h-1.5 rounded-full bg-white/15 border border-white/20" />
          {/* Fish emoji decoration */}
          <div className="absolute right-4 top-3 text-lg opacity-40">🐠</div>
          <div className="absolute right-16 top-6 text-xs opacity-30">🐡</div>
          <div>
            <p className="text-[#00c2e0] text-[7px] font-bold tracking-widest uppercase mb-1">Rodrigues Island · Indian Ocean</p>
            <h3 className="text-white font-black text-sm leading-tight mb-0.5">Dive into<br/>the Unknown</h3>
            <p className="text-white/60 text-[8px]">Pristine reefs · Untouched marine life</p>
          </div>
        </div>
        {/* Wave divider */}
        <div className="h-2 mx-4 rounded-full bg-white/8 my-2" />
        {/* Packages */}
        <div className="px-3 grid grid-cols-3 gap-1.5">
          {[
            { name:'Intro Dive', icon:'🌊', duration:'2h', price:'Rs 1,800' },
            { name:'Full Day',   icon:'⚓', duration:'6h', price:'Rs 3,500' },
            { name:'PADI Course',icon:'🏅', duration:'3 days', price:'Rs 9,000' },
          ].map((p, i) => (
            <div key={i} className={`rounded-xl p-2 text-center ${i===1?'bg-[#00c2e0]':'bg-white/10 border border-white/15'}`}>
              <div className="text-base mb-0.5">{p.icon}</div>
              <div className={`text-[7px] font-black leading-tight ${i===1?'text-[#003d5c]':'text-white'}`}>{p.name}</div>
              <div className={`text-[6px] ${i===1?'text-[#003d5c]/70':'text-white/50'}`}>{p.duration}</div>
              <div className={`text-[7px] font-black mt-0.5 ${i===1?'text-[#003d5c]':'text-[#00c2e0]'}`}>{p.price}</div>
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
        <div className="bg-[#c05621] px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[9px]">🌞</div>
            <span className="text-white text-[8px] font-black">Épicerie du Soleil</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-200 text-[7px]">Port Louis</span>
            <div className="bg-white text-[#c05621] text-[6px] font-black px-1.5 py-0.5 rounded-full">Commande en ligne</div>
          </div>
        </div>
        {/* Promo banner */}
        <div className="bg-amber-500 px-3 py-1.5 flex items-center justify-between">
          <span className="text-[7px] text-white font-black">🎁 Livraison offerte dès Rs 500 d&apos;achat</span>
          <span className="text-amber-200 text-[6px]">Offre limitée</span>
        </div>
        {/* Categories */}
        <div className="px-3 pt-2 pb-1 flex gap-2 overflow-hidden">
          {[{e:'🥗',l:'Frais'},{e:'🥩',l:'Viandes'},{e:'🥛',l:'Produits laitiers'},{e:'🏪',l:'Épicerie'},{e:'🌿',l:'Bio & Local'}].map((c,i) => (
            <div key={i} className={`flex-shrink-0 flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg ${i===0?'bg-[#c05621] text-white':'bg-orange-50'}`}>
              <span className="text-xs">{c.e}</span>
              <span className={`text-[6px] font-bold whitespace-nowrap ${i===0?'text-white':'text-gray-600'}`}>{c.l}</span>
            </div>
          ))}
        </div>
        {/* Product grid */}
        <div className="px-3 py-1.5 grid grid-cols-4 gap-1.5">
          {[
            { emoji:'🍚', name:'Riz Basmati 5kg',   price:'Rs 245', badge:'Promo',   bg:'bg-amber-50' },
            { emoji:'🫒', name:'Huile d\'Olive 1L',  price:'Rs 189', badge:'',        bg:'bg-green-50' },
            { emoji:'🥛', name:'Lait Frais 1L',      price:'Rs 42',  badge:'Nouveau', bg:'bg-blue-50'  },
            { emoji:'🍓', name:'Confiture Maison',   price:'Rs 135', badge:'Local',   bg:'bg-red-50'   },
          ].map((p, i) => (
            <div key={i} className={`${p.bg} border border-white rounded-xl p-1.5 relative`}>
              {p.badge && (
                <div className={`absolute -top-1 -right-1 text-white text-[5px] font-black px-1 py-0.5 rounded-full ${
                  p.badge==='Promo'?'bg-red-500':p.badge==='Nouveau'?'bg-blue-500':'bg-emerald-500'
                }`}>{p.badge}</div>
              )}
              <div className="text-lg text-center mb-0.5">{p.emoji}</div>
              <div className="text-[6px] text-gray-700 font-semibold leading-tight text-center">{p.name}</div>
              <div className="text-[7px] font-black text-[#c05621] text-center mt-0.5">{p.price}</div>
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
      <div className="h-56 overflow-hidden bg-[#0f2744]">
        {/* Nav */}
        <div className="px-3 py-2 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-[#f59e0b] flex items-center justify-center text-[9px]">🔧</div>
            <span className="text-white text-[8px] font-black">PlomberiePro MU</span>
          </div>
          <button className="bg-[#f59e0b] text-[#0f2744] text-[6px] font-black px-2 py-1 rounded-lg animate-pulse">🚨 Urgence 24h/7j</button>
        </div>
        {/* Hero block */}
        <div className="px-3 py-3 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_,i) => <Star key={i} size={7} className="text-[#f59e0b] fill-[#f59e0b]" />)}
              <span className="text-white/50 text-[6px] ml-1">4.9 · 128 avis Google</span>
            </div>
            <h3 className="text-white font-black text-xs leading-tight">Intervention rapide<br/>dans toute l&apos;île 🇲🇺</h3>
            <p className="text-white/50 text-[7px] mt-1">Plomberie · Électricité · Climatisation</p>
          </div>
          <div className="text-center bg-[#f59e0b]/15 border border-[#f59e0b]/30 rounded-2xl px-3 py-2">
            <div className="text-[#f59e0b] font-black text-sm">30</div>
            <div className="text-[#f59e0b]/70 text-[6px] font-bold">MIN</div>
            <div className="text-white/40 text-[6px]">réponse</div>
          </div>
        </div>
        {/* Services grid */}
        <div className="px-3 grid grid-cols-3 gap-1.5">
          {[
            { e:'💧', s:'Fuite d\'eau'  },
            { e:'🚿', s:'Débouchage'    },
            { e:'⚡', s:'Électricité'   },
            { e:'❄️', s:'Climatisation' },
            { e:'🛁', s:'Salle de bain' },
            { e:'📋', s:'Devis gratuit' },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl px-2 py-2 text-center ${i===5?'bg-[#f59e0b]':'bg-white/8 border border-white/10'}`}>
              <div className="text-sm mb-0.5">{item.e}</div>
              <div className={`text-[6px] font-bold leading-tight ${i===5?'text-[#0f2744]':'text-white/70'}`}>{item.s}</div>
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
  return (
    <div className="min-h-screen" style={{ background: '#F8F7FF' }}>

      <Navbar />

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
            <ContactForm
              service="Website Development"
              dropdownLabel="Type of website"
              dropdownOptions={['Hotel / Guesthouse / B&B','Villa / Self-catering','Restaurant / Food Business','Tour & Activity Operator','Retail / E-commerce Shop','Professional Services','Portfolio / Personal Brand','Other']}
              messagePlaceholder="Tell us about your business and what you need..."
              submitLabel="Book My Free Call"
            />
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
