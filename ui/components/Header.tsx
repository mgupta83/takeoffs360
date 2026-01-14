"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="bg-white shadow-sm border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <a href="/#who" className="flex items-center" aria-label="Takeoffs360 home">
            <div className="relative w-32 sm:w-40 h-12 sm:h-16 overflow-hidden">
              <Image
                src="/logo-3.png"
                alt="Takeoffs360 logo"
                fill
                priority
                sizes="(max-width: 640px) 128px, 160px"
                className="object-cover object-center"
              />
            </div>
          </a>

          {/* <span className="hidden sm:inline text-sm font-semibold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text drop-shadow-md tracking-wide">Bid More, Win More</span> */}
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-slate-600">
            <a href="/#trades" className="hover:text-slate-900">Services</a>
            <a href="/#approach" className="hover:text-slate-900">Delivery</a>
            <a href="/contact" className="hover:text-slate-900">Contact</a>
          </nav>

          {/* CTAs removed - use Contact page link in nav */}

          {/* Mobile hamburger */}
          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`md:hidden ${open ? 'block' : 'hidden'} bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl transition-all duration-300 ease-in-out`}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 space-y-6">
            <nav className="flex flex-col gap-4 text-slate-700">
            <a href="/#trades" className="py-3 px-4 rounded-lg hover:bg-amber-50 hover:text-amber-800 transition-all duration-200 text-lg font-medium">Services</a>
            <a href="/#approach" className="py-3 px-4 rounded-lg hover:bg-amber-50 hover:text-amber-800 transition-all duration-200 text-lg font-medium">Delivery</a>
            </nav>

            <div className="text-center">
              <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg inline-block transition-all duration-200 text-lg shadow-lg">Contact</a>
            </div>
        </div>
      </div>
    </header>
  )
}
