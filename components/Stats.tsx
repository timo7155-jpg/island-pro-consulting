'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Stats() {
  const { lang } = useLanguage();
  const stats = translations[lang].stats;

  return (
    <section className="bg-navy-mid py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className={`text-3xl lg:text-4xl font-black mb-1 ${i % 2 === 0 ? 'gold-text' : 'purple-text'}`}>
                {s.value}
              </div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
