"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Slide = Readonly<{ src: string; alt: string; caption: string }>;

export default function HeroCarousel(props: Readonly<{ slides?: readonly Slide[] }>) {
  const slides: readonly Slide[] = props.slides ?? [];
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const advance = () => setIndex((i) => (i + 1) % slides.length);

  function startAutoplay() {
    if (slides.length <= 1) return;
    timeoutRef.current = globalThis.setInterval(advance, 5000) as unknown as number;
  }

  function scheduleAutoplayRestart() {
    if (timeoutRef.current !== null) globalThis.clearInterval(timeoutRef.current as unknown as number);
    timeoutRef.current = globalThis.setTimeout(() => startAutoplay(), 5000) as unknown as number;
  }

  // Autoplay
  useEffect(() => {
    startAutoplay();
    return () => {
      if (timeoutRef.current !== null) {
        globalThis.clearInterval(timeoutRef.current as unknown as number);
        globalThis.clearTimeout(timeoutRef.current as unknown as number);
      }
    };
  }, [slides.length]);

  function go(i: number) {
    setIndex(i % slides.length);
    // pause and reschedule autoplay
    if (timeoutRef.current !== null) globalThis.clearInterval(timeoutRef.current as unknown as number);
    scheduleAutoplayRestart();
  }

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchDelta = useRef(0);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
    setDragOffset(0);
    if (timeoutRef.current !== null) globalThis.clearInterval(timeoutRef.current as unknown as number);
  }

  function onTouchMove(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    touchDelta.current = e.touches[0].clientX - touchStartX.current;
    setDragOffset(touchDelta.current);
  }

  function onTouchEnd() {
    if (touchDelta.current > 40) go((index - 1 + slides.length) % slides.length);
    else if (touchDelta.current < -40) go((index + 1) % slides.length);
    touchStartX.current = null;
    touchDelta.current = 0;
    setIsDragging(false);
    setDragOffset(0);
  }

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-md">
      <div className="flex">
        {/* Outer wrapper to apply dragOffset and transition control */}
        <div
          className="flex w-full"
          style={{
            transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))`,
            transition: isDragging ? 'none' : 'transform 700ms ease'
          }}
        >
        {slides.map((s) => (
          <div key={s.src} className="relative w-full flex-shrink-0" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <Image src={s.src} alt={s.alt} width={1200} height={720} className="w-full h-[240px] sm:h-[200px] md:h-[280px] object-cover" />
            {/* Gradient overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute left-6 bottom-6 max-w-[80%]">
              <div className="inline-flex items-start gap-3 bg-gradient-to-r from-black/70 via-black/40 to-black/20 px-4 py-3 rounded-xl shadow-lg border border-black/10 backdrop-blur-md">
                <div className="w-1.5 h-10 bg-amber-500 rounded" aria-hidden />
                <div>
                  <p className="text-amber-200 text-xs uppercase tracking-wide mb-1">Takeoffs360</p>
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-extrabold leading-tight drop-shadow-md">{s.caption}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Controls */}
      <button aria-label="Previous" onClick={() => go((index - 1 + slides.length) % slides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white">
        <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <button aria-label="Next" onClick={() => go((index + 1) % slides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white">
        <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* Indicators */}
      <div className="absolute right-4 top-4 flex gap-2">
        {slides.map((s, i) => (
          <button key={s.src} onClick={() => go(i)} className={`w-2 h-2 rounded-full ${i === index ? 'bg-amber-500' : 'bg-white/80'}`} aria-label={`Go to slide ${i+1}`} />
        ))}
      </div>
    </div>
  );
}
