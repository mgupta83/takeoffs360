// export default function Pricing() {
//   return (
//     <section className="max-w-4xl mx-auto px-6 py-20">
//       <h2 className="text-3xl font-semibold text-slate-800">
//         Pricing
//       </h2>

//       <p className="mt-4 text-slate-600">
//         Transparent pricing based on project size and scope.
//       </p>

//       <p className="mt-6 font-medium text-slate-700">
//         Typical projects range from $75 to $300.
//       </p>
//     </section>
//   )
// }


// app/divisions/page.tsx
import React from 'react';
import { 
  ClipboardCheck, HardHat, Layers, BrickWall, 
  Component, TreePine, ShieldCheck, DoorOpen, 
  Palette, PackageSearch 
} from 'lucide-react';

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
];

export default function ConstructionDivisions() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 bg-zinc-50 text-zinc-900">
      <header className="mb-16">
        <h1 className="text-5xl font-black uppercase tracking-tighter border-l-8 border-yellow-500 pl-6">
          Our Services
        </h1>
        <p className="mt-4 text-xl text-zinc-600 max-w-3xl">
          Comprehensive quantity takeoffs across major CSI divisions — built for speed, accuracy, and value.
        </p>
      </header>

      {/* Persistent Summary Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {divisions.map((div) => (
          <article 
            key={div.id} 
            className="group flex flex-col bg-white border border-zinc-200 p-8 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300"
          >
            {/* Icon & ID Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-yellow-500 text-black rounded-sm group-hover:bg-black group-hover:text-yellow-500 transition-colors">
                {React.cloneElement(div.icon as React.ReactElement, { size: 32, strokeWidth: 2.5 })}
              </div>
              <span className="text-sm font-black tracking-widest text-zinc-300 group-hover:text-yellow-500 transition-colors">
                DIV {div.id}
              </span>
            </div>
            
            {/* Title & Static Summary */}
            <h2 className="text-2xl font-bold mb-4 group-hover:underline decoration-yellow-500 underline-offset-4">
              {div.title}
            </h2>
            <p className="text-zinc-600 leading-relaxed text-lg">
              {div.summary}
            </p>
            
            {/* Visual Footer (UX Continuity) */}
            <div className="mt-auto pt-6 border-t border-zinc-100 flex justify-end">
              <span className="text-xs font-bold uppercase text-zinc-400">
                2026 Standards Reference
              </span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
