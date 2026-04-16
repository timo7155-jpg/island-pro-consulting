import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const SERVICES_COL = [
  'Website Development',
  'Finance Management',
  'Business Plan Writing',
  'CV & Cover Letter',
  'Digital Marketing',
  'Business Registration',
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8" style={{ background: 'linear-gradient(160deg, #100720 0%, #0A0415 60%, #06030F 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                <Image src="/logo.jpg" alt="IPC Logo" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-white font-black leading-tight">Island Pro Consulting</div>
                <div className="text-gold text-xs font-semibold leading-tight">Mauritius</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Professional business consulting services for Mauritian SMEs. From websites to financial management — we help you grow smarter.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: Phone,  text: '+230 5813 7384',                 href: 'https://wa.me/23058137384' },
                { icon: Mail,   text: 'contact@islandproconsulting.mu', href: 'mailto:contact@islandproconsulting.mu' },
                { icon: MapPin, text: 'Mauritius, Indian Ocean',         href: '#' },
              ].map(c => {
                const Icon = c.icon;
                return (
                  <a key={c.text} href={c.href}
                    className="flex items-center gap-2.5 text-white/40 hover:text-gold text-sm transition-colors">
                    <Icon size={13} className="flex-shrink-0" />
                    {c.text}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_COL.map(s => (
                <li key={s}>
                  <a href="#services" className="text-white/40 hover:text-purple-light text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Legal */}
          <div>
            <h4 className="text-white font-black text-sm mb-4">Products</h4>
            <ul className="space-y-2.5 mb-8">
              <li>
                <a href="https://procashbook.mu" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/40 hover:text-gold text-sm transition-colors">
                  ProCashbook <ExternalLink size={11} />
                </a>
              </li>
            </ul>
            <h4 className="text-white font-black text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Terms of Service'].map(l => (
                <li key={l}>
                  <a href="#" className="text-white/40 hover:text-purple-light text-sm transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">&copy; 2026 Island Pro Consulting. All rights reserved.</p>
          <p className="text-white/20 text-xs">Made with care in Mauritius 🇲🇺</p>
        </div>
      </div>
    </footer>
  );
}
