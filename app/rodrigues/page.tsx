import { Metadata } from 'next';
import {
  ArrowRight, MapPin, ChevronRight, MessageCircle,
  Phone, Mail, Building2, FileText, Globe,
  UserCheck, Megaphone, CalendarCheck,
  CheckCircle2, Users, Landmark,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Business Consulting in Rodrigues | Island Pro Consulting',
  description: 'Based in Terre Rouge, Rodrigues — we offer in-person business consulting for Rodrigues entrepreneurs. Websites, business plans, CV writing, company registration and more.',
};

const RODRIGUES_SERVICES = [
  {
    icon: Globe,
    color: 'purple',
    title: 'Website Development',
    desc: 'Professional websites for accommodation, restaurants, tour operators, and local businesses. Your Rodrigues business, visible worldwide.',
    href: '/services/website-development',
  },
  {
    icon: FileText,
    color: 'gold',
    title: 'Commercial Land Lease Business Plan',
    desc: 'We have direct experience with Rodrigues Regional Assembly land lease applications. We know exactly what reviewers need to see.',
    href: '/services/business-plan',
    badge: 'Rodrigues Specialist',
  },
  {
    icon: Building2,
    color: 'purple',
    title: 'Business Registration',
    desc: 'Company registration, MRA, and permit assistance — including Rodrigues-specific processes and the Regional Assembly requirements.',
    href: '/services/business-registration',
  },
  {
    icon: UserCheck,
    color: 'gold',
    title: 'Professional CV & Cover Letter',
    desc: 'Whether you are applying locally or looking for opportunities beyond Rodrigues — we help you present yourself professionally.',
    href: '/services/cv-cover-letter',
  },
  {
    icon: Megaphone,
    color: 'purple',
    title: 'Digital Marketing',
    desc: 'Put your Rodrigues business on the map — social media, Google, and content that reaches tourists and local customers alike.',
    href: '/services/digital-marketing',
  },
  {
    icon: Landmark,
    color: 'gold',
    title: 'Permit Application Business Plan',
    desc: 'Government permit applications require a credible, structured plan. We write plans that speak the language of Rodrigues authorities.',
    href: '/services/business-plan',
  },
];

const WHY_LOCAL = [
  { icon: MapPin,        title: 'We are here',              desc: 'Based in Terre Rouge, Rodrigues. Not a Mauritius firm operating remotely — we are on the island with you.' },
  { icon: CalendarCheck, title: 'In-person meetings',        desc: 'We can meet at your business, at your home, or at a location that suits you. No video calls required.' },
  { icon: Users,         title: 'We know the local context', desc: 'Rodrigues has its own regulations, its own pace, and its own opportunities. We operate within that reality every day.' },
  { icon: CheckCircle2,  title: 'RRA experience',            desc: 'We are familiar with the Rodrigues Regional Assembly processes — from land lease to permits and business licences.' },
];

export default function RodriguesPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-cream pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">
          <nav className="flex items-center gap-2 text-white/30 text-xs mb-12">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <ChevronRight size={12} />
            <span className="text-purple-light">Rodrigues</span>
          </nav>

          <div className="max-w-3xl">
            {/* Location pill */}
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold font-bold text-xs px-4 py-2 rounded-full mb-6">
              <MapPin size={12} /> Terre Rouge, Rodrigues — We are local
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Professional consulting,<br />
              <span className="purple-text">right here in Rodrigues.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl">
              Island Pro Consulting is based in Terre Rouge, Rodrigues. We serve local entrepreneurs with the same professional services available in Mauritius — and we can meet you in person.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a href="#contact"
                className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple">
                Book a Meeting <ArrowRight size={16} />
              </a>
              <a href="https://wa.me/23058137384?text=Bonjour%2C%20je%20suis%20%C3%A0%20Rodrigues%20et%20je%20souhaite%20prendre%20rendez-vous."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

            {/* Address card */}
            <div className="inline-flex items-start gap-4 bg-white/8 border border-white/12 rounded-2xl px-6 py-4">
              <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-black text-sm">Island Pro Consulting</p>
                <p className="text-white/50 text-sm">Terre Rouge, Rodrigues, Mauritius</p>
                <p className="text-white/40 text-xs mt-1">In-person meetings available — contact us to arrange</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Local Matters ── */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              Local Advantage
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              Not a Mauritius firm.<br />
              <span className="purple-text">A Rodrigues firm.</span>
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto">
              We live and work on the island. We understand the pace, the people, and the processes that only locals know.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_LOCAL.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={i}
                  className="bg-white rounded-3xl border-2 border-navy/6 hover:border-purple/20 hover:-translate-y-1 hover:shadow-purple transition-all duration-300 p-6 text-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 mx-auto ${i % 2 === 0 ? 'bg-purple/10' : 'bg-gold/10'}`}>
                    <Icon size={22} className={i % 2 === 0 ? 'text-purple' : 'text-gold-dark'} />
                  </div>
                  <h3 className="text-navy font-black text-sm mb-2">{w.title}</h3>
                  <p className="text-navy/55 text-xs leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services for Rodrigues ── */}
      <section className="py-24 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              Our Services in Rodrigues
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Everything a Rodrigues<br />
              <span className="purple-text">business needs.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RODRIGUES_SERVICES.map((s, i) => {
              const Icon = s.icon;
              const isPurple = s.color === 'purple';
              return (
                <a key={i} href={s.href}
                  className="group bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-purple/30 transition-all relative">
                  {s.badge && (
                    <span className="absolute top-4 right-4 text-[9px] font-black bg-gold/20 text-gold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {s.badge}
                    </span>
                  )}
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${isPurple ? 'bg-purple/15' : 'bg-gold/10'}`}>
                    <Icon size={20} className={isPurple ? 'text-purple-light' : 'text-gold'} />
                  </div>
                  <h4 className="text-white font-black mb-2 text-sm">{s.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center gap-1 text-purple-light text-xs font-bold group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={12} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Meet Us ── */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <MapPin size={28} className="text-navy mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-black text-navy mb-3">
            Come meet us in person
          </h2>
          <p className="text-navy/70 text-base leading-relaxed mb-6 max-w-xl mx-auto">
            We are available for on-site meetings across Rodrigues. Whether you are in Port Mathurin, La Ferme, or anywhere on the island — we come to you, or you come to us in Terre Rouge.
          </p>
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-navy text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
            <CalendarCheck size={16} /> Book an In-Person Meeting
          </a>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                Book a Meeting
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                Let&apos;s meet and talk<br />
                <span className="purple-text">about your project.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-8">
                A free, no-pressure meeting — at your place, at ours in Terre Rouge, or wherever works for you. We discuss your project and map out the best way forward.
              </p>

              {/* Address block */}
              <div className="bg-white/8 border border-white/12 rounded-2xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">Island Pro Consulting</p>
                    <p className="text-white/50 text-sm">Terre Rouge</p>
                    <p className="text-white/50 text-sm">Rodrigues, Republic of Mauritius</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
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

              <a href="https://wa.me/23058137384?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20%C3%A0%20Rodrigues."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> WhatsApp pour un rendez-vous
              </a>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-2">Book a free meeting</h3>
              <p className="text-navy/50 text-xs mb-6">In-person in Rodrigues, by phone, or on WhatsApp — your choice.</p>
              <ContactForm
                service="Rodrigues Meeting Request"
                dropdownLabel="Service you need"
                dropdownOptions={['Website Development','Commercial Land Lease Business Plan','Business Registration','CV & Cover Letter','Digital Marketing','Permit Application Business Plan','Not sure yet — I need advice']}
                messagePlaceholder="Tell us about your project and preferred meeting location or time..."
                submitLabel="Book My Free Meeting"
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
