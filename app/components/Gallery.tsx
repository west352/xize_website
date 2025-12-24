'use client';

import { useState, useEffect, useCallback } from 'react';

const slides = [
  { src: 'https://picsum.photos/seed/warehouse1/1200/600', alt: 'Warehouse Facility', title: 'Our Warehouse', desc: '2,000+ square meters of storage space' },
  { src: 'https://picsum.photos/seed/autoparts1/1200/600', alt: 'Auto Parts Display', title: 'Parts Inventory', desc: 'Extensive selection of BYD and Volkswagen parts' },
  { src: 'https://picsum.photos/seed/team1/1200/600', alt: 'Our Team', title: 'Professional Team', desc: '100+ dedicated employees ready to serve you' },
  { src: 'https://picsum.photos/seed/store1/1200/600', alt: 'Retail Store', title: 'Chain Stores', desc: '10+ locations across Shandong Province' },
  { src: 'https://picsum.photos/seed/shipping1/1200/600', alt: 'Export Services', title: 'Global Export', desc: 'Expanding our reach to customers worldwide' },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => goTo(current + 1), 4000);
    return () => clearInterval(interval);
  }, [current, isPaused, goTo]);

  return (
    <div className="mt-12 relative">
      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-shrink-0 min-w-full">
              <img src={slide.src} alt={slide.alt} className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">{slide.title}</h3>
                <p className="text-white/80 text-sm mt-1">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => goTo(current - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button onClick={() => goTo(current + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`w-3 h-3 rounded-full transition-all duration-200 ${i === current ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'}`} />
        ))}
      </div>
    </div>
  );
}
