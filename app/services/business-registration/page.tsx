import { Metadata } from 'next';
import {
  ArrowRight, Shield, Clock, ChevronRight, BadgeCheck,
  Building2, Phone, Mail,
  MessageCircle, Landmark, ClipboardList, Stamp,
  Users, Globe, Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Business Registration Mauritius | Island Pro Consulting',
  description: 'End-to-end company registration, MRA registration, permits and licences in Mauritius. We handle the paperwork so you can focus on your business.',
  keywords: 'business registration Mauritius, company registration Mauritius, MRA registration, business licence Mauritius, start company Mauritius',
  openGraph: {
    title: 'Business Registration Mauritius | Island Pro Consulting',
    description: 'End-to-end company registration, MRA registration, permits & licences. We handle the paperwork — you focus on your business.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Business Registration — Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Registration Mauritius | Island Pro Consulting',
    description: 'Company registration, MRA registration, permits & licences in Mauritius. We handle the paperwork.',
    images: ['/logo.jpg'],
  },
};

const STEPS_WE_HANDLE = [
  { icon: Building2,    color: 'purple', title: 'Company Registration',        desc: 'We register your business with the Registrar of Companies — sole trader, partnership, or limited company.' },
  { icon: Landmark,     color: 'gold',   title: 'MRA Business Registration',    desc: 'Tax registration with the Mauritius Revenue Authority, including VAT registration where applicable.' },
  { icon: ClipboardList, color: 'purple', title: 'Business Licence & Permits',  desc: 'Sector-specific licences and operating permits required by your municipality or relevant authority.' },
  { icon: Stamp,        color: 'gold',   title: 'Other Official Formalities',   desc: 'Social security registration (NSF/NPF), trade licences, and any additional administrative requirements.' },
];

const WHY_ITEMS = [
  { icon: Zap,        title: 'Save Time',            desc: 'Navigating government portals and offices is time-consuming. We know the process inside out and handle it efficiently.' },
  { icon: Shield,     title: 'Avoid Costly Mistakes', desc: 'Errors in registration documents can cause delays or penalties. We ensure every form is correct the first time.' },
  { icon: BadgeCheck, title: 'Local Expertise',       desc: 'We are familiar with Mauritius registration requirements, fees, and timelines — including Rodrigues-specific processes.' },
  { icon: Users,      title: 'End-to-End Support',    desc: 'From choosing the right business structure to receiving your official certificates — we are with you at every step.' },
];

const STRUCTURES = [
  { title: 'Sole Trader',          desc: 'Simplest form. You trade under your own name. Ideal for freelancers and one-person businesses.' },
  { title: 'Partnership',          desc: 'Two or more individuals sharing ownership, profits, and responsibilities.' },
  { title: 'Private Ltd Company',  desc: 'A separate legal entity. Offers liability protection and a more credible business image.' },
  { title: 'GBC / Offshore',       desc: 'Global Business Corporations for international trading — subject to specific requirements.' },
];

const PROCESS = [
  { step: '01', title: 'Free Consultation', desc: 'We discuss your business type, sector, and goals to recommend the right structure and registrations needed.' },
  { step: '02', title: 'Document Preparation', desc: 'We prepare and verify all required documents — memorandum, articles, forms, and supporting materials.' },
  { step: '03', title: 'Submission',           desc: 'We submit to the Registrar, MRA, and any other relevant authority on your behalf.' },
  { step: '04', title: 'Follow-Up',            desc: 'We track progress, respond to any queries from authorities, and keep you updated throughout.' },
  { step: '05', title: 'Certificates Delivered', desc: 'You receive all official registration certificates and are ready to operate legally.' },
];

/* ── Document stack mockup ───────────────────────────────────────────── */
function DocStackMockup() {
  return (
    <div className="relative flex items-center justify-center py-8 lg:py-12">
      <div className="absolute w-[380px] h-[480px] rounded-3xl bg-purple/25 blur-[90px]" />

      {/* Back document */}
      <div className="absolute bg-white rounded-xl shadow-lg border border-gray-100"
        style={{ width: '240px', height: '300px', transform: 'rotate(6deg) translate(20px, 10px)' }}>
        <div className="h-2 w-full rounded-t-xl" style={{ background: 'linear-gradient(90deg,#F0B429,#F5C842)' }} />
        <div className="p-5 space-y-2 pt-4">
          {[60, 45, 55, 40, 50].map((w, i) => (
            <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>

      {/* Middle document */}
      <div className="absolute bg-white rounded-xl shadow-lg border border-gray-100"
        style={{ width: '240px', height: '300px', transform: 'rotate(-3deg) translate(-10px, 5px)' }}>
        <div className="h-2 w-full rounded-t-xl" style={{ background: 'linear-gradient(90deg,#8B2FE8,#C040F0)' }} />
        <div className="p-5 space-y-2 pt-4">
          {[55, 70, 45, 60, 40].map((w, i) => (
            <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>

      {/* Front — main certificate */}
      <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
        style={{ width: '250px', transform: 'rotate(-1deg)' }}>
        {/* Purple header */}
        <div className="px-5 pt-5 pb-4" style={{ background: '#0D1126' }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
              <Stamp size={13} className="text-white" />
            </div>
            <span className="text-white/50 text-[7px] font-bold uppercase tracking-widest">Certificate of Incorporation</span>
          </div>
          <p className="text-white font-black text-xs leading-tight">Republic of Mauritius</p>
          <p className="text-white/40 text-[7px] mt-0.5">Registrar of Companies</p>
        </div>

        {/* Gold divider */}
        <div className="h-1" style={{ background: 'linear-gradient(90deg,#F0B429,#F5C842)' }} />

        {/* Body */}
        <div className="px-5 py-4 space-y-3" style={{ background: '#FAFAFA' }}>
          <div>
            <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest mb-1">Company Name</p>
            <div className="h-2 w-36 bg-gray-200 rounded-full" />
          </div>
          <div>
            <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest mb-1">Registration Number</p>
            <div className="h-2 w-24 bg-gray-200 rounded-full" />
          </div>
          <div>
            <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest mb-1">Date of Incorporation</p>
            <div className="h-2 w-20 bg-gray-200 rounded-full" />
          </div>
          {/* Stamp circle */}
          <div className="flex justify-end mt-2">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-purple/30 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-purple/10 flex items-center justify-center">
                <Stamp size={11} className="text-purple/50" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-2.5 flex justify-between border-t border-gray-100">
          <span className="text-[6px] text-gray-400" style={{ fontFamily: 'system-ui' }}>OFFICIAL DOCUMENT</span>
          <span className="text-[6px] font-bold text-purple" style={{ fontFamily: 'system-ui' }}>Island Pro Consulting</span>
        </div>
      </div>

      {/* Chips */}
      <div className="absolute -bottom-1 -right-5 bg-white rounded-2xl shadow-xl border border-navy/8 px-3 py-2 flex items-center gap-2"
        style={{ transform: 'rotate(2deg)' }}>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
          <Clock size={14} className="text-white" />
        </div>
        <div>
          <p className="text-[9px] text-navy/40 font-bold leading-none mb-0.5">Processing</p>
          <p className="text-navy font-black text-sm leading-none">Fast tracked</p>
        </div>
      </div>

      <div className="absolute top-8 -left-5 rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
        style={{ background: '#F0B429', transform: 'rotate(-2deg)' }}>
        <Shield size={12} className="text-navy flex-shrink-0" />
        <p className="text-[10px] text-navy font-black leading-tight">100%<br />compliant</p>
      </div>
    </div>
  );
}

export default function BusinessRegistrationPage() {
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
            <span className="text-purple-light">Business Registration</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                <Building2 size={12} /> Business Registration
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Start right<br />
                <span className="purple-text">from day one.</span>
              </h1>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10">
                Registering a business in Mauritius involves multiple authorities, forms, and deadlines. We handle every step — from company registration to MRA, permits, and licences — so you can focus on what you do best.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact"
                  className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple">
                  Book a Free Call <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/23058137384?text=Hello%2C%20I%20need%20help%20registering%20my%20business%20in%20Mauritius."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/8">
                {[
                  { icon: Shield,     text: 'Fully compliant from the start' },
                  { icon: Clock,      text: 'Fast processing, no unnecessary delays' },
                  { icon: BadgeCheck, text: 'Mauritius & Rodrigues expertise' },
                  { icon: Globe,      text: 'All business structures covered' },
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

            <DocStackMockup />
          </div>
        </div>
      </section>

      {/* ── What We Handle ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              What We Handle
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              One point of contact.<br />
              <span className="purple-text">Every registration sorted.</span>
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto">
              We coordinate across all the relevant authorities so you do not have to chase multiple offices yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STEPS_WE_HANDLE.map((s, i) => {
              const Icon = s.icon;
              const isPurple = s.color === 'purple';
              return (
                <div key={i}
                  className="group bg-white rounded-3xl border-2 border-navy/6 hover:border-purple/20 hover:-translate-y-1 hover:shadow-purple transition-all duration-300 p-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${isPurple ? 'bg-purple/10 text-purple' : 'bg-gold/10 text-gold-dark'}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-black text-navy mb-3">{s.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Business Structures ── */}
      <section className="py-24 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              Business Structures
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              Not sure which structure<br />
              <span className="purple-text">is right for you?</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              We advise you on the most appropriate legal structure before any paperwork begins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STRUCTURES.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-purple/30 transition-all">
                <div className="w-8 h-8 rounded-xl purple-gradient flex items-center justify-center mb-4">
                  <span className="text-white font-black text-xs">{String.fromCharCode(65 + i)}</span>
                </div>
                <h4 className="text-white font-black text-sm mb-2">{s.title}</h4>
                <p className="text-white/45 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              Why Work With Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight mb-4">
              We have done this before.<br />
              <span className="purple-text">Many times.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_ITEMS.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-navy/8 p-6 hover:border-purple/20 hover:-translate-y-0.5 transition-all">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${i % 2 === 0 ? 'bg-purple/10' : 'bg-gold/10'}`}>
                    <Icon size={18} className={i % 2 === 0 ? 'text-purple' : 'text-gold-dark'} />
                  </div>
                  <h4 className="text-navy font-black text-sm mb-2">{w.title}</h4>
                  <p className="text-navy/60 text-xs leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 purple-gradient opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              How It Works
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              From conversation<br />
              <span className="purple-text">to official certificate.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-0.5 bg-white/8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PROCESS.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 rounded-2xl purple-gradient flex items-center justify-center mb-4 shadow-purple flex-shrink-0 z-10">
                    <span className="text-white font-black text-lg">{p.step}</span>
                  </div>
                  <h4 className="text-white font-black text-sm mb-2">{p.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
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
              { q: 'How long does registration take?', a: 'Company registration with the Registrar of Companies typically takes 1–3 business days for standard applications. MRA registration and sector permits may take additional time. We give you a realistic timeline from the start.' },
              { q: 'Do I need to be physically present?', a: 'For most steps, no. We can handle the majority of the process on your behalf. Some stages may require your signature or a personal visit, which we will notify you about in advance.' },
              { q: 'What documents do I need to provide?', a: 'Typically a valid National ID or passport, proof of address, and the proposed company name. For specific sectors or structures, additional documents may be required. We will give you a precise checklist after the consultation.' },
              { q: 'Can you register a business in Rodrigues?', a: 'Yes. We are familiar with both the Mauritius mainland and Rodrigues-specific processes, including the Rodrigues Regional Assembly requirements for certain business types.' },
              { q: 'What is the cost of your service?', a: 'Our fees depend on the registrations and permits required. Government fees are separate and paid directly by you. Contact us for a transparent, no-obligation quote.' },
              { q: 'Can you help with VAT registration?', a: 'Yes. VAT registration with the MRA is included in our service for businesses that meet or expect to meet the registration threshold.' },
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
                Free Consultation
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                Ready to launch<br />
                <span className="purple-text">your business legally?</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">
                A free call or visit to walk through your situation — what needs to be registered, in what order, and what it will cost. No commitment, no pressure.
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
              <a href="https://wa.me/23058137384?text=Hello%20Island%20Pro%20Consulting%2C%20I%20need%20help%20with%20business%20registration."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-6">Book your free consultation</h3>
              <ContactForm
                service="Business Registration"
                dropdownLabel="Business type"
                dropdownOptions={['Sole Trader / Self-employed','Partnership','Private Limited Company (Ltd)','Not sure yet — need advice']}
                messagePlaceholder="What type of business are you starting? In which sector?"
                submitLabel="Book My Free Call"
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
