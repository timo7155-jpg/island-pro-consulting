import {
  Globe, BarChart3, FileText, UserCheck,
  Megaphone, Calculator, Building2, ArrowRight
} from 'lucide-react';

const SERVICES = [
  {
    icon:    Globe,
    title:   'Website Development',
    tagline: 'Your digital presence, perfected.',
    desc:    'Modern, fast, and mobile-first websites that represent your brand professionally. From landing pages to full e-commerce solutions.',
    features: ['Custom design', 'Mobile responsive', 'SEO optimised', 'Fast delivery'],
    color:   'from-blue-500/10 to-cyan-500/10',
    border:  'hover:border-blue-400/40',
    badge:   'Most Popular',
    href:    '#contact',
  },
  {
    icon:    BarChart3,
    title:   'Finance Management',
    tagline: 'Smart cashbook for Mauritian SMEs.',
    desc:    'ProCashbook — track income & expenses, generate reports, and get AI-powered insights. Your finances, finally under control.',
    features: ['Income & expense tracking', 'AI insights', 'Financial reports', '7-day free trial'],
    color:   'from-emerald-500/10 to-teal-500/10',
    border:  'hover:border-emerald-400/40',
    badge:   'SaaS Product',
    href:    'https://procashbook.mu',
    external: true,
  },
  {
    icon:    FileText,
    title:   'Pro Business Plan',
    tagline: 'Investor-ready. Bank-approved.',
    desc:    'Professionally written business plans tailored to Mauritius standards — for funding applications, bank loans, or strategic clarity.',
    features: ['Executive summary', 'Financial projections', 'Market analysis', 'Funding-ready format'],
    color:   'from-purple-500/10 to-violet-500/10',
    border:  'hover:border-purple-400/40',
    href:    '#contact',
  },
  {
    icon:    UserCheck,
    title:   'Professional CV & Cover Letter',
    tagline: 'Stand out from the crowd.',
    desc:    'ATS-friendly CVs and compelling cover letters crafted by professionals. Land more interviews with documents that make an impression.',
    features: ['ATS-optimised', 'Cover letter included', '48h turnaround', 'Unlimited revisions'],
    color:   'from-orange-500/10 to-amber-500/10',
    border:  'hover:border-orange-400/40',
    href:    '#contact',
  },
  {
    icon:    Megaphone,
    title:   'Digital Marketing',
    tagline: 'Reach more, sell more.',
    desc:    'Social media strategy, SEO, Google Ads, and content creation — everything your business needs to grow its online presence.',
    features: ['Social media management', 'SEO & Google Ads', 'Content creation', 'Monthly reporting'],
    color:   'from-pink-500/10 to-rose-500/10',
    border:  'hover:border-pink-400/40',
    href:    '#contact',
  },
  {
    icon:    Calculator,
    title:   'Tax & Compliance Advisory',
    tagline: 'Stay compliant, stress-free.',
    desc:    'Expert guidance on MRA filings, VAT registration, corporate tax, and regulatory compliance for Mauritian businesses.',
    features: ['MRA filings', 'VAT registration', 'Corporate tax', 'Compliance audits'],
    color:   'from-yellow-500/10 to-gold/10',
    border:  'hover:border-yellow-400/40',
    href:    '#contact',
  },
  {
    icon:    Building2,
    title:   'Business Registration',
    tagline: 'Start right from day one.',
    desc:    'End-to-end assistance for company registration, MRA business registration, permits, and all the paperwork you need to launch legally.',
    features: ['Company registration', 'MRA registration', 'Permit assistance', 'Fast processing'],
    color:   'from-slate-500/10 to-gray-500/10',
    border:  'hover:border-slate-400/40',
    href:    '#contact',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold-dark text-xs font-bold px-4 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
            Everything your business needs
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            One consulting partner. Seven professional services. All built for Mauritian SMEs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-3xl border-2 border-navy/8 ${s.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-card overflow-hidden flex flex-col`}>
                {/* Top gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative p-6 lg:p-7 flex flex-col flex-1">
                  {/* Badge */}
                  {s.badge && (
                    <div className="absolute top-5 right-5">
                      <span className="bg-gold/15 text-gold-dark text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {s.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-navy/8 transition-colors">
                    <Icon size={22} className="text-navy" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-navy mb-1">{s.title}</h3>
                  <p className="text-gold-dark text-xs font-bold mb-3">{s.tagline}</p>
                  <p className="text-navy/60 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-navy/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={s.href}
                    target={s.external ? '_blank' : undefined}
                    rel={s.external ? 'noopener noreferrer' : undefined}
                    className="mt-auto flex items-center justify-between bg-navy text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-navy-mid transition-all group/btn">
                    <span>{s.external ? 'Visit ProCashbook' : 'Get Started'}</span>
                    <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Coming soon card */}
          <div className="bg-navy/3 border-2 border-dashed border-navy/15 rounded-3xl p-6 lg:p-7 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-navy/20 flex items-center justify-center mb-4">
              <span className="text-navy/30 text-xl font-black">+</span>
            </div>
            <p className="text-navy/40 font-bold text-sm mb-1">More Coming Soon</p>
            <p className="text-navy/30 text-xs">Training, HR consulting, and more services launching soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
