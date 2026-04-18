'use client';
import {
  Globe, BarChart3, FileText, UserCheck,
  Megaphone, Building2, ArrowRight,
  Mail, Share2, Landmark,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const SERVICE_META = [
  { icon: Globe,     accent: 'purple', badge: 'Most Popular', href: '/services/website-development' },
  { icon: BarChart3, accent: 'gold',   badge: 'SaaS Product', href: 'https://procashbook.mu', external: true, underConstruction: true },
  { icon: FileText,  accent: 'purple', badge: undefined,      href: '/services/business-plan' },
  { icon: UserCheck, accent: 'gold',   badge: undefined,      href: '/services/cv-cover-letter' },
  { icon: Megaphone, accent: 'purple', badge: undefined,      href: '/services/digital-marketing' },
  { icon: Building2, accent: 'gold',   badge: undefined,      href: '/services/business-registration' },
  { icon: Mail,      accent: 'purple', badge: undefined,      href: '/services/email-marketing' },
  { icon: Share2,    accent: 'gold',   badge: undefined,      href: '/services/social-media-management' },
  { icon: Landmark,  accent: 'purple', badge: undefined,      href: '/services/grants-funding' },
] as const;

export default function Services() {
  const { lang } = useLanguage();
  const txt = translations[lang].services;

  const SERVICES = SERVICE_META.map((meta, i) => ({ ...meta, ...txt.items[i] }));

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
            {txt.badge}
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
            {txt.h2}
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            {txt.sub}
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
                      <span>🚧 {txt.underConstruction}</span>
                      <ArrowRight size={15} />
                    </div>
                  ) : (
                    <a href={s.href}
                      target={s.external ? '_blank' : undefined}
                      rel={s.external ? 'noopener noreferrer' : undefined}
                      className={`mt-auto flex items-center justify-between text-white text-sm font-bold px-5 py-3 rounded-xl transition-all group/btn ${
                        isPurple ? 'purple-gradient hover:opacity-90' : 'gold-gradient text-navy'
                      }`}>
                      <span>{s.external ? txt.visitProCashbook : txt.getStarted}</span>
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
            <p className="text-navy/40 font-bold text-sm mb-1">{txt.moreComingSoon}</p>
            <p className="text-navy/30 text-xs">{txt.moreComingSoonDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
