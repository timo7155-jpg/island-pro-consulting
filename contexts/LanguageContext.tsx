'use client';
import { createContext, useContext, useState, useEffect } from 'react';

export type Lang = 'en' | 'fr';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('ipc-lang') as Lang;
    if (saved === 'en' || saved === 'fr') setLang(saved);
  }, []);

  const handleSetLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('ipc-lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
