'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services',  href: '#services'  },
  { label: 'About',     href: '#about'     },
  { label: 'Why Us',    href: '#whyus'     },
  { label: 'Contact',   href: '#contact'   },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
              <span className="text-navy font-black text-sm">IPC</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-black text-sm leading-tight">Island Pro</div>
              <div className="text-gold text-xs font-semibold leading-tight">Consulting</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href}
                className="text-white/70 hover:text-gold text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+23058137384"
              className="flex items-center gap-2 text-white/60 hover:text-gold text-sm font-medium transition-colors">
              <Phone size={14} /> +230 5813 7384
            </a>
            <a href="#contact"
              className="bg-gold text-navy font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-gold">
              Get a Quote
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(o => !o)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-gold font-medium py-2 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="block bg-gold text-navy font-bold text-sm px-5 py-3 rounded-xl text-center mt-2">
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
