import Image from 'next/image';
import { Award, Users, MapPin, Mail } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Award,  text: '10+ years in finance & business consulting'  },
  { icon: Users,  text: 'Served 120+ businesses — guesthouses to retailers' },
  { icon: MapPin, text: 'Based in Mauritius, serving the Indian Ocean' },
  { icon: Mail,   text: 'contact@islandproconsulting.mu'               },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — logo / founder visual */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Spinning ring */}
              <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-purple/25 animate-spin" style={{ animationDuration: '20s' }} />
              {/* Photo */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple/30 shadow-purple">
                <Image src="/logo.jpg" alt="Island Pro Consulting" fill className="object-cover" />
              </div>
              {/* Gold badge */}
              <div className="absolute -bottom-3 -right-3 gold-gradient w-16 h-16 rounded-full flex items-center justify-center shadow-gold">
                <span className="text-navy font-black text-xs text-center leading-tight">10+<br/>YRS</span>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-6">
              About the Founder
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-5">
              Built by a consultant<br />
              <span className="purple-text">who&apos;s been there.</span>
            </h2>
            <p className="text-navy/60 leading-relaxed mb-5">
              Island Pro Consulting was founded by <strong className="text-navy">Timothee Lisette</strong>, a seasoned finance and business consultant based in Mauritius with over a decade of experience helping SMEs grow, comply, and thrive.
            </p>
            <p className="text-navy/60 leading-relaxed mb-8">
              Having managed over Rs 500M in client portfolios and worked across industries from retail to hospitality, Timothee brings real-world expertise to every engagement — combined with cutting-edge digital tools like ProCashbook.
            </p>

            <div className="space-y-3 mb-8">
              {HIGHLIGHTS.map(h => {
                const Icon = h.icon;
                return (
                  <div key={h.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold-dark" />
                    </div>
                    <span className="text-sm text-navy/70">{h.text}</span>
                  </div>
                );
              })}
            </div>

            <a href="#contact"
              className="inline-flex items-center gap-2 purple-gradient text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all shadow-purple">
              Work with Timothee
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
