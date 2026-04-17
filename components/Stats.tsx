const STATS = [
  { value: 'Micro → Mid', label: 'Business projects we serve' },
  { value: '10+',      label: 'Years of expertise'        },
  { value: '120+',     label: 'Businesses served'         },
  { value: '9',        label: 'Professional services'     },
];

export default function Stats() {
  return (
    <section className="bg-navy-mid py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={s.label} className="text-center">
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
