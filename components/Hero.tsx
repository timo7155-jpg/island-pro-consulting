import { ArrowRight, CheckCircle2 } from 'lucide-react';

/* ── Rodrigues Island SVG ─────────────────────────────────────────────── */
function RodriguesMap() {
  return (
    <div className="relative hidden lg:flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute w-[420px] h-[320px] rounded-full bg-purple/25 blur-[80px]" />
      <div className="absolute w-[280px] h-[200px] bg-gold/10 blur-[60px] translate-y-4" />

      <svg
        viewBox="0 0 520 310"
        className="relative z-10 w-[460px] xl:w-[520px] drop-shadow-2xl"
        aria-label="Rodrigues Island"
      >
        <defs>
          {/* Ocean gradient */}
          <radialGradient id="oceanGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1a0f3c" />
            <stop offset="100%" stopColor="#080415" />
          </radialGradient>
          {/* Island fill gradient */}
          <linearGradient id="islandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#6B21C8" />
            <stop offset="50%"  stopColor="#8B2FE8" />
            <stop offset="100%" stopColor="#5B1BA0" />
          </linearGradient>
          {/* Lagoon gradient */}
          <radialGradient id="lagoonGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1e1060" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0d0830" stopOpacity="0.2" />
          </radialGradient>
          {/* Island glow filter */}
          <filter id="islandGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Soft glow */}
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Ocean background */}
        <rect width="520" height="310" rx="20" fill="url(#oceanGrad)" />

        {/* Grid lines (coordinate feel) */}
        {[60,120,180,240,300,360,420,480].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="310" stroke="rgba(139,47,232,0.07)" strokeWidth="1" />
        ))}
        {[50,100,150,200,250].map(y => (
          <line key={y} x1="0" y1={y} x2="520" y2={y} stroke="rgba(139,47,232,0.07)" strokeWidth="1" />
        ))}

        {/* Outer reef / EEZ ring */}
        <ellipse cx="260" cy="155" rx="220" ry="120" fill="none"
          stroke="rgba(139,47,232,0.12)" strokeWidth="1" strokeDasharray="4 6" />
        <ellipse cx="260" cy="155" rx="195" ry="102" fill="none"
          stroke="rgba(139,47,232,0.08)" strokeWidth="1" strokeDasharray="2 8" />

        {/* Lagoon ring (inner reef) */}
        <ellipse cx="258" cy="158" rx="148" ry="72" fill="url(#lagoonGrad)"
          stroke="rgba(240,180,41,0.2)" strokeWidth="1.5" strokeDasharray="3 5" />

        {/* ── Island shape ── approximate silhouette of Rodrigues ── */}
        {/* Glow shadow under island */}
        <path
          d="M 128,158 C 122,138 130,115 148,103 C 162,93 182,87 205,84
             Q 228,81 252,80 L 275,79 Q 300,79 322,83
             C 345,88 368,98 382,113 C 396,128 400,145 397,160
             C 394,175 385,188 370,196 C 352,206 328,210 302,212
             Q 278,213 255,212 L 228,210 Q 200,208 178,202
             C 158,196 138,183 128,168 Z"
          fill="rgba(139,47,232,0.4)" filter="url(#softGlow)"
        />

        {/* Main island body */}
        <path
          d="M 128,158 C 122,138 130,115 148,103 C 162,93 182,87 205,84
             Q 228,81 252,80 L 275,79 Q 300,79 322,83
             C 345,88 368,98 382,113 C 396,128 400,145 397,160
             C 394,175 385,188 370,196 C 352,206 328,210 302,212
             Q 278,213 255,212 L 228,210 Q 200,208 178,202
             C 158,196 138,183 128,168 Z"
          fill="url(#islandGrad)"
          stroke="rgba(192,64,240,0.5)"
          strokeWidth="1.5"
          filter="url(#islandGlow)"
        />

        {/* Terrain texture — subtle ridges */}
        <path d="M 175,135 Q 210,120 255,118 Q 295,116 335,128 Q 355,136 365,150"
          fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeLinecap="round" />
        <path d="M 185,160 Q 220,148 265,146 Q 305,144 340,158"
          fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 195,178 Q 235,170 275,169 Q 310,169 340,178"
          fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeLinecap="round" />

        {/* Mt Limon (highest peak) marker */}
        <polygon points="263,108 257,122 269,122" fill="rgba(240,180,41,0.7)" />
        <text x="252" y="104" fontSize="7" fill="rgba(240,180,41,0.8)" fontFamily="system-ui" fontWeight="600" textAnchor="middle">Mt Limon</text>

        {/* ── Town dots ── */}
        {/* Port Mathurin — north coast, main town */}
        <circle cx="245" cy="89" r="5" fill="#F0B429" stroke="rgba(240,180,41,0.4)" strokeWidth="3" />
        <circle cx="245" cy="89" r="9" fill="none" stroke="rgba(240,180,41,0.25)" strokeWidth="1" className="animate-ping" style={{ animationDuration: '2s' }} />
        <text x="245" y="79" fontSize="8.5" fill="#F0B429" fontFamily="system-ui" fontWeight="700" textAnchor="middle">Port Mathurin</text>

        {/* La Ferme — southern area */}
        <circle cx="292" cy="200" r="3" fill="rgba(192,140,255,0.9)" stroke="rgba(192,140,255,0.3)" strokeWidth="2" />
        <text x="302" y="212" fontSize="7" fill="rgba(192,140,255,0.7)" fontFamily="system-ui" textAnchor="start">La Ferme</text>

        {/* Baie aux Huîtres — east */}
        <circle cx="370" cy="155" r="3" fill="rgba(192,140,255,0.9)" stroke="rgba(192,140,255,0.3)" strokeWidth="2" />
        <text x="382" y="158" fontSize="7" fill="rgba(192,140,255,0.7)" fontFamily="system-ui" textAnchor="start">Baie aux Huîtres</text>

        {/* Plaine Corail — west */}
        <circle cx="148" cy="168" r="3" fill="rgba(192,140,255,0.9)" stroke="rgba(192,140,255,0.3)" strokeWidth="2" />
        <text x="90" y="170" fontSize="7" fill="rgba(192,140,255,0.7)" fontFamily="system-ui" textAnchor="start">Plaine Corail</text>

        {/* ── Compass rose (bottom-right) ── */}
        <g transform="translate(455, 255)">
          <circle cx="0" cy="0" r="18" fill="rgba(139,47,232,0.15)" stroke="rgba(139,47,232,0.3)" strokeWidth="1" />
          {/* N */}
          <line x1="0" y1="-12" x2="0" y2="-4" stroke="rgba(240,180,41,0.9)" strokeWidth="1.5" strokeLinecap="round" />
          <polygon points="0,-14 -3,-8 3,-8" fill="#F0B429" />
          <text x="0" y="-16" fontSize="6" fill="#F0B429" fontFamily="system-ui" fontWeight="800" textAnchor="middle">N</text>
          {/* S */}
          <line x1="0" y1="4" x2="0" y2="12" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
          {/* E */}
          <line x1="4" y1="0" x2="12" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
          {/* W */}
          <line x1="-4" y1="0" x2="-12" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* Coordinates label */}
        <text x="455" y="290" fontSize="6.5" fill="rgba(255,255,255,0.2)" fontFamily="monospace" textAnchor="middle">19°42′S 63°25′E</text>

        {/* "Rodrigues Island" label bottom-left */}
        <text x="25" y="288" fontSize="9" fill="rgba(255,255,255,0.15)" fontFamily="system-ui" fontWeight="700" letterSpacing="2">RODRIGUES</text>
        <text x="25" y="300" fontSize="7" fill="rgba(255,255,255,0.1)" fontFamily="system-ui" letterSpacing="1">Republic of Mauritius</text>

        {/* Scale bar */}
        <line x1="25" y1="270" x2="75" y2="270" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="25" y1="265" x2="25" y2="275" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="75" y1="265" x2="75" y2="275" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <text x="50" y="262" fontSize="6" fill="rgba(255,255,255,0.2)" fontFamily="system-ui" textAnchor="middle">5 km</text>
      </svg>

      {/* Floating stat badges */}
      <div className="absolute top-6 -right-2 bg-navy-mid border border-purple/30 rounded-2xl px-4 py-3 shadow-purple">
        <div className="text-xl font-black gold-text">10+</div>
        <div className="text-white/50 text-xs">Years Expertise</div>
      </div>
      <div className="absolute bottom-6 -left-2 bg-navy-mid border border-gold/30 rounded-2xl px-4 py-3 shadow-gold">
        <div className="text-xl font-black gold-text">120+</div>
        <div className="text-white/50 text-xs">Businesses Served</div>
      </div>
    </div>
  );
}

export default function Hero() {
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light text-xs font-bold px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-light animate-pulse" />
              Mauritius-based Business Consulting
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Grow your business<br />
              <span className="purple-text">the smart way.</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-8">
              From a professional website to a winning business plan — Island Pro Consulting delivers expert services that help Mauritian SMEs compete, grow, and succeed.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              {[
                'Rs 500M+ Managed',
                '10+ Years Experience',
                'Mauritius & Indian Ocean',
              ].map(b => (
                <div key={b} className="flex items-center gap-1.5 text-white/50 text-sm">
                  <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                  {b}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#services"
                className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-purple text-sm">
                Explore Services <ArrowRight size={16} />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-7 py-4 rounded-xl hover:border-gold/60 hover:text-gold transition-all text-sm">
                Talk to Us
              </a>
            </div>

            {/* Rodrigues local badge */}
            <a href="/rodrigues"
              className="mt-6 inline-flex items-center gap-2 bg-gold/10 border border-gold/25 hover:border-gold/50 text-gold text-xs font-bold px-4 py-2.5 rounded-full transition-all hover:bg-gold/15">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Based in Rodrigues — in-person meetings available
            </a>
          </div>

          {/* Right — Rodrigues island map */}
          <RodriguesMap />
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
