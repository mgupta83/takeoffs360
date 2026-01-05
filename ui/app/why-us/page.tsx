import {
  BuildingStorefrontIcon,
  CubeIcon,
  Squares2X2Icon,
  ShieldCheckIcon,
  RectangleStackIcon,
  WindowIcon,
  WrenchScrewdriverIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-slate-800">
        Our Services
      </h2>

      <p className="mt-4 text-slate-700">
        Takeoffs360 is a construction estimating and quantity takeoff company that helps contractors
        bid more projects, bid faster, and win more — without increasing internal overhead. We
        produce accurate, trade-specific takeoffs and cost estimates, turning drawings into
        submission-ready quantities that support aggressive yet controlled bidding.
      </p>

      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold text-slate-800">Comprehensive Takeoffs by CSI Division</h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
          <li className="flex items-start gap-3">
            <span className="rounded-full p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 hover:bg-orange-50" role="img" aria-label="Concrete and Rebar icon">
              <BuildingStorefrontIcon className="w-6 h-6 text-orange-500" aria-hidden="true" />
            </span>
            <div>
              <strong>Division 03 - Concrete & Rebar:</strong>
              <div className="text-sm">Concrete takeoffs, rebar estimates, foundations & walls.</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="rounded-full p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 hover:bg-amber-50" role="img" aria-label="Masonry icon">
              <CubeIcon className="w-6 h-6 text-amber-500" aria-hidden="true" />
            </span>
            <div>
              <strong>Division 04 - Masonry:</strong>
              <div className="text-sm">CMU & brick takeoffs, masonry veneers, cast stone.</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="rounded-full p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300 hover:bg-green-50" role="img" aria-label="Lumber icon">
              <Squares2X2Icon className="w-6 h-6 text-green-600" aria-hidden="true" />
            </span>
            <div>
              <strong>Division 06 - Lumber:</strong>
              <div className="text-sm">Complete lumber takeoffs including EWP, sheathing & anchors.</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="rounded-full p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 hover:bg-sky-50" role="img" aria-label="Insulation icon">
              <ShieldCheckIcon className="w-6 h-6 text-sky-500" aria-hidden="true" />
            </span>
            <div>
              <strong>Division 07 - Insulation:</strong>
              <div className="text-sm">Batt, blown & rigid insulation, UL tests, GA files.</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="rounded-full p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 hover:bg-yellow-50" role="img" aria-label="Siding icon">
              <RectangleStackIcon className="w-6 h-6 text-yellow-600" aria-hidden="true" />
            </span>
            <div>
              <strong>Division 07 - Exterior Siding:</strong>
              <div className="text-sm">Trim, panels, roofing & gutters.</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="rounded-full p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 hover:bg-indigo-50" role="img" aria-label="Openings icon">
              <WindowIcon className="w-6 h-6 text-indigo-600" aria-hidden="true" />
            </span>
            <div>
              <strong>Division 08 - Openings:</strong>
              <div className="text-sm">Doors & windows, storefronts & curtain walls.</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="rounded-full p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 hover:bg-rose-50" role="img" aria-label="Specialties icon">
              <WrenchScrewdriverIcon className="w-6 h-6 text-rose-600" aria-hidden="true" />
            </span>
            <div>
              <strong>Division 10 - Specialties:</strong>
              <div className="text-sm">Toilet partitions, lockers & cabinets.</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="rounded-full p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 hover:bg-slate-50" role="img" aria-label="Site icon">
              <MapPinIcon className="w-6 h-6 text-slate-600" aria-hidden="true" />
            </span>
            <div>
              <strong>Division 32 - Site:</strong>
              <div className="text-sm">Base courses, concrete & asphalt.</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-slate-700">
        <h3 className="text-lg font-medium text-slate-800">Why contractors choose us</h3>
        <ul className="mt-3 space-y-2">
          <li>• Dedicated teams — not shared resources.</li>
          <li>• Confidential & secure delivery with NDA available.</li>
          <li>• Fast turnarounds — overnight and next-day options.</li>
          <li>• Flexible, cost-effective pricing for single or high-volume takeoffs.</li>
        </ul>
      </div>
    </section>
  )
}
