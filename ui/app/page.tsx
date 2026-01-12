import HeroCarousel from '@/components/HeroCarousel'
import React from 'react'
import {
  ClipboardCheck, HardHat, Layers, BrickWall,
  Component, TreePine, ShieldCheck, DoorOpen,
  Palette, PackageSearch
} from 'lucide-react'

const divisions = [
  { id: '03', title: 'Concrete', icon: <Layers />, items: [
    { code: '031000', description: 'Concrete Formwork' },
    { code: '032000', description: 'Concrete Reinforcing' },
    { code: '033000', description: 'Cast-in-Place Concrete' },
    { code: '', description: 'All Site Work Concrete Quantity' }
  ] },
  { id: '04', title: 'Masonry', icon: <BrickWall />, items: [
    { code: '040500', description: 'Masonry Materials' },
    { code: '040513', description: 'Mortaring' },
    { code: '040519', description: 'Anchors' },
    { code: '042200', description: 'Concrete Blocks' },
    { code: '044001', description: 'Natural Stone' },
    { code: '044300', description: 'Stone Masonry' },
    { code: '047000', description: 'Brick/Stone Facing' },
    { code: '047200', description: 'Cast Stone Masonry' }
  ] },
  { id: '06', title: 'Wood, Plastics and Composites', icon: <TreePine />, items: [
    { code: '060120/060121', description: 'Cabinets' },
    { code: '060500', description: 'Lumber & Timber' },
    { code: '060523', description: 'Framing Hardware' }
  ] },
  { id: '07', title: 'Thermal and Moisture Protection', icon: <ShieldCheck />, items: [
    { code: '070101', description: 'Waterproofing' },
    { code: '070140', description: 'Roofing' },
    { code: '072100', description: 'Thermal Insulation' },
    { code: '072400', description: 'EIFS' },
    { code: '072500', description: 'Air & Vapor Barriers' },
    { code: '074600', description: 'Siding' },
    { code: '077123', description: 'Gutters & Downspouts' }
  ] },
  { id: '08', title: 'Openings', icon: <DoorOpen />, items: [
    { code: '', description: 'All Doors & Windows in General' }
  ] },
  { id: '09', title: 'Finishes', icon: <Palette />, items: [
    { code: '092000', description: 'Drywall & Metal Framing' },
    { code: '093000/096000', description: 'Flooring' },
    { code: '095000', description: 'Ceiling' },
    { code: '098000', description: 'Painting & Wall Covering' }
  ] },
  { id: '10', title: 'Specialties', icon: <PackageSearch />, items: [
    { code: '101100', description: 'Chalk/Marker/Tack Boards' },
    { code: '101400', description: 'Signage' },
    { code: '102113', description: 'Toilet Partitions' },
    { code: '102123', description: 'Cubicles' },
    { code: '102600', description: 'Wall & Door Protection' },
    { code: '102813', description: 'Bathroom Accessories' },
    { code: '102819', description: 'Tub & Shower Doors' },
    { code: '104400', description: 'Fire Protection Specialties' },
    { code: '105100', description: 'Lockers' }
  ] },
  { id: '32', title: 'Exterior Improvements', icon: <HardHat />, items: [
    { code: '321000', description: 'Bases / Paving / Asphalt / Concrete' },
    { code: '323000', description: 'Site Improvements' },
    { code: '323100', description: 'Fences & Gates' }
  ] },
]

export default function Home() {
  return (
    <main>
      {/* Hero Carousel at top */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <HeroCarousel
            slides={[
              { src: '/pic-1.png', alt: 'Takeoffs360 software view', caption: 'Bid more. Win more. Build smarter.' },
              { src: '/pic-2.png', alt: 'Takeoffs360 plan view', caption: 'Let us build estimates for you — faster, accurate, delivered.' }
            ]}
          />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
            Turn Drawings Into Winning Bids.<br />
            <span className="text-amber-100">Faster. Smarter.</span>
          </h1>
        </div>
      </section>

      {/* Trades We Serve */}
      <section id="trades" className="bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <header className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Trades We Serve</h2>
            <p className="mt-4 text-base text-slate-700 max-w-3xl mx-auto">Comprehensive quantity takeoffs across major CSI divisions — built for speed, accuracy, and value.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((div) => (
              <article key={div.id} className="group bg-white border border-zinc-200 p-4 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="p-1.5 bg-amber-500 text-black rounded flex-shrink-0">{React.isValidElement(div.icon) ? React.cloneElement(div.icon as React.ReactElement<any>, { size: 16, strokeWidth: 2 } as any) : null}</div>
                    <div className="text-xs font-black whitespace-nowrap">DIV {div.id}</div>
                  </div>
                  <h3 className="text-base font-semibold flex-1 min-w-0">{div.title}</h3>
                </div>

                <details className="text-zinc-600">
                  <summary className="cursor-pointer font-medium text-xs mb-1">View Services</summary>
                  <ul className="list-disc list-inside text-xs space-y-0.5">
                    {div.items.map((item, index) => (
                      <li key={index}>
                        {item.code && <span className="font-mono text-xs bg-zinc-100 px-1 py-0.5 rounded mr-1">{item.code}</span>}
                        {item.description}
                      </li>
                    ))}
                  </ul>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who Are We */}
      <section id="who" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900">Who Are We</h2>
            <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">Takeoffs360 provides contractor-focused quantity takeoffs and estimating services backed by experienced estimators and modern workflows. We turn drawings into accurate, actionable quantities so your team can respond faster and bid smarter.</p>
            {/* CTAs removed to simplify header interactions */}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 text-center">Why Choose Us</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded bg-white p-6 shadow-sm text-center">
              <div className="text-amber-500 text-3xl font-bold">Accuracy</div>
              <h3 className="mt-3 font-semibold">Trusted Estimates</h3>
              <p className="mt-2 text-sm text-slate-600">Trade-specific takeoffs and double-checked quantities.</p>
            </div>

            <div className="rounded bg-white p-6 shadow-sm text-center">
              <div className="text-amber-500 text-3xl font-bold">Speed</div>
              <h3 className="mt-3 font-semibold">Fast Turnarounds</h3>
              <p className="mt-2 text-sm text-slate-600">Next-day and overnight delivery options available.</p>
            </div>

            <div className="rounded bg-white p-6 shadow-sm text-center">
              <div className="text-amber-500 text-3xl font-bold">Support</div>
              <h3 className="mt-3 font-semibold">Dedicated Teams</h3>
              <p className="mt-2 text-sm text-slate-600">A single point of contact and consistent estimator teams.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
