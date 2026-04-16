import { Metadata } from 'next';
import {
  FileText, CheckCircle2, ArrowRight, Shield, Clock, Star,
  Building2, MapPin, TrendingUp, Landmark, ChevronRight,
  Users, BadgeCheck, Lightbulb, BarChart3, BookOpen,
  Phone, Mail, MessageCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pro Business Plan Writing | Island Pro Consulting',
  description: 'Professionally written, investor-ready business plans tailored for Mauritius. Permit applications, land lease, funding & bank loans. No payment before full satisfaction.',
};

const USE_CASES = [
  {
    icon: Building2,
    label: 'Government Permit Application',
    color: 'purple',
    headline: 'Get your permit approved.',
    desc: 'Authorities want to see a structured, credible plan before granting operational or construction permits. We write plans that speak the language of regulators — clear, compliant, and backed by solid projections.',
    examples: ['Restaurant & food business permits', 'Tourism activity licences', 'Small business operating permits', 'Healthcare & wellness authorisations'],
  },
  {
    icon: MapPin,
    label: 'Commercial Land Lease — Rodrigues',
    color: 'gold',
    headline: 'Secure your land in Rodrigues.',
    desc: 'The Rodrigues Regional Assembly requires a compelling business plan before granting commercial land leases. We have direct experience with Rodrigues-specific requirements and know exactly what reviewers look for.',
    examples: ['Agricultural & eco-tourism leases', 'Accommodation development projects', 'Fishing & marine activity ventures', 'Craft & local produce businesses'],
    badge: 'Rodrigues Specialist',
  },
  {
    icon: TrendingUp,
    label: 'Business Funding & Investment',
    color: 'purple',
    headline: 'Attract the capital you need.',
    desc: 'Whether you are pitching to investors, applying for SME grants, or seeking development funding from bodies like SMEDA or DBM — your plan must be compelling, structured, and financially sound.',
    examples: ['SMEDA grant applications', 'Private investor pitches', 'Development Bank of Mauritius (DBM)', 'Angel investor presentations'],
  },
  {
    icon: Landmark,
    label: 'Bank Loan Support',
    color: 'gold',
    headline: 'Walk into your bank with confidence.',
    desc: 'Banks need to see that you understand your market, your numbers, and your risks. We produce loan-ready business plans that satisfy every box on the lender\'s checklist — and give your application a real edge.',
    examples: ['MCB, SBM, AfrAsia & all local banks', 'MauBank SME financing', 'Property-backed business loans', 'Equipment & vehicle financing'],
  },
];

const WHAT_INCLUDED = [
  { icon: BookOpen,  title: 'Executive Summary',       desc: '2–3 page compelling overview written to immediately capture the reader\'s attention.' },
  { icon: Users,     title: 'Company Overview',         desc: 'Business structure, legal form, founders, mission, and vision.' },
  { icon: Lightbulb, title: 'Products & Services',      desc: 'Detailed description of your offering, pricing strategy, and unique value proposition.' },
  { icon: BarChart3, title: 'Market Analysis',          desc: 'In-depth research on your target market, competitors, and industry trends in Mauritius.' },
  { icon: TrendingUp, title: 'Marketing & Sales Plan',  desc: 'Go-to-market strategy, customer acquisition channels, and growth roadmap.' },
  { icon: Building2, title: 'Operations Plan',          desc: 'Day-to-day operations, suppliers, staffing plan, and key milestones.' },
  { icon: FileText,  title: '3–5 Year Financial Projections', desc: 'Revenue forecasts, P&L statements, cash flow projections, and break-even analysis.' },
  { icon: Shield,    title: 'Risk Analysis & Mitigation', desc: 'Identified risks and practical strategies to manage them — builds reviewer confidence.' },
  { icon: BadgeCheck, title: 'Appendices & Supporting Data', desc: 'Market data, CVs of key personnel, permits, letters of intent, or any supporting documents.' },
];

const PROCESS = [
  { step: '01', title: 'Free Consultation',    desc: 'We start with a call or WhatsApp chat to understand your project, goals, and timeline. No commitment required.' },
  { step: '02', title: 'Discovery & Research', desc: 'We gather all the details about your business, your market, and your specific submission requirements.' },
  { step: '03', title: 'First Draft',           desc: 'You receive a complete first draft — typically within 5–7 business days — for your review and feedback.' },
  { step: '04', title: 'Revisions',             desc: 'We refine until you are 100% satisfied. Unlimited revision rounds are included at no extra cost.' },
  { step: '05', title: 'Final Delivery',        desc: 'You receive a polished, professional PDF (and Word file) ready to submit. Payment is due only at this stage.' },
];

export default function BusinessPlanPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-cream pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/30 text-xs mb-12">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <ChevronRight size={12} />
            <a href="/#services" className="hover:text-white/60 transition-colors">Services</a>
            <ChevronRight size={12} />
            <span className="text-purple-light">Business Plan Writing</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
              <FileText size={12} /> Pro Business Plan
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Business plans that open<br />
              <span className="purple-text">doors in Mauritius.</span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
              Investor-ready. Bank-approved. Government-compliant. Professionally written plans tailored to Mauritian standards — with a simple promise: <span className="text-white font-semibold">you pay only after you are fully satisfied.</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a href="#contact"
                className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple">
                Get a Free Consultation <ArrowRight size={16} />
              </a>
              <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20a%20business%20plan."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pb-14 border-t border-white/8 pt-8">
              {[
                { icon: Shield,    text: 'Pay only after full satisfaction' },
                { icon: Clock,     text: 'First draft in 5–7 business days' },
                { icon: FileText,  text: '25–35 pages, fully structured' },
                { icon: BadgeCheck, text: 'Rodrigues specialist' },
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
        </div>
      </section>

      {/* ── Guarantee Banner ── */}
      <section className="bg-gold py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <Shield size={20} className="text-navy flex-shrink-0" />
          <p className="text-navy font-black text-sm">
            Satisfaction Guarantee — <span className="font-medium">No invoice is raised until you have reviewed the final plan and are 100% satisfied. No risk.</span>
          </p>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              4 Reasons People Come to Us
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              What do you need<br />your plan to achieve?
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto">
              Every plan we write is built around a specific goal — we do not produce generic templates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {USE_CASES.map((uc, i) => {
              const Icon = uc.icon;
              const isPurple = uc.color === 'purple';
              return (
                <div key={i}
                  className="group bg-white rounded-3xl border-2 border-navy/6 hover:border-purple/20 hover:-translate-y-1 hover:shadow-purple transition-all duration-300 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple/3 to-purple-light/3" />

                  <div className="relative">
                    {uc.badge && (
                      <span className="absolute top-0 right-0 text-[10px] font-black bg-gold/15 text-gold-dark px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {uc.badge}
                      </span>
                    )}

                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                      isPurple ? 'bg-purple/10 text-purple' : 'bg-gold/10 text-gold-dark'
                    }`}>
                      <Icon size={22} />
                    </div>

                    <p className={`text-xs font-black uppercase tracking-widest mb-2 ${isPurple ? 'text-purple' : 'text-gold-dark'}`}>
                      {uc.label}
                    </p>
                    <h3 className="text-xl font-black text-navy mb-3">{uc.headline}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed mb-5">{uc.desc}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {uc.examples.map(ex => (
                        <li key={ex} className="flex items-start gap-2 text-xs text-navy/50">
                          <CheckCircle2 size={13} className={`mt-0.5 flex-shrink-0 ${isPurple ? 'text-purple' : 'text-gold'}`} />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              What&apos;s Included
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
              25 to 35 pages of<br />
              <span className="purple-text">substance, not filler.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Every section is written specifically for your business. No copy-paste, no generic templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_INCLUDED.map((item, i) => {
              const Icon = item.icon;
              const useGold = i % 3 === 1;
              return (
                <div key={i}
                  className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-purple/30 transition-all">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    useGold ? 'bg-gold/10' : 'bg-purple/15'
                  }`}>
                    <Icon size={18} className={useGold ? 'text-gold' : 'text-purple-light'} />
                  </div>
                  <h4 className="text-white font-black text-sm mb-2">{item.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Page count callout */}
          <div className="mt-10 bg-white/5 border border-purple/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl purple-gradient flex items-center justify-center flex-shrink-0 shadow-purple">
              <span className="text-white font-black text-lg">35</span>
            </div>
            <div>
              <p className="text-white font-black mb-1">Typically 25–35 pages delivered</p>
              <p className="text-white/40 text-sm">Includes cover page, table of contents, all sections listed above, financial tables, and appendices. Delivered as a polished PDF and editable Word document.</p>
            </div>
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
              Simple. Transparent.<br />
              <span className="purple-text">Zero risk.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-0.5 bg-navy/8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PROCESS.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center lg:items-center">
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

      {/* ── Satisfaction Guarantee ── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 purple-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
            <Shield size={28} className="text-gold" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">
            Our commitment to you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Star,       title: 'Satisfaction First',     desc: 'We do not invoice until you have read, reviewed, and approved every page of your plan.' },
              { icon: Clock,      title: 'Unlimited Revisions',    desc: 'As many revision rounds as you need are included. We keep refining until it is exactly right.' },
              { icon: BadgeCheck, title: 'Built for Your Purpose', desc: 'Whether it\'s a bank, a regulator, or an investor — your plan is written for that specific reader.' },
            ].map(g => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="bg-white/8 border border-white/12 rounded-2xl p-6">
                  <Icon size={22} className="text-gold mx-auto mb-3" />
                  <h4 className="text-white font-black text-sm mb-2">{g.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{g.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-white/40 text-sm">
            In over three years of writing business plans for Mauritian entrepreneurs, we have never left a client unsatisfied.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-navy tracking-tight mb-3">
              Common questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How long does it take?',
                a: 'Most plans are delivered as a first draft within 5–7 business days. Urgent timelines can be accommodated — contact us to discuss.',
              },
              {
                q: 'What information do I need to provide?',
                a: 'We start with a free consultation call or WhatsApp chat to gather everything we need. You do not need to prepare a document in advance — just bring your idea and we handle the rest.',
              },
              {
                q: 'Do you work with businesses in Rodrigues?',
                a: 'Absolutely. We are very familiar with Rodrigues Regional Assembly requirements, land lease processes, and the local business environment. Several of our business plans have been specifically produced for Rodrigues-based ventures.',
              },
              {
                q: 'What is the cost?',
                a: 'Pricing depends on the complexity of your project and the intended purpose of the plan. Contact us for a free, no-obligation quote.',
              },
              {
                q: 'Can I use the plan for multiple purposes (e.g. bank loan AND permit)?',
                a: 'Yes — we structure plans that serve multiple purposes where appropriate, or advise you on whether a separate plan per purpose is the better approach.',
              },
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

      {/* ── Contact / CTA ── */}
      <section id="contact" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                Free Consultation
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                Tell us about your project.<br />
                <span className="purple-text">We will handle the rest.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">
                No commitment. No fee. Just a conversation about your goals — and a clear path forward.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: Phone, label: 'Phone / WhatsApp', value: '+230 5813 7384', href: 'https://wa.me/23058137384' },
                  { icon: Mail,  label: 'Email',            value: 'contact@islandproconsulting.mu', href: 'mailto:contact@islandproconsulting.mu' },
                ].map(c => {
                  const Icon = c.icon;
                  return (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 group">
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

              <a href="https://wa.me/23058137384?text=Hello%20Island%20Pro%20Consulting%2C%20I%20need%20a%20business%20plan."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-6">Request your free consultation</h3>
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
                  <label className="text-xs font-bold text-navy/60">Purpose of your business plan *</label>
                  <select required
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all appearance-none">
                    <option value="">Select the main purpose...</option>
                    <option>Government Permit Application</option>
                    <option>Commercial Land Lease — Rodrigues</option>
                    <option>Business Funding / Investment</option>
                    <option>Bank Loan Support</option>
                    <option>Multiple purposes</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Tell us about your project *</label>
                  <textarea required rows={4} placeholder="Briefly describe your business idea and what you need the plan for..."
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all resize-none" />
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 purple-gradient text-white font-bold text-sm py-3.5 rounded-xl hover:opacity-90 transition-all shadow-purple mt-2">
                  <ArrowRight size={15} /> Request Free Consultation
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
