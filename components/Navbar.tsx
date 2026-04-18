'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const txt = translations[lang].nav;

  const NAV_LINKS = [
    { label: txt.services,  href: '/#services'  },
    { label: txt.rodrigues, href: '/rodrigues',  isRodrigue: true },
    { label: txt.about,     href: '/#about'     },
    { label: txt.whyUs,     href: '/#whyus'     },
    { label: txt.contact,   href: '/#contact'   },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-navy/70 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0">
              <Image src="/logo.jpg" alt="IPC Logo" width={36} height={36} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-white font-black text-sm leading-tight">Island Pro</div>
              <div className="text-gold text-xs font-semibold leading-tight">Consulting</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href}
                className={`text-sm font-medium transition-colors ${
                  l.isRodrigue
                    ? 'text-gold hover:text-gold-light font-bold flex items-center gap-1'
                    : 'text-white/70 hover:text-gold'
                }`}>
                {l.isRodrigue && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />}
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + language toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+23058137384"
              className="flex items-center gap-2 text-white/50 hover:text-gold text-sm font-medium transition-colors">
              <Phone size={14} /> +230 5813 7384
            </a>
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="text-xs font-black border border-white/25 rounded-lg px-3 py-1.5 text-white/70 hover:text-white hover:border-gold/50 hover:text-gold transition-all tracking-wide">
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <a href="/#contact"
              className="purple-gradient text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-purple">
              {txt.bookCall}
            </a>
          </div>

          {/* Mobile: language toggle + burger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="text-xs font-black border border-white/25 rounded-lg px-2.5 py-1.5 text-white/70 hover:text-gold hover:border-gold/50 transition-all tracking-wide">
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <button onClick={() => setOpen(o => !o)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className={`block font-medium py-2 transition-colors ${
                l.isRodrigue ? 'text-gold font-bold' : 'text-white/70 hover:text-gold'
              }`}>
              {l.isRodrigue && '📍 '}{l.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)}
            className="block purple-gradient text-white font-bold text-sm px-5 py-3 rounded-xl text-center mt-2">
            {txt.bookCall}
          </a>
        </div>
      )}
    </header>
  );
}
