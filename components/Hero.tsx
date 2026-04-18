'use client';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

/* ── Founder photo ──────────────────────────────────────────────────────── */
function FounderPhoto() {
  return (
    <div className="relative flex items-center justify-center h-[260px] lg:h-auto">
      {/* Ambient glows */}
      <div className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full bg-purple/20 blur-[80px]" />
      <div className="absolute w-[180px] h-[180px] lg:w-[260px] lg:h-[260px] rounded-full bg-gold/8 blur-[60px]" />

      {/* Rotating dashed ring */}
      <div className="absolute w-[220px] h-[220px] lg:w-[340px] lg:h-[340px] rounded-full border border-dashed border-purple/25"
        style={{ animation: 'spin 18s linear infinite' }} />
      <div className="absolute w-[190px] h-[190px] lg:w-[300px] lg:h-[300px] rounded-full border border-dashed border-gold/15"
        style={{ animation: 'spin 28s linear infinite reverse' }} />

      {/* Solid ring frame */}
      <div className="absolute w-[168px] h-[168px] lg:w-[268px] lg:h-[268px] rounded-full"
        style={{ background: 'conic-gradient(from 0deg, #8B2FE8, #F0B429, #C040F0, #8B2FE8)', padding: '3px' }}>
        <div className="w-full h-full rounded-full" style={{ background: '#09060F' }} />
      </div>

      {/* Photo */}
      <div className="relative w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-transparent z-10"
        style={{ boxShadow: '0 0 40px rgba(139,47,232,0.4), 0 0 80px rgba(139,47,232,0.15)' }}>
        <div className="absolute inset-0 flex items-end justify-center"
          style={{ background: 'linear-gradient(160deg, #1a0f35 0%, #2d1060 50%, #1a0830 100%)' }}>
          <svg viewBox="0 0 256 280" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="128" cy="95" rx="46" ry="50" fill="rgba(139,47,232,0.35)" />
            <ellipse cx="128" cy="95" rx="36" ry="40" fill="rgba(139,47,232,0.5)" />
            <path d="M40 260 C40 180 216 180 216 260" fill="rgba(139,47,232,0.4)" />
            <path d="M55 260 C55 192 201 192 201 260" fill="rgba(139,47,232,0.55)" />
          </svg>
        </div>
        <Image
          src="/founder.jpg"
          alt="Founder — Island Pro Consulting"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Founder label */}
      <div className="absolute bottom-2 lg:bottom-8 z-20 bg-navy-mid border border-purple/30 rounded-full px-3 lg:px-5 py-1.5 lg:py-2 backdrop-blur-sm"
        style={{ boxShadow: '0 4px 24px rgba(139,47,232,0.2)' }}>
        <p className="text-white font-black text-xs lg:text-sm text-center leading-tight">Founder</p>
        <p className="text-purple-light text-[9px] lg:text-[10px] font-bold text-center tracking-wide">Island Pro Consulting</p>
      </div>

      {/* Floating stat badges — desktop only */}
      <div className="hidden lg:block absolute top-4 -right-4 z-20 bg-navy-mid border border-purple/30 rounded-2xl px-4 py-3"
        style={{ boxShadow: '0 4px 24px rgba(139,47,232,0.25)' }}>
        <div className="text-xl font-black gold-text">10+</div>
        <div className="text-white/50 text-xs">Years Expertise</div>
      </div>
      <div className="hidden lg:block absolute top-4 -left-4 z-20 bg-navy-mid border border-gold/30 rounded-2xl px-4 py-3"
        style={{ boxShadow: '0 4px 24px rgba(240,180,41,0.15)' }}>
        <div className="text-xl font-black gold-text">120+</div>
        <div className="text-white/50 text-xs">Businesses Served</div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const txt = translations[lang].hero;

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-purple/20 blur-[140px] -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-purple-light/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#8B2FE8 1px, transparent 1px), linear-gradient(90deg, #8B2FE8 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — text (below photo on mobile, left on desktop) */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light text-xs font-bold px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-light animate-pulse" />
              {txt.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              {txt.h1Line1}<br />
              <span className="purple-text">{txt.h1Line2}</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-8">
              {txt.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              {[txt.stat1, txt.stat2, txt.stat3, txt.stat4].map(b => (
                <div key={b} className="flex items-center gap-1.5 text-white/50 text-sm">
                  <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                  {b}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/#services"
                className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-purple text-sm">
                {txt.cta1} <ArrowRight size={16} />
              </a>
              <a href="/#contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-7 py-4 rounded-xl hover:border-gold/60 hover:text-gold transition-all text-sm">
                {txt.cta2}
              </a>
            </div>

            {/* Rodrigues local badge */}
            <a href="/rodrigues"
              className="mt-6 inline-flex items-center gap-2 bg-gold/10 border border-gold/25 hover:border-gold/50 text-gold text-xs font-bold px-4 py-2.5 rounded-full transition-all hover:bg-gold/15">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              {txt.rodriguesBadge}
            </a>
          </div>

          {/* Right — Founder photo (top on mobile, right on desktop) */}
          <div className="order-1 lg:order-2">
            <FounderPhoto />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
