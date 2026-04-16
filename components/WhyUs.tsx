import { Zap, Shield, HeartHandshake, Globe, Clock, Sparkles } from 'lucide-react';

const REASONS = [
  {
    icon:  Zap,
    title: 'Fast Turnaround',
    desc:  'We deliver on time. Most projects completed within 48-72 hours, with urgent options available.',
  },
  {
    icon:  Shield,
    title: 'Mauritius Expertise',
    desc:  'Deep knowledge of local regulations, MRA requirements, and the Mauritian business landscape.',
  },
  {
    icon:  HeartHandshake,
    title: 'Personal Service',
    desc:  'You work directly with the founder — no junior staff, no outsourcing. Dedicated attention on every project.',
  },
  {
    icon:  Globe,
    title: 'Bilingual',
    desc:  'Fully bilingual services in English and French to serve all Mauritian businesses.',
  },
  {
    icon:  Clock,
    title: 'End-to-End Support',
    desc:  'From concept to launch and beyond — we support your business at every stage of growth.',
  },
  {
    icon:  Sparkles,
    title: 'AI-Powered Tools',
    desc:  'We leverage the latest AI technology through ProCashbook and other digital tools to give you a competitive edge.',
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-bold px-4 py-2 rounded-full mb-4">
            Why Island Pro Consulting
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
            The difference is in<br />
            <span className="gold-text">the details.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            We are not a faceless agency. We are a partner invested in your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="group bg-white/5 border border-white/8 rounded-3xl p-6 hover:bg-white/8 hover:border-gold/30 transition-all duration-300">
                <div className="w-11 h-11 rounded-2xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon size={20} className="text-gold" />
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
