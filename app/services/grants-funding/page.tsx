import { Metadata } from 'next';
import {
  ArrowRight, Shield, Clock, ChevronRight, BadgeCheck,
  Mail, Phone, MessageCircle,
  Search, FileText, Building2, RefreshCw,
  Landmark, Award,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Grant & Funding Applications Mauritius | Island Pro Consulting',
  description: 'Expert support for government grants, subsidised loans, and tax incentives for Mauritius SMEs. End-to-end application writing and submission — we find what you qualify for.',
};

const SERVICES_OFFERED = [
  {
    icon: Search,
    color: 'purple',
    title: 'Funding Eligibility Assessment',
    desc: 'We review your business profile, age, sector, and financials against every available grant, loan, and incentive scheme to identify exactly what you qualify for — including programmes specific to Rodrigues.',
    tags: ['Free initial assessment', 'All schemes covered', 'Rodrigues-specific grants'],
  },
  {
    icon: FileText,
    color: 'gold',
    title: 'Application Writing',
    desc: 'We professionally write your entire grant application — the business case, project description, objectives, financial justification, and impact narrative. Everything the assessors need, done right.',
    tags: ['Business case writing', 'Project proposals', 'Financial narratives'],
  },
  {
    icon: Landmark,
    color: 'purple',
    title: 'Development Bank Loans',
    desc: 'State-backed SME loans, working capital facilities, and equipment financing — we prepare the complete application pack and guide you through every stage of the process.',
    tags: ['SME loans', 'Working capital', 'Equipment financing'],
  },
  {
    icon: Award,
    color: 'gold',
    title: 'Government Grants & Subsidies',
    desc: 'Training grants, matching grants, digitisation subsidies, and productivity improvement schemes — we identify which apply to your business and handle the full submission.',
    tags: ['Training grants', 'Matching grants', 'Digitisation subsidies'],
  },
  {
    icon: Building2,
    color: 'purple',
    title: 'Investment Incentives',
    desc: 'Tax holidays, investment certificates, pioneer status applications, and export incentives offered through national investment bodies — we navigate the process so you capture every available benefit.',
    tags: ['Tax holidays', 'Investment certificates', 'Export incentives'],
  },
  {
    icon: RefreshCw,
    color: 'gold',
    title: 'Follow-Up & Reporting',
    desc: 'We manage all follow-ups with funding bodies after submission, respond to assessor queries on your behalf, and ensure you meet every post-approval reporting requirement to protect your award.',
    tags: ['Application tracking', 'Query responses', 'Post-award reporting'],
  },
];

const PROCESS = [
  { step: '01', title: 'Free Eligibility Check',  desc: 'We assess your business against all available funding schemes — grants, loans, tax incentives, and sector-specific programmes — and produce a clear eligibility summary.' },
  { step: '02', title: 'Match & Strategy',         desc: 'We identify the best opportunities, rank them by potential value and probability of success, and agree a priority order so your effort is focused where it counts most.' },
  { step: '03', title: 'Prepare & Apply',          desc: 'We write the full application, gather and organise supporting documents, and submit everything on your behalf — professionally prepared and on time.' },
  { step: '04', title: 'Track & Follow Up',        desc: 'We monitor application status, respond to assessor queries, and handle all post-approval compliance and reporting requirements so your funding is protected.' },
];

/* ── Funding Tracker Mockup ─────────────────────────────────────────── */
function FundingMockup() {
  const schemes = [
    { name: 'SME Matching Grant',     status: 'Applied',    statusColor: '#22c55e', statusBg: 'rgba(34,197,94,0.15)',  amount: 'Rs 200,000' },
    { name: 'Development Bank Loan',  status: 'In Review',  statusColor: '#F0B429', statusBg: 'rgba(240,180,41,0.15)', amount: 'Rs 500,000' },
    { name: 'Training Subsidy',        status: 'Eligible',   statusColor: '#60a5fa', statusBg: 'rgba(96,165,250,0.15)', amount: 'Rs 150,000' },
  ];

  return (
    <div className="relative hidden lg:flex items-center justify-center py-12">
      {/* Glow */}
      <div className="absolute w-[380px] h-[480px] rounded-3xl bg-purple/25 blur-[90px]" />
      <div className="absolute w-[280px] h-[400px] bg-black/40 blur-2xl translate-y-8 rounded-3xl" />

      {/* Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        style={{ width: '280px', background: '#0D1126' }}>

        {/* Header */}
        <div className="px-5 pt-5 pb-4" style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
          <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.65)', fontFamily: 'system-ui', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Funding Tracker</p>
          <p className="text-white font-black" style={{ fontSize: '14px', fontFamily: 'system-ui', marginTop: '2px' }}>Active Applications</p>
        </div>

        {/* Progress bar */}
        <div className="px-5 pt-4 pb-2">
          <div className="flex justify-between mb-1.5">
            <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.4)', fontFamily: 'system-ui' }}>Overall progress</p>
            <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.6)', fontFamily: 'system-ui', fontWeight: 700 }}>67%</p>
          </div>
          <div className="w-full rounded-full" style={{ height: '5px', background: 'rgba(255,255,255,0.08)' }}>
            <div className="rounded-full" style={{ height: '5px', width: '67%', background: 'linear-gradient(90deg,#8B2FE8,#C040F0)' }} />
          </div>
        </div>

        {/* Scheme rows */}
        <div className="px-4 py-3 space-y-2.5">
          {schemes.map((s, i) => (
            <div key={i} className="rounded-2xl px-3 py-2.5 flex items-center justify-between"
              style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="flex-1 min-w-0 pr-2">
                <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.8)', fontFamily: 'system-ui', fontWeight: 700, marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.name}</p>
                <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.35)', fontFamily: 'system-ui' }}>{s.amount}</p>
              </div>
              <div className="rounded-full px-2 py-0.5 flex-shrink-0" style={{ background: s.statusBg }}>
                <p style={{ fontSize: '7px', color: s.statusColor, fontFamily: 'system-ui', fontWeight: 700 }}>{s.status}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mx-4 mb-4 rounded-2xl px-4 py-3" style={{ background: 'linear-gradient(135deg,rgba(139,47,232,0.25),rgba(192,64,240,0.15))' }}>
          <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.4)', fontFamily: 'system-ui', marginBottom: '2px' }}>Total potential funding</p>
          <p style={{ fontSize: '18px', color: '#F0B429', fontFamily: 'system-ui', fontWeight: 800, lineHeight: 1 }}>Rs 850,000</p>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute top-8 -right-4 bg-white rounded-2xl shadow-xl border border-navy/8 px-3 py-2"
        style={{ transform: 'rotate(3deg)' }}>
        <p className="text-[9px] text-navy/40 font-bold leading-none mb-0.5">Potential funding</p>
        <p className="text-navy font-black text-sm leading-none">Rs 850K available</p>
      </div>

      <div className="absolute bottom-8 -left-4 rounded-2xl shadow-xl px-3 py-2"
        style={{ background: '#F0B429', transform: 'rotate(-3deg)' }}>
        <p className="text-[9px] text-navy font-black leading-none mb-0.5">Active schemes</p>
        <p className="text-navy font-bold text-sm leading-none">3 open schemes</p>
      </div>
    </div>
  );
}

export default function GrantsFundingPage() {
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
            <span className="text-purple-light">Grants &amp; Funding</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                <Landmark size={12} /> Grants &amp; Funding
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Free money exists. Most<br />
                businesses never apply.<br />
                <span className="purple-text">Let us do it for you.</span>
              </h1>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10">
                The Mauritian government and public financial institutions offer millions in grants, subsidised loans, and tax incentives every year — but most SME owners don&apos;t know where to start. We do.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact"
                  className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple">
                  Check My Eligibility Free <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20grant%20and%20funding%20application%20support."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/8">
                {[
                  { icon: BadgeCheck, text: 'Government grant specialists' },
                  { icon: ArrowRight, text: 'End-to-end application support' },
                  { icon: Shield,     text: 'No upfront fee' },
                  { icon: Clock,      text: 'Success-based approach' },
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

            <FundingMockup />
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-gold py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: 'Rs 2B+',    label: 'Available annually through government grants, public loans, and national incentive programmes' },
              { stat: '73%',       label: 'Of eligible SMEs never apply — leaving grants and subsidies unclaimed each year' },
              { stat: 'Up to 50%', label: 'Of project costs covered by national SME grant and matching fund schemes' },
              { stat: 'Rs 10M',    label: 'Maximum state-backed SME loan amount for qualifying businesses' },
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
              Millions in funding go<br />
              <span className="purple-text">unclaimed every year.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { stat: 'Rs 2B+',   label: 'In public funding available annually — but most goes unclaimed by SMEs who do not know how to apply', color: 'purple' },
              { stat: '6–12 wks', label: 'Average application processing time — starting early is critical to securing funding before year-end', color: 'gold' },
              { stat: '3×',       label: 'Higher success rate for professionally prepared applications vs self-submitted ones', color: 'purple' },
            ].map((c, i) => (
              <div key={i} className={`rounded-3xl p-8 text-center ${c.color === 'purple' ? 'bg-purple/8 border border-purple/15' : 'bg-gold/8 border border-gold/20'}`}>
                <p className={`font-black text-4xl mb-3 ${c.color === 'purple' ? 'text-purple' : 'text-gold-dark'}`}>{c.stat}</p>
                <p className="text-navy/65 text-sm leading-relaxed">{c.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-3xl p-8 lg:p-10 text-center">
            <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              Most business owners assume grants are for big companies or too complicated to apply for. The reality is that dozens of schemes exist specifically for Mauritius SMEs — and the main barrier is simply{' '}
              <span className="text-white font-semibold">knowing where to look and how to apply correctly.</span>
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
              End-to-end funding<br />
              <span className="purple-text">support for SMEs.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              From identifying what you qualify for to managing post-award compliance — we handle everything.
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
              From eligible to<br />
              <span className="purple-text">funded, step by step.</span>
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
              { q: 'Is this service free?', a: 'The initial eligibility assessment is completely free. For application writing and submission support, we charge a fixed service fee agreed in advance. Some engagements use a success-based model — we always agree on terms before starting any work.' },
              { q: 'What types of funding are available in Mauritius?', a: 'There are several active categories: SME matching grants, training and skills subsidies, digitisation incentives, state-backed development loans, investment tax holidays, and sector-specific tourism or export incentives. Rodrigues businesses also qualify for additional regional development programmes. We keep an updated database and will match you to the right ones.' },
              { q: 'My business is in Rodrigues — does that change what is available?', a: 'It actually helps. Rodrigues-based businesses qualify for additional regional development funding and tourism-specific incentives that are not available to mainland Mauritius businesses. Being based in Rodrigues is often an advantage when applying.' },
              { q: 'How long does an application take?', a: 'Preparation typically takes 1–3 weeks depending on the complexity of the scheme and the documents required. Processing by the funding body then takes 6–12 weeks on average. We advise starting early — especially before the financial year end when budgets are allocated.' },
              { q: 'What are my chances of success?', a: 'Success depends on your business profile, the quality of the application, and the specific scheme. Professionally prepared applications consistently achieve a significantly higher approval rate than self-submitted ones. We will only recommend applying where we believe there is a genuine, strong case.' },
              { q: 'Do I need an accountant or lawyer?', a: 'Not necessarily for most grant applications. We handle the business case and narrative writing. For applications that require audited accounts, legal documents, or formal financial projections, we coordinate with your existing advisors or can recommend trusted partners in Mauritius.' },
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
                Free Eligibility Check
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                Find out what funding<br />
                <span className="purple-text">your business qualifies for.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">
                A free, no-obligation eligibility check. We review your business against every available scheme and tell you exactly what you qualify for — before any commitment from you.
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
              <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20grant%20and%20funding%20application%20support."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-6">Check your funding eligibility</h3>
              <ContactForm
                service="Grants & Funding"
                dropdownLabel="What are you looking for?"
                dropdownOptions={[
                  'General funding eligibility check',
                  'State-backed development loan',
                  'SME grant or matching fund',
                  'Investment incentive or tax holiday',
                  'Rodrigues regional funding',
                  'Not sure — advise me',
                ]}
                messagePlaceholder="Tell us about your business — how long have you been operating? How many employees? What project or need would the funding support?"
                submitLabel="Check My Eligibility Free"
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
