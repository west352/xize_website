'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const slides = [
  {
    src: '/images/gallery/gallery1.jpg',
    alt: 'Warehouse Facility',
    title: 'Our Warehouse',
    desc: '2,000+ square meters of storage space',
  },
  {
    src: '/images/gallery/gallery2.jpg',
    alt: 'Auto Parts Display',
    title: 'Parts Inventory',
    desc: 'Extensive selection of BYD and Volkswagen parts',
  },
  {
    src: '/images/gallery/gallery3.jpg',
    alt: 'Our Team',
    title: 'Professional Team',
    desc: '100+ dedicated employees ready to serve you',
  },
  {
    src: '/images/gallery/gallery4.jpg',
    alt: 'Retail Store',
    title: 'Chain Stores',
    desc: '10+ locations across Shandong Province',
  },
  {
    src: '/images/gallery/gallery5.jpg',
    alt: 'Export Services',
    title: 'Global Export',
    desc: 'Expanding our reach to customers worldwide',
  },
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
    <div className="relative mt-12">
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
            <div key={i} className="relative min-w-full flex-shrink-0">
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-64 w-full object-cover sm:h-80 md:h-96 lg:h-[500px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-xl font-semibold text-white">{slide.title}</h3>
                <p className="mt-1 text-sm text-white/80">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 flex justify-center space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-3 w-3 rounded-full transition-all duration-200 ${i === current ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
