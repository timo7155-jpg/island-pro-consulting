import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gold/8 blur-[120px] -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/6 blur-[100px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-bold px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Mauritius-based Business Consulting
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Grow your business<br />
            <span className="gold-text">the smart way.</span>
          </h1>

          <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
            From a professional website to a winning business plan — Island Pro Consulting delivers expert services that help Mauritian SMEs compete, grow, and succeed.
          </p>

          {/* Trust badges */}
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

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#services"
              className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-7 py-4 rounded-xl hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-gold text-sm">
              Explore Services <ArrowRight size={16} />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-7 py-4 rounded-xl hover:border-gold/50 hover:text-gold transition-all text-sm">
              Talk to Us
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 mt-12">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="text-white/40 text-sm">Trusted by SMEs across Mauritius &amp; Rodrigues</p>
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
