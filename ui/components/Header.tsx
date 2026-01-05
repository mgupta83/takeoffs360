"use client";

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
    <header className="border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-slate-800">Takeoffs360</span>
          <span className="hidden sm:inline text-sm text-slate-500">Accurate quantity takeoffs</span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-slate-600">
            <a href="/" className="hover:text-slate-900">Home</a>
            <a href="/why-us" className="hover:text-slate-900">Why Us</a>
            <a href="/services" className="hover:text-slate-900">Services</a>
            <a href="/contact" className="hover:text-slate-900">Contact</a>
          </nav>

          <a
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded bg-amber-500 px-4 py-2 text-white text-sm font-medium hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Request a Quote
          </a>

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
        className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-slate-100 bg-white`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 space-y-4">
          <nav className="flex flex-col gap-3 text-slate-700">
            <a href="/" className="py-2 px-3 rounded hover:bg-slate-50">Home</a>
            <a href="/why-us" className="py-2 px-3 rounded hover:bg-slate-50">Why Us</a>
            <a href="/services" className="py-2 px-3 rounded hover:bg-slate-50">Services</a>
            <a href="/contact" className="py-2 px-3 rounded hover:bg-slate-50">Contact</a>
          </nav>

          <div>
            <a href="/contact" className="block text-center rounded bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600">Request a Quote</a>
          </div>
        </div>
      </div>
    </header>
  )
}
