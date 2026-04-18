import { Metadata } from 'next';
import {
  ArrowRight, Shield, Clock, ChevronRight, BadgeCheck,
  BarChart3, Search, MousePointerClick, PenTool, Mail,
  Phone, MessageCircle, TrendingUp, Smartphone,
  Users, Building2, Utensils, ShoppingBag, Hotel,
  Megaphone, Target, LineChart,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Digital Marketing for Mauritius SMEs | Island Pro Consulting',
  description: 'Social media, SEO, Google Ads, and content marketing tailored for Mauritian businesses. Reach more customers, grow your revenue.',
  keywords: 'digital marketing Mauritius, SEO Mauritius, Google Ads Mauritius, social media marketing Mauritius, digital marketing Rodrigues',
};

const SERVICES_OFFERED = [
  {
    icon: Users,
    color: 'purple',
    title: 'Social Media Management',
    desc: 'We create, schedule, and manage your Facebook, Instagram, and LinkedIn presence so your brand stays visible and engaging — without you spending hours on your phone.',
    tags: ['Content creation', 'Community management', 'Monthly calendar'],
  },
  {
    icon: Search,
    color: 'gold',
    title: 'Search Engine Optimisation',
    desc: 'When someone searches for what you offer in Mauritius, we make sure your business appears — not a competitor. SEO is the long game that keeps paying off.',
    tags: ['On-page SEO', 'Local SEO', 'Google Business Profile'],
  },
  {
    icon: MousePointerClick,
    color: 'purple',
    title: 'Google Ads',
    desc: 'Need leads now? Google Ads puts your business at the top of search results immediately. We manage every cent to maximise return and minimise waste.',
    tags: ['Search campaigns', 'Display ads', 'ROI tracking'],
  },
  {
    icon: PenTool,
    color: 'gold',
    title: 'Content Marketing',
    desc: 'We write blog posts, captions, and web copy that speak to your audience, build trust, and drive organic traffic over time.',
    tags: ['Blog writing', 'Social captions', 'Web copywriting'],
  },
  {
    icon: Mail,
    color: 'purple',
    title: 'Email Marketing',
    desc: 'Your existing customers are your best asset. We help you stay front-of-mind with targeted campaigns that drive repeat business and referrals.',
    tags: ['Newsletter campaigns', 'Automation', 'Segmentation'],
  },
  {
    icon: BarChart3,
    color: 'gold',
    title: 'Reporting & Analytics',
    desc: 'Every month you receive a clear report showing exactly what is working, what is not, and where your budget is generating the best return.',
    tags: ['Monthly reports', 'Traffic analysis', 'Conversion tracking'],
  },
];

const INDUSTRIES = [
  { icon: Hotel,       label: 'Hospitality & Tourism' },
  { icon: Utensils,    label: 'Restaurants & Food' },
  { icon: ShoppingBag, label: 'Retail & E-commerce' },
  { icon: Building2,   label: 'Professional Services' },
  { icon: Smartphone,  label: 'Tech & Startups' },
  { icon: Users,       label: 'Education & Training' },
];

const PROCESS = [
  { step: '01', icon: Target,       title: 'Discovery & Audit',     desc: 'We analyse your current digital presence, competitors, and target audience to understand where the opportunities are.' },
  { step: '02', icon: TrendingUp,   title: 'Strategy',              desc: 'We build a clear, tailored action plan with channels, content themes, and goals aligned to your business.' },
  { step: '03', icon: Megaphone,    title: 'Execution',             desc: 'We create and publish content, launch campaigns, and manage your channels consistently every month.' },
  { step: '04', icon: LineChart,    title: 'Optimise & Report',     desc: 'Monthly performance reports with clear insights. We refine the strategy based on what the data shows.' },
];

/* ── Phone Mockup with stats ────────────────────────────────────────── */
function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center py-8 lg:py-12">
      {/* Glow */}
      <div className="absolute w-[380px] h-[520px] rounded-3xl bg-purple/25 blur-[90px]" />
      <div className="absolute w-[280px] h-[440px] bg-black/40 blur-2xl translate-y-8 rounded-3xl" />

      {/* Phone frame */}
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10"
        style={{ width: '220px', background: '#0D1126' }}>

        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span style={{ fontSize: '7px', color: 'rgba(255,255,255,0.5)', fontFamily: 'system-ui' }}>9:41</span>
          <div className="w-14 h-3 bg-black rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2" />
          <div className="flex gap-1">
            {[3,2,1].map(i => <div key={i} className="w-1 rounded-sm bg-white/40" style={{ height: `${i * 3}px` }} />)}
          </div>
        </div>

        {/* App header */}
        <div className="px-4 pt-3 pb-4" style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
          <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.7)', fontFamily: 'system-ui' }}>Analytics Dashboard</p>
          <p className="text-white font-black" style={{ fontSize: '13px' }}>This Month</p>
        </div>

        {/* Metric cards */}
        <div className="px-3 py-3 space-y-2" style={{ background: '#0D1126' }}>
          {[
            { label: 'Reach',        value: '12.4K', change: '+34%', up: true,  color: '#8B2FE8' },
            { label: 'Engagements',  value: '1,847', change: '+22%', up: true,  color: '#F0B429' },
            { label: 'Website Clicks', value: '643', change: '+57%', up: true,  color: '#8B2FE8' },
          ].map(m => (
            <div key={m.label} className="bg-white/6 rounded-xl px-3 py-2 flex items-center justify-between">
              <div>
                <p style={{ fontSize: '6px', color: 'rgba(255,255,255,0.4)', fontFamily: 'system-ui', marginBottom: '2px' }}>{m.label}</p>
                <p className="font-black text-white" style={{ fontSize: '12px', fontFamily: 'system-ui' }}>{m.value}</p>
              </div>
              <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full"
                style={{ background: 'rgba(139,231,100,0.15)' }}>
                <div className="w-0 h-0" style={{ borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderBottom: '4px solid #7BEF64' }} />
                <span style={{ fontSize: '7px', color: '#7BEF64', fontWeight: 700, fontFamily: 'system-ui' }}>{m.change}</span>
              </div>
            </div>
          ))}

          {/* Mini bar chart */}
          <div className="bg-white/4 rounded-xl p-2">
            <p style={{ fontSize: '6px', color: 'rgba(255,255,255,0.3)', fontFamily: 'system-ui', marginBottom: '6px' }}>Weekly reach</p>
            <div className="flex items-end gap-1 h-10">
              {[30, 45, 38, 60, 52, 72, 65].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 5
                      ? 'linear-gradient(180deg,#8B2FE8,#C040F0)'
                      : `rgba(139,47,232,${0.2 + i * 0.05})`,
                  }} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav bar */}
        <div className="flex justify-around items-center px-4 py-3 border-t border-white/8">
          {[0,1,2,3].map(i => (
            <div key={i} className="w-4 h-4 rounded" style={{ background: i === 0 ? 'rgba(139,47,232,0.6)' : 'rgba(255,255,255,0.1)' }} />
          ))}
        </div>
      </div>

      {/* Floating stat chips */}
      <div className="absolute top-10 -right-6 bg-white rounded-2xl shadow-xl border border-navy/8 px-3 py-2"
        style={{ transform: 'rotate(3deg)' }}>
        <p className="text-[9px] text-navy/40 font-bold leading-none mb-0.5">Active on social</p>
        <p className="text-navy font-black text-sm leading-none">859K Mauritians</p>
      </div>

      <div className="absolute bottom-10 -left-6 rounded-2xl shadow-xl px-3 py-2"
        style={{ background: '#F0B429', transform: 'rotate(-3deg)' }}>
        <p className="text-[9px] text-navy font-black leading-none mb-0.5">Internet users</p>
        <p className="text-navy font-bold text-sm leading-none">79.5% of Mauritius</p>
      </div>
    </div>
  );
}

export default function DigitalMarketingPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-cream pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-4">
          <nav className="flex items-center gap-2 text-white/30 text-xs mb-12">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <ChevronRight size={12} />
            <a href="/#services" className="hover:text-white/60 transition-colors">Services</a>
            <ChevronRight size={12} />
            <span className="text-purple-light">Digital Marketing</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                <Megaphone size={12} /> Digital Marketing
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Your customers are online.<br />
                <span className="purple-text">Is your business reaching them?</span>
              </h1>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10">
                Over 859,000 Mauritians are active on social media. Another million search Google every day. We help your business show up in the right place, at the right time, in front of the right people.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact"
                  className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple">
                  Book a Free Strategy Call <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20digital%20marketing%20for%20my%20business."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/8">
                {[
                  { icon: BadgeCheck, text: 'Tailored strategy for Mauritius' },
                  { icon: BarChart3,  text: 'Monthly performance reports' },
                  { icon: Clock,      text: 'No long-term contracts required' },
                  { icon: Shield,     text: 'Transparent, no hidden fees' },
                ].map(t => {
                  const Icon = t.icon;
                  return (
                    <div key={t.text} className="flex items-center gap-2 text-white/50 text-sm">
                      <Icon size={15} className="text-gold flex-shrink-0" />
                      {t.text}
                    </div>
                  );
                })}
              </div>
            </div>

            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── Mauritius Stats Strip ── */}
      <section className="bg-gold py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: '859K',  label: 'Mauritians active on social media — 67.7% of the population' },
              { stat: '79.5%', label: 'Of the population use the internet daily' },
              { stat: '168%',  label: 'Mobile penetration — most people carry more than one SIM' },
              { stat: '88.6%', label: 'Of households own a smartphone' },
            ].map(s => (
              <div key={s.stat}>
                <p className="text-navy font-black text-2xl lg:text-3xl">{s.stat}</p>
                <p className="text-navy/70 text-xs leading-snug mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              Why It Matters
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              Every day offline<br />
              <span className="purple-text">is a day lost.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { stat: '81%',    label: 'Of consumers research a business online before visiting or buying', color: 'purple' },
              { stat: '×3',     label: 'More leads generated by content marketing vs traditional advertising at 62% lower cost', color: 'gold' },
              { stat: 'Under 5%', label: 'Organic Facebook reach for business pages — without a strategy, almost no one sees your posts', color: 'purple' },
            ].map((c, i) => (
              <div key={i} className={`rounded-3xl p-8 text-center ${c.color === 'purple' ? 'bg-purple/8 border border-purple/15' : 'bg-gold/8 border border-gold/20'}`}>
                <p className={`font-black text-4xl mb-3 ${c.color === 'purple' ? 'text-purple' : 'text-gold-dark'}`}>{c.stat}</p>
                <p className="text-navy/65 text-sm leading-relaxed">{c.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-3xl p-8 lg:p-10 text-center">
            <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              Your customers wake up and check their phones. They scroll Facebook on their lunch break. They search Google before buying anything.{' '}
              <span className="text-white font-semibold">If your business is not showing up — a competitor is.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              What We Do
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Full-service digital<br />
              <span className="purple-text">marketing for SMEs.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              We handle the channels that matter — so you can focus on running your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES_OFFERED.map((s, i) => {
              const Icon = s.icon;
              const isPurple = s.color === 'purple';
              return (
                <div key={i}
                  className="group bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-purple/30 transition-all">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${
                    isPurple ? 'bg-purple/15 group-hover:bg-purple/25' : 'bg-gold/10 group-hover:bg-gold/20'
                  } transition-colors`}>
                    <Icon size={20} className={isPurple ? 'text-purple-light' : 'text-gold'} />
                  </div>
                  <h4 className="text-white font-black mb-2">{s.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(tag => (
                      <span key={tag} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isPurple ? 'bg-purple/20 text-purple-light' : 'bg-gold/15 text-gold'
                      }`}>{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              Industries We Work With
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight mb-4">
              We know your sector.
            </h2>
            <p className="text-navy/60 max-w-xl mx-auto">
              Every industry communicates differently. We write, design, and target for your specific market.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              const isPurple = i % 2 === 0;
              return (
                <div key={i}
                  className="bg-white rounded-2xl border border-navy/8 p-5 flex flex-col items-center gap-3 text-center hover:border-purple/20 hover:-translate-y-0.5 transition-all">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isPurple ? 'bg-purple/10' : 'bg-gold/10'}`}>
                    <Icon size={18} className={isPurple ? 'text-purple' : 'text-gold-dark'} />
                  </div>
                  <p className="text-navy font-bold text-xs leading-snug">{ind.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 purple-gradient opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              Strategy first.<br />
              <span className="purple-text">Results always.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:border-purple/30 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl purple-gradient flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-white/20 font-black text-2xl">{p.step}</span>
                  </div>
                  <h4 className="text-white font-black mb-2">{p.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-navy tracking-tight">Common questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How soon will I see results?', a: 'Paid ads (Google Ads) can generate traffic within days. SEO and organic social media take longer — typically 3–6 months to show meaningful growth. We are transparent about timelines from the start.' },
              { q: 'Do I need a website before starting digital marketing?', a: 'For social media management, no — your profiles are enough to start. For Google Ads and SEO, a website is essential. We can build or optimise one as part of a combined package.' },
              { q: 'Will I know where my budget is going?', a: 'Yes, completely. You receive a monthly report detailing every campaign, its results, and the breakdown of your spend. We believe in full transparency.' },
              { q: 'Do you manage the ad budget too?', a: 'We manage the campaigns, but the ad budget (what you pay Google or Meta) is separate and paid directly by you. This ensures you always have full control and visibility of your spend.' },
              { q: 'Can I start small?', a: 'Absolutely. We work with businesses at every stage. A focused social media presence on one or two platforms is often the best starting point for SMEs with a modest budget.' },
              { q: 'Is there a minimum contract period?', a: 'We do not lock you into long-term contracts. We earn your business every month through results. A minimum of 3 months is recommended to see meaningful traction, but this is a recommendation, not a condition.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-navy/8 p-6">
                <h4 className="text-navy font-black text-sm mb-2 flex items-start gap-2">
                  <span className="text-purple mt-0.5 flex-shrink-0">Q</span>
                  {faq.q}
                </h4>
                <p className="text-navy/60 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple/20 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                Free Strategy Call
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                Let&apos;s talk about<br />
                <span className="purple-text">growing your business.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">
                A free, no-pressure call or visit. We audit your current digital presence, identify the biggest opportunities, and tell you exactly what we would do — before any commitment.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { icon: Phone, label: 'Phone / WhatsApp', value: '+230 5813 7384', href: 'https://wa.me/23058137384' },
                  { icon: Mail,  label: 'Email',            value: 'contact@islandproconsulting.mu', href: 'mailto:contact@islandproconsulting.mu' },
                ].map(c => {
                  const Icon = c.icon;
                  return (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <div className="w-11 h-11 rounded-2xl bg-purple/15 flex items-center justify-center flex-shrink-0 group-hover:bg-purple/25 transition-colors">
                        <Icon size={18} className="text-purple-light" />
                      </div>
                      <div>
                        <p className="text-xs text-white/30 font-medium">{c.label}</p>
                        <p className="text-sm text-white font-bold">{c.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              <a href="https://wa.me/23058137384?text=Hello%20Island%20Pro%20Consulting%2C%20I%20am%20interested%20in%20digital%20marketing."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-6">Book your free strategy session</h3>
              <ContactForm
                service="Digital Marketing"
                dropdownLabel="Your main goal"
                dropdownOptions={['Get more customers / leads','Grow my social media presence','Improve my Google ranking','Launch Google / Meta Ads','Build brand awareness','Full digital marketing strategy']}
                messagePlaceholder="What do you sell? Who are your customers? What have you tried so far?"
                submitLabel="Book My Free Strategy Call"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
