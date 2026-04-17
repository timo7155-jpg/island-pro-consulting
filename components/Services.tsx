import {
  Globe, BarChart3, FileText, UserCheck,
  Megaphone, Building2, ArrowRight,
  Mail, Share2, Landmark,
} from 'lucide-react';

const SERVICES = [
  {
    icon:     Globe,
    title:    'Website Development',
    tagline:  'Your digital presence, perfected.',
    desc:     'Modern, fast, and mobile-first websites that represent your brand professionally. From landing pages to full e-commerce solutions.',
    features: ['Custom design', 'Mobile responsive', 'SEO optimised', 'Fast delivery'],
    accent:   'purple',
    badge:    'Most Popular',
    href:     '/services/website-development',
  },
  {
    icon:     BarChart3,
    title:    'Finance Management',
    tagline:  'Smart cashbook for Mauritian SMEs.',
    desc:     'ProCashbook — track income & expenses, generate reports, and get AI-powered insights. Your finances, finally under control.',
    features: ['Income & expense tracking', 'AI insights', 'Financial reports', '7-day free trial'],
    accent:   'gold',
    badge:    'SaaS Product',
    href:     'https://procashbook.mu',
    external: true,
    underConstruction: true,
  },
  {
    icon:     FileText,
    title:    'Pro Business Plan',
    tagline:  'Investor-ready. Bank-approved.',
    desc:     'Professionally written business plans tailored to Mauritius standards — for funding applications, bank loans, or strategic clarity.',
    features: ['Executive summary', 'Financial projections', 'Market analysis', 'Funding-ready format'],
    accent:   'purple',
    href:     '/services/business-plan',
  },
  {
    icon:     UserCheck,
    title:    'Professional CV & Cover Letter',
    tagline:  'Stand out from the crowd.',
    desc:     'ATS-friendly CVs and compelling cover letters crafted by professionals. Land more interviews with documents that make an impression.',
    features: ['ATS-optimised', 'Cover letter included', '48h turnaround', 'Unlimited revisions'],
    accent:   'gold',
    href:     '/services/cv-cover-letter',
  },
  {
    icon:     Megaphone,
    title:    'Digital Marketing',
    tagline:  'Reach more, sell more.',
    desc:     'Social media strategy, SEO, Google Ads, and content creation — everything your business needs to grow its online presence.',
    features: ['Social media management', 'SEO & Google Ads', 'Content creation', 'Monthly reporting'],
    accent:   'purple',
    href:     '/services/digital-marketing',
  },
  {
    icon:     Building2,
    title:    'Business Registration',
    tagline:  'Start right from day one.',
    desc:     'End-to-end assistance for company registration, MRA business registration, permits, and all the paperwork you need to launch legally.',
    features: ['Company registration', 'MRA registration', 'Permit assistance', 'Fast processing'],
    accent:   'gold',
    href:     '/services/business-registration',
  },
  {
    icon:     Mail,
    title:    'Email Marketing Setup',
    tagline:  'Turn your list into revenue.',
    desc:     'We set up Brevo or Mailchimp, design branded templates, build automated sequences, and manage your campaigns — so every email drives bookings.',
    features: ['Brevo / Mailchimp setup', 'Automated sequences', 'Bilingual FR/EN', 'Monthly reporting'],
    accent:   'purple',
    href:     '/services/email-marketing',
  },
  {
    icon:     Share2,
    title:    'Social Media Management',
    tagline:  'Consistent presence. Real results.',
    desc:     'Monthly content calendar, post scheduling, community management, and analytics for Facebook, Instagram, and TikTok — fully handled.',
    features: ['Monthly content calendar', 'FB & Instagram & TikTok', 'Community management', 'Monthly analytics'],
    accent:   'gold',
    href:     '/services/social-media-management',
  },
  {
    icon:     Landmark,
    title:    'Grants & Funding Applications',
    tagline:  'Free money. We find it for you.',
    desc:     'DBM loans, SMEDA grants, SME Mauritius matching funds, EDB incentives — we identify what you qualify for and write the full application.',
    features: ['Free eligibility check', 'DBM & SMEDA specialists', 'End-to-end application', 'Rodrigues grants included'],
    accent:   'purple',
    href:     '/services/grants-funding',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
            Everything your business needs
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            One consulting partner. Ten professional services. All built for Mauritian SMEs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const isPurple = s.accent === 'purple';
            return (
              <div key={i}
                className={`group relative bg-white rounded-3xl border-2 overflow-hidden flex flex-col transition-all duration-300 ${
                  s.underConstruction
                    ? 'border-navy/6 opacity-70'
                    : 'border-navy/6 hover:border-purple/30 hover:-translate-y-1 hover:shadow-purple'
                }`}>

                {/* Hover gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isPurple ? 'bg-gradient-to-br from-purple/5 to-purple-light/5' : 'bg-gradient-to-br from-gold/5 to-gold-light/5'
                }`} />

                <div className="relative p-6 lg:p-7 flex flex-col flex-1">
                  {/* Badge */}
                  {s.badge && (
                    <div className="absolute top-5 right-5">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide ${
                        isPurple ? 'bg-purple/10 text-purple' : 'bg-gold/15 text-gold-dark'
                      }`}>
                        {s.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                    isPurple ? 'bg-purple/10 text-purple group-hover:bg-purple/20' : 'bg-gold/10 text-gold-dark group-hover:bg-gold/20'
                  }`}>
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-black text-navy mb-1">{s.title}</h3>
                  <p className={`text-xs font-bold mb-3 ${isPurple ? 'text-purple' : 'text-gold-dark'}`}>{s.tagline}</p>
                  <p className="text-navy/60 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>

                  <ul className="space-y-1.5 mb-6">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-navy/60">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isPurple ? 'bg-purple' : 'bg-gold'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {s.underConstruction ? (
                    <div className="mt-auto flex items-center justify-between bg-navy/10 text-navy/30 text-sm font-bold px-5 py-3 rounded-xl cursor-not-allowed select-none">
                      <span>🚧 Under Construction</span>
                      <ArrowRight size={15} />
                    </div>
                  ) : (
                    <a href={s.href}
                      target={s.external ? '_blank' : undefined}
                      rel={s.external ? 'noopener noreferrer' : undefined}
                      className={`mt-auto flex items-center justify-between text-white text-sm font-bold px-5 py-3 rounded-xl transition-all group/btn ${
                        isPurple ? 'purple-gradient hover:opacity-90' : 'gold-gradient text-navy'
                      }`}>
                      <span>{s.external ? 'Visit ProCashbook' : 'Get Started'}</span>
                      <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}

          {/* Coming soon */}
          <div className="bg-navy/3 border-2 border-dashed border-navy/15 rounded-3xl p-6 lg:p-7 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-purple/20 flex items-center justify-center mb-4">
              <span className="text-purple/40 text-xl font-black">+</span>
            </div>
            <p className="text-navy/40 font-bold text-sm mb-1">More Coming Soon</p>
            <p className="text-navy/30 text-xs">Bookkeeping, tax filing, and more services launching soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
