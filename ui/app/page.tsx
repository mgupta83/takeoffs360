import HeroCarousel from '@/components/HeroCarousel'
import React from 'react'
import {
  ClipboardCheck, HardHat, Layers, BrickWall,
  Component, TreePine, ShieldCheck, DoorOpen,
  Palette, PackageSearch
} from 'lucide-react'

const divisions = [
  { id: '01', title: 'General Requirements', summary: 'Administrative and procedural rules, including quality control and site management.', icon: <ClipboardCheck /> },
  { id: '02', title: 'Existing Conditions', summary: 'Pre-construction site assessment, demolition, and remediation of hazardous materials.', icon: <HardHat /> },
  { id: '03', title: 'Concrete', summary: 'Formwork, reinforcing, cast-in-place, and precast concrete structural elements.', icon: <Layers /> },
  { id: '04', title: 'Masonry', summary: 'Brick, stone, CMU (block), and specialized glass block construction.', icon: <BrickWall /> },
  { id: '05', title: 'Metals', summary: 'Structural steel framing, metal joists, decking, and ornamental handrails.', icon: <Component /> },
  { id: '06', title: 'Wood, Plastics, & Composites', summary: 'Rough carpentry, structural framing, cabinetry, and plastic fabrications.', icon: <TreePine /> },
  { id: '07', title: 'Thermal & Moisture Protection', summary: 'Waterproofing, air barriers, insulation, roofing, and firestopping systems.', icon: <ShieldCheck /> },
  { id: '08', title: 'Openings', summary: 'Installation of doors, windows, skylights, and hardware systems.', icon: <DoorOpen /> },
  { id: '09', title: 'Finishes', summary: 'Interior/exterior painting, drywall, tile, wood flooring, and ceilings.', icon: <Palette /> },
  { id: '10', title: 'Specialties', summary: 'Visual displays, signage, lockers, and prefabricated partitions.', icon: <PackageSearch /> },
]

export default function Home() {
  return (
    <main>
      {/* Hero Carousel at top */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <HeroCarousel
            slides={[
              { src: '/pic-1.png', alt: 'Takeoffs360 software view', caption: 'Bid more. Win more. Build smarter.' },
              { src: '/pic-2.png', alt: 'Takeoffs360 plan view', caption: 'Let us build estimates for you — faster, accurate, delivered.' }
            ]}
          />
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

      {/* Our Services (detailed divisions) */}
      <section id="services" className="bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <header className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900">Our Services</h2>
            <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">Comprehensive quantity takeoffs across major CSI divisions — built for speed, accuracy, and value.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((div) => (
              <article key={div.id} className="group flex flex-col bg-white border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500 text-black rounded">{React.isValidElement(div.icon) ? React.cloneElement(div.icon as React.ReactElement<any>, { size: 20, strokeWidth: 2 } as any) : null}</div>
                    <div className="text-sm font-black">DIV {div.id}</div>
                  </div>
                  <h3 className="text-lg font-semibold ml-2">{div.title}</h3>
                </div>

                <p className="text-zinc-600 text-sm">{div.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
