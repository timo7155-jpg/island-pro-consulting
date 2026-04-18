'use client';
import { Zap, Shield, HeartHandshake, Globe, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const ICONS = [Zap, Shield, HeartHandshake, Globe, Clock, Sparkles];

export default function WhyUs() {
  const { lang } = useLanguage();
  const txt = translations[lang].whyUs;

  return (
    <section id="whyus" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
            {txt.badge}
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {txt.h2Line1}<br />
            <span className="purple-text">{txt.h2Line2}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {txt.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {txt.reasons.map((r, i) => {
            const Icon = ICONS[i];
            const useGold = i % 2 !== 0;
            return (
              <div key={i}
                className="group bg-white/5 border border-white/8 rounded-3xl p-6 hover:bg-white/8 hover:border-purple/40 transition-all duration-300">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                  useGold ? 'bg-gold/10 group-hover:bg-gold/20' : 'bg-purple/15 group-hover:bg-purple/25'
                }`}>
                  <Icon size={20} className={useGold ? 'text-gold' : 'text-purple-light'} />
                </div>
                <h3 className="text-white font-black mb-2">{r.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
