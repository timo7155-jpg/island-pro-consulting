import { Metadata } from 'next';
import {
  FileText, CheckCircle2, ArrowRight, Shield, Clock,
  ChevronRight, BadgeCheck, GraduationCap, Briefcase,
  RefreshCcw, Globe, Phone, Mail, MessageCircle,
  UserCheck, Zap, Eye, Filter,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Professional CV & Cover Letter | Island Pro Consulting',
  description: 'ATS-optimised CVs and tailored cover letters crafted by professionals. Stand out in Mauritius and beyond. No payment before full satisfaction.',
};

const WHO_FOR = [
  {
    icon: GraduationCap,
    title: 'Fresh Graduates',
    desc: 'Entering the job market without callbacks? We turn your potential into a CV that opens doors — even without years of experience.',
    color: 'purple',
  },
  {
    icon: RefreshCcw,
    title: 'Career Changers',
    desc: 'Pivoting to a new sector and unsure how to reframe your background? We translate your experience into the language of your new industry.',
    color: 'gold',
  },
  {
    icon: Briefcase,
    title: 'Mid-Career Professionals',
    desc: 'Years of results that are not landing the roles they deserve. We restructure your story to reflect the seniority and impact you have built.',
    color: 'purple',
  },
  {
    icon: Globe,
    title: 'Applying Abroad',
    desc: 'Targeting opportunities in the UAE, UK, South Africa, or Europe? Different markets expect different formats. We adapt your documents accordingly.',
    color: 'gold',
  },
];

const DELIVERABLES = [
  { icon: FileText,   title: 'ATS-Optimised CV',        desc: 'Keyword-rich layout that passes automated screening and impresses the human reading it next.' },
  { icon: BadgeCheck, title: 'Tailored Cover Letter',    desc: 'A compelling narrative written specifically for the role — not a generic template.' },
  { icon: Zap,        title: '48h Express Option',       desc: 'Need it fast? We offer a priority turnaround for time-sensitive applications.' },
  { icon: RefreshCcw, title: 'Unlimited Revisions',      desc: 'We keep refining until you are proud to send it. No cap on revision rounds.' },
  { icon: Eye,        title: 'Recruiter-Ready Layout',   desc: 'Clean, modern design that is easy to scan in seconds — because that is all you get.' },
  { icon: Shield,     title: 'Satisfaction Guarantee',   desc: 'No invoice until you have reviewed the final documents and are fully satisfied.' },
];

const PROCESS = [
  { step: '01', title: 'Free Consultation',  desc: 'A quick call or WhatsApp chat. We learn about your background, target roles, and goals.' },
  { step: '02', title: 'Information Gather', desc: 'We send you a simple form to capture your experience, skills, and achievements in detail.' },
  { step: '03', title: 'First Draft',        desc: 'Your professionally written CV and cover letter are ready within 3–5 business days.' },
  { step: '04', title: 'Your Feedback',      desc: 'You review, we refine. As many rounds as needed until every word feels right.' },
  { step: '05', title: 'Final Documents',    desc: 'Delivered as polished PDF and editable Word files. Payment is requested at this stage only.' },
];

/* ── CV Mockup ─────────────────────────────────────────────────────── */
function CVMockup() {
  return (
    <div className="relative hidden lg:flex items-center justify-center py-12">
      {/* Glow */}
      <div className="absolute w-[380px] h-[500px] rounded-3xl bg-purple/25 blur-[90px]" />
      <div className="absolute w-[300px] h-[420px] bg-black/40 blur-2xl translate-y-8 translate-x-3 rounded-2xl" />

      {/* CV sheet — slight tilt */}
      <div className="relative bg-white shadow-2xl rounded-xl overflow-hidden"
        style={{ width: '260px', transform: 'rotate(-2deg)' }}>

        {/* Left accent bar */}
        <div className="flex min-h-[380px]">
          <div className="w-2.5 flex-shrink-0"
            style={{ background: 'linear-gradient(180deg,#8B2FE8 0%,#C040F0 50%,#F0B429 100%)' }} />

          <div className="flex-1">
            {/* Header */}
            <div className="px-4 pt-4 pb-3" style={{ background: '#0D1126' }}>
              <div className="w-10 h-10 rounded-full bg-purple/30 mb-2 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white/20" />
              </div>
              <div className="h-2 w-28 bg-white/80 rounded-full mb-1" />
              <div className="h-1.5 w-20 bg-white/30 rounded-full mb-2" />
              <div className="flex gap-3">
                {['Email', 'Phone', 'LinkedIn'].map(l => (
                  <div key={l} className="flex items-center gap-0.5">
                    <div className="w-1 h-1 rounded-full bg-purple/60" />
                    <div className="h-1 w-10 bg-white/20 rounded-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="px-4 py-3 space-y-3" style={{ background: '#FAFAFA' }}>
              {/* Section: Summary */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: '#8B2FE8' }} />
                  <div className="h-1.5 w-16 rounded-full" style={{ background: '#8B2FE8', opacity: 0.7 }} />
                </div>
                {[32, 28, 30, 24].map((w, i) => (
                  <div key={i} className="h-1 bg-gray-200 rounded-full mb-1" style={{ width: `${w * 3}px` }} />
                ))}
              </div>

              {/* Section: Experience */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: '#8B2FE8' }} />
                  <div className="h-1.5 w-20 rounded-full" style={{ background: '#8B2FE8', opacity: 0.7 }} />
                </div>
                <div className="space-y-2">
                  {[1, 2].map(j => (
                    <div key={j} className="pl-2 border-l-2" style={{ borderColor: '#8B2FE808' }}>
                      <div className="h-1.5 w-24 bg-gray-800 rounded-full mb-1 opacity-50" />
                      <div className="h-1 w-16 bg-gray-400 rounded-full mb-1 opacity-40" />
                      {[28, 32, 20].map((w, i) => (
                        <div key={i} className="h-1 bg-gray-200 rounded-full mb-0.5" style={{ width: `${w * 3}px` }} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Skills */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: '#F0B429' }} />
                  <div className="h-1.5 w-12 rounded-full" style={{ background: '#F0B429', opacity: 0.7 }} />
                </div>
                <div className="flex flex-wrap gap-1">
                  {[14, 18, 12, 16, 10, 14].map((w, i) => (
                    <div key={i} className="h-3 rounded-full"
                      style={{
                        width: `${w * 3}px`,
                        background: i % 2 === 0 ? 'rgba(139,47,232,0.12)' : 'rgba(240,180,41,0.15)',
                      }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 flex justify-between border-t border-gray-100">
          <span style={{ fontSize: '6px', color: '#9CA3AF', fontFamily: 'system-ui' }}>ATS OPTIMISED</span>
          <span style={{ fontSize: '6px', color: '#8B2FE8', fontWeight: 700, fontFamily: 'system-ui' }}>Island Pro Consulting</span>
        </div>
      </div>

      {/* Chips */}
      <div className="absolute -bottom-1 -right-4 bg-white rounded-2xl shadow-xl border border-navy/8 px-3 py-2 flex items-center gap-2"
        style={{ transform: 'rotate(2deg)' }}>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
          <CheckCircle2 size={14} className="text-white" />
        </div>
        <div>
          <p className="text-[9px] text-navy/40 font-bold leading-none mb-0.5">Delivery</p>
          <p className="text-navy font-black text-sm leading-none">48 hours</p>
        </div>
      </div>

      <div className="absolute top-8 -left-5 rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
        style={{ background: '#F0B429', transform: 'rotate(2deg)' }}>
        <Shield size={12} className="text-navy flex-shrink-0" />
        <p className="text-[10px] text-navy font-black leading-tight">Pay after<br />satisfaction</p>
      </div>
    </div>
  );
}

export default function CVPage() {
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
            <span className="text-purple-light">CV & Cover Letter</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                <UserCheck size={12} /> Professional CV Writing
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Your CV has 7 seconds.<br />
                <span className="purple-text">Make them count.</span>
              </h1>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10">
                Most CVs never reach a human recruiter — filtered by algorithms or dismissed at a glance. We know exactly what ATS software and hiring managers look for, and we build your story around it.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact"
                  className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple">
                  Book a Free Call <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20a%20professional%20CV."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/8">
                {[
                  { icon: Shield,   text: 'Pay only after full satisfaction' },
                  { icon: Clock,    text: 'First draft in 3–5 business days' },
                  { icon: Zap,      text: '48h express option available' },
                  { icon: Filter,   text: 'ATS-optimised layout' },
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

            <CVMockup />
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-gold py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: '7 seconds', label: 'Average time a recruiter spends on a CV at first glance' },
              { stat: '98%',       label: 'Of large companies use ATS software to filter applications automatically' },
              { stat: '1 in 10',   label: 'Applications ever reach the hiring manager — the rest are screened out' },
            ].map(s => (
              <div key={s.stat}>
                <p className="text-navy font-black text-2xl lg:text-3xl">{s.stat}</p>
                <p className="text-navy/70 text-xs leading-snug mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Is This For ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              Is This For You?
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              We write for every<br />stage of your career.
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto">
              Whether you are just starting out or targeting a senior role — we adapt the approach to your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHO_FOR.map((w, i) => {
              const Icon = w.icon;
              const isPurple = w.color === 'purple';
              return (
                <div key={i}
                  className="group bg-white rounded-3xl border-2 border-navy/6 hover:border-purple/20 hover:-translate-y-1 hover:shadow-purple transition-all duration-300 p-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    isPurple ? 'bg-purple/10 text-purple' : 'bg-gold/10 text-gold-dark'
                  }`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-black text-navy mb-3">{w.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              What&apos;s Included
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Everything you need<br />
              <span className="purple-text">to land the interview.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DELIVERABLES.map((d, i) => {
              const Icon = d.icon;
              const useGold = i % 3 === 1;
              return (
                <div key={i}
                  className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-purple/30 transition-all">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    useGold ? 'bg-gold/10' : 'bg-purple/15'
                  }`}>
                    <Icon size={18} className={useGold ? 'text-gold' : 'text-purple-light'} />
                  </div>
                  <h4 className="text-white font-black text-sm mb-2">{d.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              How It Works
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              From conversation<br />
              <span className="purple-text">to dream job.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-0.5 bg-navy/8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PROCESS.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 rounded-2xl purple-gradient flex items-center justify-center mb-4 shadow-purple flex-shrink-0 z-10">
                    <span className="text-white font-black text-lg">{p.step}</span>
                  </div>
                  <h4 className="text-navy font-black text-sm mb-2">{p.title}</h4>
                  <p className="text-navy/55 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Guarantee ── */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 purple-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-5">
            <Shield size={24} className="text-gold" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-4">You pay only when you are satisfied</h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xl mx-auto">
            We do not send an invoice until you have reviewed the final documents and confirmed you are happy. Unlimited revisions are included as standard. No exceptions.
          </p>
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
              { q: 'How long does it take?', a: 'Your first draft is typically ready within 3–5 business days. If you need it faster, ask about our 48-hour express option.' },
              { q: 'What information do you need from me?', a: 'After a brief consultation, we send you a simple form to complete. We need your work history, education, key achievements, and target role. We handle the writing from there.' },
              { q: 'What is ATS and why does it matter?', a: 'ATS (Applicant Tracking System) is software that scans CVs before a human does. Many applications are rejected automatically due to formatting or missing keywords. We build every CV to pass these filters first.' },
              { q: 'Do you write CVs for any industry?', a: 'Yes — we write for all sectors including hospitality, finance, IT, engineering, healthcare, education, and public service. We adapt the language and structure to fit your field.' },
              { q: 'Can you help if I am applying outside Mauritius?', a: 'Absolutely. CV format expectations vary significantly between the GCC, UK, Europe, and South Africa. We know the differences and tailor your documents to the target market.' },
              { q: 'What is the cost?', a: 'Pricing depends on your career level and the documents required. Contact us for a free, no-obligation quote after a quick consultation.' },
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
                Book a Free Call
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                Let&apos;s talk about<br />
                <span className="purple-text">your next move.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">
                A free, no-pressure call or visit to understand what you are aiming for and how we can help. No commitment required.
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
              <a href="https://wa.me/23058137384?text=Hello%20Island%20Pro%20Consulting%2C%20I%20need%20a%20professional%20CV."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-6">Book your free consultation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-navy/60">Full Name *</label>
                    <input type="text" required placeholder="Jean-Marc Dupont"
                      className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-navy/60">Email *</label>
                    <input type="email" required placeholder="you@example.com"
                      className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Phone / WhatsApp</label>
                  <input type="tel" placeholder="+230 5XXX XXXX"
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Your current situation *</label>
                  <select required
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all appearance-none">
                    <option value="">Select your profile...</option>
                    <option>Fresh Graduate</option>
                    <option>Career Change</option>
                    <option>Mid-Career Professional</option>
                    <option>Applying Abroad</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Tell us about your goal *</label>
                  <textarea required rows={3} placeholder="What role are you targeting? Any specific industry or country?"
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all resize-none" />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 purple-gradient text-white font-bold text-sm py-3.5 rounded-xl hover:opacity-90 transition-all shadow-purple mt-2">
                  <ArrowRight size={15} /> Book My Free Call
                </button>
                <p className="text-xs text-navy/40 text-center">We respond within 24 hours. No obligation whatsoever.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
