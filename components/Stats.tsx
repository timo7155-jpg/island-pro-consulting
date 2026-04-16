const STATS = [
  { value: 'Rs 500M+', label: 'Client portfolio managed'    },
  { value: '10+',      label: 'Years of expertise'          },
  { value: '120+',     label: 'Businesses served'           },
  { value: '7',        label: 'Professional services'       },
];

export default function Stats() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black gold-text mb-1">{s.value}</div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
