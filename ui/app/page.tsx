import React from 'react'
import Link from 'next/link'
import {
  ClipboardCheck, HardHat, Layers, BrickWall,
  Component, TreePine, ShieldCheck, DoorOpen,
  Palette, PackageSearch, Wrench, Building, Home as HomeIcon, Hammer
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
  { id: '32', title: 'Exterior Improvements', icon: <Hammer />, items: [
    { code: '321000', description: 'Bases / Paving / Asphalt / Concrete' },
    { code: '323000', description: 'Site Improvements' },
    { code: '323100', description: 'Fences & Gates' }
  ] },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-stretch bg-slate-50 rounded-2xl shadow-lg overflow-hidden">
            {/* Left Side: Heading and Description */}
            <div className="flex-1 text-center lg:text-left p-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                Turn Drawings Into<br />
                <span className="text-amber-500">Winning Bids.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-8">
                At Takeoffs360, we partner with Contractors, Developers, and Investors to build highly detailed and auditable takeoffs with higher accuracy and faster turnaround to help them win more bids.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="text-slate-800 px-4 py-2 rounded-full text-sm font-semibold border border-slate-300">Flexible Engagement Model</span>
                <span className="text-slate-800 px-4 py-2 rounded-full text-sm font-semibold border border-slate-300">Dedicated Point of Contact</span>
                <span className="text-slate-800 px-4 py-2 rounded-full text-sm font-semibold border border-slate-300">Secure Data Handling</span>
                <span className="text-slate-800 px-4 py-2 rounded-full text-sm font-semibold border border-slate-300">Advanced Technology & Processes</span>
              </div>
            </div>

            {/* Right Side: Image and Content */}
            <div className="flex-1 p-8 flex flex-col">
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img
                  src="/pic-2.png"
                  alt="Takeoffs360 plan view"
                  className="w-full h-48 lg:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Text Content */}
              <div className="mb-4 text-center">
                <p className="text-slate-700 text-base font-normal italic">We work with all kinds of construction and infrastructure projects, from small renovations to large-scale developments.</p>
              </div>
              <div className="text-center">
                <Link href="/contact">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 text-base">
                    Contact Us to Get a Free Trial
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trades We Serve */}
      <section id="trades" className="bg-zinc-50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent drop-shadow-md">Trades We Serve</h2>
            <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">Comprehensive quantity takeoffs across major CSI divisions — built for speed, accuracy, and value.</p>
          </div>

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

      {/* Our Approach */}
      <section id="approach" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent drop-shadow-md">How We Deliver Quality</h2>
            <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">Our streamlined process delivers high-quality results through meticulous attention to detail and robust quality assurance at every step.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secured Data Handling</h3>
              <p className="text-slate-600">Enterprise-grade security protocols protect your sensitive project data.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">Standardized Templates & SOPs</h3>
              <p className="text-slate-600">Consistent takeoff templates and standard operating procedures promote accuracy.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Multi-Level Quality Control</h3>
              <p className="text-slate-600">Rigorous checks at multiple stages minimize errors and ensure high accuracy.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Revision Support</h3>
              <p className="text-slate-600">Continuous support throughout the project lifecycle for all revisions.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Structured Deliverables & BOQs</h3>
              <p className="text-slate-600">Organized bills of quantities and comprehensive project documentation.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Detailed Quantity Extraction</h3>
              <p className="text-slate-600">Precise measurement and extraction of all project quantities.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Clear Cost Visibility</h3>
              <p className="text-slate-600">Transparent cost breakdowns for informed decision-making.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Easy Collaboration</h3>
              <p className="text-slate-600">Seamless integration across various platforms and tools.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Strong Confidentiality</h3>
              <p className="text-slate-600">Strict NDA and data security practices protect your information.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-2">Flexible Engagement Models</h3>
              <p className="text-slate-600">Affordable and adaptable pricing options to fit your needs.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">👤</div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Point of Contact</h3>
              <p className="text-slate-600">A single point of contact and consistent estimator teams for seamless communication.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-amber-500 text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Advanced Technology & Processes</h3>
              <p className="text-slate-600">Leveraging cutting-edge tools and methodologies for superior results.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
