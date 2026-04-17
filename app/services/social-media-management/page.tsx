import { Metadata } from 'next';
import {
  ArrowRight, Shield, Clock, ChevronRight, BadgeCheck,
  BarChart3, Mail, PenTool, Phone, MessageCircle,
  TrendingUp, Share2, Calendar,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Social Media Management Mauritius | Island Pro Consulting',
  description: 'Professional social media management for Mauritius businesses. Facebook, Instagram & TikTok content creation, scheduling, and community management in French and English.',
  keywords: 'social media management Mauritius, Facebook management Mauritius, Instagram management Mauritius, content creation Mauritius, TikTok Mauritius',
};

const SERVICES_OFFERED = [
  {
    icon: Calendar,
    color: 'purple',
    title: 'Monthly Content Calendar',
    desc: 'We plan your posts a full month in advance — seasonal themes, local holidays, Rodrigues-specific content, and promotional campaigns mapped out so there are no last-minute scrambles.',
    tags: ['30-day planning', 'Seasonal themes', 'Holiday promotions'],
  },
  {
    icon: PenTool,
    color: 'gold',
    title: 'Content Creation',
    desc: 'We write every caption, design every graphic, and source or guide the visuals your business needs. Everything is tailored to your brand voice and your audience — not recycled templates.',
    tags: ['Caption writing', 'Graphic design', 'Bilingual FR/EN'],
  },
  {
    icon: Share2,
    color: 'purple',
    title: 'Post Scheduling & Publishing',
    desc: 'We schedule and publish at the optimal times for your audience on Facebook, Instagram, and TikTok — so your content reaches people when they are actually scrolling.',
    tags: ['Facebook & Instagram', 'TikTok', 'Optimal timing'],
  },
  {
    icon: MessageCircle,
    color: 'gold',
    title: 'Community Management',
    desc: 'We respond to comments and DMs, manage reviews, and maintain a consistent brand voice across every interaction — so your audience feels heard and your reputation stays strong.',
    tags: ['Comment replies', 'DM management', 'Review responses'],
  },
  {
    icon: TrendingUp,
    color: 'purple',
    title: 'Growth Strategy',
    desc: 'We research the right hashtags, identify collaboration and cross-promotion opportunities, and apply proven follower growth tactics specifically for the Mauritius and Rodrigues market.',
    tags: ['Hashtag strategy', 'Account growth', 'Competitor analysis'],
  },
  {
    icon: BarChart3,
    color: 'gold',
    title: 'Monthly Analytics Report',
    desc: 'Every month you receive a clear, jargon-free report showing reach, engagement, follower growth, and top-performing content — plus specific recommendations on what to do next.',
    tags: ['Monthly reporting', 'Engagement tracking', 'Reach & impressions'],
  },
];

const PROCESS = [
  { step: '01', title: 'Social Audit',      desc: 'We review your current profiles, analyse your competitors, and identify exactly where the opportunities are for your audience and sector.' },
  { step: '02', title: 'Content Strategy',  desc: 'We define your brand voice, content pillars, and posting frequency — creating a clear framework before we ever write a single word.' },
  { step: '03', title: 'Create & Schedule', desc: 'We produce content month by month, schedule posts at optimal times, and manage your community daily so nothing slips through.' },
  { step: '04', title: 'Report & Refine',   desc: 'Monthly performance review with clear numbers. We adjust content themes, timing, and strategy based on what the data tells us.' },
];

/* ── Social Media Content Calendar Mockup ──────────────────────────── */
function SocialMockup() {
  // 9 thumbnail cells in a 3x3 grid with varied purple/gold fills
  const thumbColors = [
    'linear-gradient(135deg,#8B2FE8,#C040F0)',
    'linear-gradient(135deg,#F0B429,#D99F20)',
    'linear-gradient(135deg,#C040F0,#8B2FE8)',
    'linear-gradient(135deg,#0A0F2E,#1a2460)',
    'linear-gradient(135deg,#8B2FE8,#F0B429)',
    'linear-gradient(135deg,#F0B429,#C040F0)',
    'linear-gradient(135deg,#1a2460,#8B2FE8)',
    'linear-gradient(135deg,#C040F0,#F0B429)',
    'linear-gradient(135deg,#8B2FE8,#0A0F2E)',
  ];

  return (
    <div className="relative hidden lg:flex items-center justify-center py-12">
      {/* Glow */}
      <div className="absolute w-[380px] h-[480px] rounded-3xl bg-purple/25 blur-[90px]" />
      <div className="absolute w-[280px] h-[400px] bg-black/40 blur-2xl translate-y-8 rounded-3xl" />

      {/* Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        style={{ width: '260px', background: '#0D1126' }}>

        {/* Header */}
        <div className="px-5 pt-5 pb-4" style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
          <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.65)', fontFamily: 'system-ui', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Content Calendar</p>
          <p className="text-white font-black" style={{ fontSize: '14px', fontFamily: 'system-ui', marginTop: '2px' }}>April 2025</p>
        </div>

        {/* 3×3 Instagram-style grid */}
        <div className="p-4">
          <div className="grid grid-cols-3 gap-1">
            {thumbColors.map((bg, i) => (
              <div key={i} className="rounded-lg" style={{ height: '62px', background: bg, position: 'relative', overflow: 'hidden' }}>
                {/* subtle pattern overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: i % 3 === 0
                    ? 'repeating-linear-gradient(45deg,rgba(255,255,255,0.06) 0px,rgba(255,255,255,0.06) 1px,transparent 1px,transparent 8px)'
                    : i % 3 === 1
                    ? 'radial-gradient(circle at 60% 40%,rgba(255,255,255,0.12) 0%,transparent 60%)'
                    : 'repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 6px)',
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="px-4 pb-4 grid grid-cols-3 gap-2 text-center">
          {[
            { value: '12', label: 'Posts\nscheduled' },
            { value: '3',  label: 'Reels\nplanned' },
            { value: '4',  label: 'Stories\nthis week' },
          ].map((s, i) => (
            <div key={i} className="rounded-xl py-2" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <p style={{ fontSize: '16px', color: i === 0 ? '#C040F0' : i === 1 ? '#F0B429' : '#C040F0', fontFamily: 'system-ui', fontWeight: 800, lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontSize: '6px', color: 'rgba(255,255,255,0.35)', fontFamily: 'system-ui', whiteSpace: 'pre-line', marginTop: '3px', lineHeight: 1.3 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute top-8 -right-4 bg-white rounded-2xl shadow-xl border border-navy/8 px-3 py-2"
        style={{ transform: 'rotate(3deg)' }}>
        <p className="text-[9px] text-navy/40 font-bold leading-none mb-0.5">Active on social</p>
        <p className="text-navy font-black text-sm leading-none">859K Mauritians</p>
      </div>

      <div className="absolute bottom-8 -left-4 rounded-2xl shadow-xl px-3 py-2"
        style={{ background: '#F0B429', transform: 'rotate(-3deg)' }}>
        <p className="text-[9px] text-navy font-black leading-none mb-0.5">Avg engagement</p>
        <p className="text-navy font-bold text-sm leading-none">4.2% avg engagement</p>
      </div>
    </div>
  );
}

export default function SocialMediaManagementPage() {
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
            <span className="text-purple-light">Social Media Management</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                <Share2 size={12} /> Social Media Management
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Consistent presence<br />
                builds trust.{' '}
                <span className="purple-text">Trust drives bookings.</span>
              </h1>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10">
                859,000 Mauritians are active on social media daily. But showing up inconsistently is worse than not showing up at all. We handle it for you, every single day.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact"
                  className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple">
                  Get a Free Social Audit <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20social%20media%20management."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/8">
                {[
                  { icon: BadgeCheck, text: 'Facebook & Instagram managed' },
                  { icon: Calendar,   text: 'Monthly content calendar' },
                  { icon: Clock,      text: 'Bilingual FR/EN content' },
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

            <SocialMockup />
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-gold py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: '859K', label: 'Mauritians active on social media — 67.7% of the population' },
              { stat: '4.2%', label: 'Average engagement rate for Mauritian hospitality businesses' },
              { stat: '71%',  label: 'Of purchase decisions are influenced by social media' },
              { stat: '3×',   label: 'More enquiries for businesses with active social profiles vs inactive ones' },
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
              Silence on social media<br />
              <span className="purple-text">costs you bookings.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { stat: '<5%',  label: 'Organic reach on Facebook for business pages without a paid strategy — almost no one sees your posts', color: 'purple' },
              { stat: '78%',  label: 'Of people research a business on social before visiting or booking', color: 'gold' },
              { stat: '60%',  label: 'Drop in trust when a business\'s last post is over 3 months old', color: 'purple' },
            ].map((c, i) => (
              <div key={i} className={`rounded-3xl p-8 text-center ${c.color === 'purple' ? 'bg-purple/8 border border-purple/15' : 'bg-gold/8 border border-gold/20'}`}>
                <p className={`font-black text-4xl mb-3 ${c.color === 'purple' ? 'text-purple' : 'text-gold-dark'}`}>{c.stat}</p>
                <p className="text-navy/65 text-sm leading-relaxed">{c.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-3xl p-8 lg:p-10 text-center">
            <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              Your competitors are posting. Your potential guests are scrolling. Every week your page sits silent is a week of missed impressions, missed trust, and{' '}
              <span className="text-white font-semibold">missed bookings.</span>
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
              Full-service social media,<br />
              <span className="purple-text">done for you.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              We handle every aspect of your social presence — so you can focus on running your business.
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
              Strategy first.<br />
              <span className="purple-text">Consistency always.</span>
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
              { q: 'Which platforms do you manage?', a: 'Facebook and Instagram are our core focus for Mauritius. We also manage TikTok for businesses targeting younger audiences. We recommend starting with 1–2 platforms done well rather than spreading thin across every channel.' },
              { q: 'Do I need to provide photos?', a: 'Not necessarily. We can work with what you have, guide you on taking simple phone photos, or arrange professional photography as an add-on. Many clients get strong results with guided phone photography from day one.' },
              { q: 'Will the content sound like me?', a: 'Yes. We start with a brand voice session to understand your tone, your values, and your audience before writing a single word. The result should feel like you — just more consistent and polished.' },
              { q: 'Do you run paid ads too?', a: 'Social media management covers organic (unpaid) content. Paid ads — boosting posts, Meta Ads — are a separate service we offer as an add-on or as part of our Digital Marketing package. We are happy to advise on the right mix.' },
              { q: 'How do I know it is working?', a: 'Every month you receive a clear report with follower growth, post reach, engagement rate, and top-performing content. No jargon — just clear numbers and specific recommendations for the month ahead.' },
              { q: 'Can you post in Creole too?', a: 'We currently write in French and English. For Creole captions, we work closely with your input or a local partner to ensure authenticity. Getting the language right matters — we will never publish something that feels off.' },
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
                Free Social Audit
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                Let&apos;s build your<br />
                <span className="purple-text">social presence together.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">
                A free, no-pressure audit of your current social profiles. We review your content, your competitors, and your audience — and show you exactly what we would do before any commitment.
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
              <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20social%20media%20management."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-6">Get your free social media audit</h3>
              <ContactForm
                service="Social Media Management"
                dropdownLabel="Which platforms?"
                dropdownOptions={[
                  'Facebook & Instagram',
                  'TikTok',
                  'All platforms',
                  'Facebook only',
                  'Instagram only',
                  'Not sure — advise me',
                ]}
                messagePlaceholder="Tell us about your business — what sector are you in? Do you have existing social profiles? What's your main goal (more followers, more bookings, more visibility)?"
                submitLabel="Get My Free Social Media Audit"
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
