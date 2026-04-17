import { Metadata } from 'next';
import {
  ArrowRight, Shield, Clock, ChevronRight, BadgeCheck,
  BarChart3, Mail, PenTool, Phone, MessageCircle,
  Users, Zap, RefreshCw,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Email Marketing for Mauritius Businesses | Island Pro Consulting',
  description: 'Professional email marketing campaigns for accommodation and tourism businesses in Mauritius. Brevo & Mailchimp setup, automated sequences, and list building.',
};

const SERVICES_OFFERED = [
  {
    icon: Mail,
    color: 'purple',
    title: 'Campaign Setup & Design',
    desc: 'We set up your Brevo or Mailchimp account from scratch, build branded email templates that match your identity, and create welcome sequences that make a strong first impression.',
    tags: ['Brevo / Mailchimp', 'Branded templates', 'Welcome sequences'],
  },
  {
    icon: Users,
    color: 'gold',
    title: 'List Building & Segmentation',
    desc: 'We grow your subscriber list with opt-in forms on your website and booking pages, then segment contacts by guest type, interest, and booking history so every message feels personal.',
    tags: ['Opt-in forms', 'Guest segmentation', 'CRM sync'],
  },
  {
    icon: Zap,
    color: 'purple',
    title: 'Automated Email Sequences',
    desc: 'From booking confirmation drip sequences to post-stay review requests, we build automated flows that work while you sleep — nurturing guests and driving repeat bookings.',
    tags: ['Drip campaigns', 'Booking reminders', 'Post-stay review requests'],
  },
  {
    icon: PenTool,
    color: 'gold',
    title: 'Copywriting & Design',
    desc: 'Compelling subject lines, beautiful layouts, and persuasive copy — all optimised for mobile. We write in French and English so no guest is left out.',
    tags: ['Subject line A/B testing', 'Mobile-first design', 'Bilingual FR/EN'],
  },
  {
    icon: BarChart3,
    color: 'purple',
    title: 'Analytics & Reporting',
    desc: 'Monthly reports on open rates, click rates, conversions, and list health — with clear recommendations on what to improve next. No spreadsheet overwhelm, just clear insights.',
    tags: ['Monthly reports', 'Open rate tracking', 'Unsubscribe management'],
  },
  {
    icon: RefreshCw,
    color: 'gold',
    title: 'Newsletter Management',
    desc: 'We handle your recurring monthly or quarterly newsletters end-to-end — planning, writing, designing, and sending. Seasonal promotions, special offers, and destination highlights included.',
    tags: ['Monthly newsletter', 'Seasonal campaigns', 'Promotion blasts'],
  },
];

const PROCESS = [
  { step: '01', title: 'Audit & Setup',       desc: 'We assess your current list and email history, then set up your platform account, authentication records, and sender domain.' },
  { step: '02', title: 'Template Design',     desc: 'We build brand-consistent email templates for campaigns, newsletters, and automated sequences — desktop and mobile optimised.' },
  { step: '03', title: 'Strategy & Calendar', desc: 'We plan your campaign calendar around seasons, booking windows, and promotions so every send has purpose and timing.' },
  { step: '04', title: 'Launch & Optimise',   desc: 'We send, monitor deliverability and engagement, run A/B tests on subject lines, and continuously improve results month over month.' },
];

/* ── Email Campaign Mockup ──────────────────────────────────────────── */
function EmailMockup() {
  return (
    <div className="relative hidden lg:flex items-center justify-center py-12">
      {/* Glow */}
      <div className="absolute w-[380px] h-[480px] rounded-3xl bg-purple/25 blur-[90px]" />
      <div className="absolute w-[280px] h-[400px] bg-black/40 blur-2xl translate-y-8 rounded-3xl" />

      {/* Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        style={{ width: '280px', background: '#0D1126' }}>

        {/* Dashboard header */}
        <div className="px-5 pt-5 pb-4" style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
          <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.65)', fontFamily: 'system-ui', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Campaign Dashboard</p>
          <p className="text-white font-black" style={{ fontSize: '14px', fontFamily: 'system-ui', marginTop: '2px' }}>Latest Campaign</p>
        </div>

        {/* Email preview card */}
        <div className="mx-4 mt-4 rounded-2xl border border-white/10 overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <div className="px-3 py-2.5 border-b border-white/8">
            <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.35)', fontFamily: 'system-ui', marginBottom: '3px' }}>From: La Belle Rodrigue &lt;noreply@labellerodrgue.mu&gt;</p>
            <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.85)', fontFamily: 'system-ui', fontWeight: 700 }}>🌊 Your Rodrigues Holiday Awaits — Special Offer Inside</p>
          </div>
          <div className="px-3 py-2 flex justify-between">
            <div>
              <p style={{ fontSize: '6px', color: 'rgba(255,255,255,0.35)', fontFamily: 'system-ui' }}>Open rate</p>
              <p style={{ fontSize: '12px', color: '#C040F0', fontFamily: 'system-ui', fontWeight: 800 }}>38.4%</p>
            </div>
            <div>
              <p style={{ fontSize: '6px', color: 'rgba(255,255,255,0.35)', fontFamily: 'system-ui' }}>Click rate</p>
              <p style={{ fontSize: '12px', color: '#F0B429', fontFamily: 'system-ui', fontWeight: 800 }}>12.1%</p>
            </div>
          </div>
        </div>

        {/* Metric bars */}
        <div className="px-4 py-4 space-y-2.5">
          {[
            { label: 'Delivered', value: 1247, max: 1247, color: '#8B2FE8' },
            { label: 'Opened',    value: 479,  max: 1247, color: '#C040F0' },
            { label: 'Clicked',   value: 151,  max: 1247, color: '#F0B429' },
          ].map(m => (
            <div key={m.label}>
              <div className="flex justify-between mb-1">
                <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.4)', fontFamily: 'system-ui' }}>{m.label}</p>
                <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.7)', fontFamily: 'system-ui', fontWeight: 700 }}>{m.value.toLocaleString()}</p>
              </div>
              <div className="w-full rounded-full" style={{ height: '4px', background: 'rgba(255,255,255,0.08)' }}>
                <div className="rounded-full" style={{ height: '4px', width: `${(m.value / m.max) * 100}%`, background: m.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom status */}
        <div className="mx-4 mb-4 rounded-xl px-3 py-2 flex items-center gap-2" style={{ background: 'rgba(139,47,232,0.15)' }}>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.55)', fontFamily: 'system-ui' }}>Campaign sent successfully · 2 hours ago</p>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute top-8 -right-4 bg-white rounded-2xl shadow-xl border border-navy/8 px-3 py-2"
        style={{ transform: 'rotate(3deg)' }}>
        <p className="text-[9px] text-navy/40 font-bold leading-none mb-0.5">Email ROI</p>
        <p className="text-navy font-black text-sm leading-none">₨42 per ₨1 spent</p>
      </div>

      <div className="absolute bottom-8 -left-4 rounded-2xl shadow-xl px-3 py-2"
        style={{ background: '#F0B429', transform: 'rotate(-3deg)' }}>
        <p className="text-[9px] text-navy font-black leading-none mb-0.5">Avg open rate</p>
        <p className="text-navy font-bold text-sm leading-none">38% open rate</p>
      </div>
    </div>
  );
}

export default function EmailMarketingPage() {
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
            <span className="text-purple-light">Email Marketing</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                <Mail size={12} /> Email Marketing
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Your customer list is your<br />
                <span className="purple-text">most valuable asset.</span><br />
                Are you using it?
              </h1>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10">
                Over 3.5 billion email users worldwide. In Mauritius, email remains the highest-ROI marketing channel — Rs 42 back for every Rs 1 spent.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact"
                  className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple">
                  Book a Free Email Audit <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20email%20marketing%20setup."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/8">
                {[
                  { icon: BadgeCheck, text: 'Brevo & Mailchimp certified' },
                  { icon: Clock,      text: 'Setup in 5 business days' },
                  { icon: ArrowRight, text: 'Full list migration included' },
                  { icon: Shield,     text: 'No long-term contracts' },
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

            <EmailMockup />
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-gold py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: '₨42',  label: 'ROI per ₨1 spent — highest of any marketing channel' },
              { stat: '89%',  label: 'Of Mauritians check email daily' },
              { stat: '4×',   label: 'More effective than social media for direct sales' },
              { stat: '3.5B', label: 'Email users globally — more than any social platform' },
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
              The inbox is the most<br />
              <span className="purple-text">valuable real estate online.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { stat: '60%',  label: 'Of consumers prefer to receive promotions via email over social media', color: 'purple' },
              { stat: '50%+', label: 'Higher open rates for segmented campaigns vs generic blasts', color: 'gold' },
              { stat: '80%',  label: 'Of small businesses rely on email as their primary customer retention tool', color: 'purple' },
            ].map((c, i) => (
              <div key={i} className={`rounded-3xl p-8 text-center ${c.color === 'purple' ? 'bg-purple/8 border border-purple/15' : 'bg-gold/8 border border-gold/20'}`}>
                <p className={`font-black text-4xl mb-3 ${c.color === 'purple' ? 'text-purple' : 'text-gold-dark'}`}>{c.stat}</p>
                <p className="text-navy/65 text-sm leading-relaxed">{c.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-3xl p-8 lg:p-10 text-center">
            <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              Your past guests, existing customers, and interested leads already know your name. A well-crafted email campaign turns that familiarity into repeat business —{' '}
              <span className="text-white font-semibold">automatically.</span>
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
              Everything your email<br />
              <span className="purple-text">programme needs.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              From first send to full automation — we handle every aspect of your email marketing.
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

      {/* ── Process ── */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              Our Process
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight mb-4">
              From zero to sending<br />
              <span className="purple-text">in days, not months.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-navy/8 p-6 hover:border-purple/20 hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl purple-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xs">{p.step}</span>
                  </div>
                  <span className="text-navy/15 font-black text-2xl">{p.step}</span>
                </div>
                <h4 className="text-navy font-black mb-2">{p.title}</h4>
                <p className="text-navy/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
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
              { q: 'Which platform do you use?', a: 'Brevo (formerly Sendinblue) or Mailchimp depending on your needs. Both have free tiers for small lists. We handle the full setup — account creation, sender authentication, and template build.' },
              { q: "I don't have an email list — can you still help?", a: 'Absolutely. We set up opt-in forms on your website, booking pages, and social media to start building your list from day one. Growth starts the moment we launch.' },
              { q: 'Can you import my existing customer contacts?', a: 'Yes. We migrate your current guest or customer database into the email platform, clean duplicates, remove invalid addresses, and segment them properly for targeted sends.' },
              { q: 'How often should I send emails?', a: 'For accommodation businesses, 1–2 campaigns per month is ideal. More for seasonal promotions and special events. We build a calendar that feels natural — not spammy — so your list stays engaged and healthy.' },
              { q: 'Will my emails end up in spam?', a: 'We configure proper SPF, DKIM, and DMARC authentication on your sender domain so your emails land in inboxes, not spam folders. Domain reputation setup is included in every onboarding.' },
              { q: 'What languages do you write in?', a: 'French and English — we write bilingual campaigns or separate language-targeted sends based on your audience profile. Targeting French-speaking guests separately from English-speaking ones consistently improves open rates.' },
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
                Free Email Audit
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                Let&apos;s put your list<br />
                <span className="purple-text">to work for you.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">
                A free, no-pressure audit of your current email setup. We review your list, your platform, and your last campaigns — and tell you exactly what we would do to improve results before any commitment.
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
              <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20email%20marketing%20setup."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-6">Book your free email audit</h3>
              <ContactForm
                service="Email Marketing"
                dropdownLabel="What do you need?"
                dropdownOptions={[
                  'Full email marketing setup',
                  'Newsletter management',
                  'Automated sequences',
                  'List building strategy',
                  'Platform migration',
                  'Monthly campaign management',
                ]}
                messagePlaceholder="Tell us about your business — how many contacts do you have? What platform are you on (if any)? What's your main goal?"
                submitLabel="Book My Free Email Audit"
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
