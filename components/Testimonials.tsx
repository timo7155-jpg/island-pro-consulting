'use client';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Gaspar RÉm Élilà',
    text: 'I recommend the services of Island Pro Consulting. The team wrote a professional business plan (25 pages) for me. The quality and contents are outstanding. Thank You',
    service: 'Business Plan',
    lang: 'en',
  },
  {
    name: 'Stephane J. Gaspard',
    text: 'Plan done in a professional manner with good pictures and good details.... I recommend 100%',
    service: 'Business Plan',
    lang: 'en',
  },
  {
    name: 'Mary Dan',
    text: 'The service is highly professional with an effective and attentive team. I recommend their services to everyone willing to have a business plan. You get value for money.',
    service: 'Business Plan',
    lang: 'en',
  },
  {
    name: 'Louis Marie Charline',
    text: 'Mo inn très satisfaite de travay ki zot inn fer. Mo\'nn gegn enn plan ki bien detayé, bann idée bien organisé et surtou bien prop!! Merci beaucoup et keep up the good job 🤜',
    service: 'Plan d\'affaire',
    lang: 'cr',
  },
  {
    name: 'Maevah Bazatry',
    text: 'Satisfaite, travaille de qualité.',
    service: 'Consulting',
    lang: 'fr',
  },
  {
    name: 'Francois Alizee',
    text: 'I highly recommended et service au top. Vous êtes très à l\'écoute et le client a exactement ce qu\'il demande. Merci pour tout.',
    service: 'Consulting',
    lang: 'fr',
  },
  {
    name: 'Jasmine Delights',
    text: 'Good service, professional business plan.... I recommend!',
    service: 'Business Plan',
    lang: 'en',
  },
  {
    name: 'Annique Bg',
    text: 'I deeply recommend those who have a project in mind and they don\'t know how to develop or write it. IPC listen to what you want and they make it simple for you. Don\'t Hesitate.',
    service: 'Business Plan',
    lang: 'en',
  },
  {
    name: 'Lucia Jolicoeur',
    text: 'The business plan is very excellent. I\'m very satisfied. Good job the team!',
    service: 'Business Plan',
    lang: 'en',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className="text-gold fill-gold" />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const colors = [
    'from-purple to-purple-light',
    'from-gold to-gold-light',
    'from-purple-light to-purple',
    'from-gold-light to-gold',
  ];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
      <span className="text-white font-black text-sm">{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive(a => (a + 1) % REVIEWS.length), []);
  const prev = useCallback(() => setActive(a => (a - 1 + REVIEWS.length) % REVIEWS.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused, next]);

  // visible cards: active-1, active, active+1 (desktop), just active (mobile)
  const getCard = (offset: number) => REVIEWS[(active + offset + REVIEWS.length) % REVIEWS.length];

  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-purple/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
            ⭐ 100% Recommended on Facebook
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
            What our clients<br />
            <span className="purple-text">say about us.</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            9 reviews. 9 recommendations. Real clients, real results.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards — desktop: 3 cards, mobile: 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Prev card — desktop only */}
            <div className="hidden lg:block opacity-40 scale-95 origin-right transition-all duration-500 pointer-events-none">
              <ReviewCard review={getCard(-1)} />
            </div>

            {/* Active card */}
            <div className="transition-all duration-500">
              <ReviewCard review={getCard(0)} active />
            </div>

            {/* Next card — desktop only */}
            <div className="hidden lg:block opacity-40 scale-95 origin-left transition-all duration-500 pointer-events-none">
              <ReviewCard review={getCard(1)} />
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-white hover:bg-purple/30 hover:border-purple/50 transition-all z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-white hover:bg-purple/30 hover:border-purple/50 transition-all z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 h-2 bg-purple'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Facebook badge */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span className="text-white/30 text-xs">Verified reviews from Facebook</span>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, active }: { review: typeof REVIEWS[0]; active?: boolean }) {
  return (
    <div className={`rounded-3xl p-6 lg:p-7 flex flex-col h-full transition-all duration-500 ${
      active
        ? 'bg-white/8 border-2 border-purple/40 shadow-purple'
        : 'bg-white/4 border border-white/8'
    }`}>
      {/* Quote icon */}
      <Quote size={24} className="text-purple/40 mb-4 flex-shrink-0" />

      {/* Stars */}
      <Stars />

      {/* Text */}
      <p className={`mt-4 leading-relaxed flex-1 ${active ? 'text-white/85 text-sm' : 'text-white/50 text-sm'}`}>
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/8">
        <Avatar name={review.name} />
        <div>
          <p className={`font-black text-sm ${active ? 'text-white' : 'text-white/50'}`}>{review.name}</p>
          <p className="text-purple-light text-xs font-medium">{review.service}</p>
        </div>
      </div>
    </div>
  );
}
