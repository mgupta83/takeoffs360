export default function Header() {
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
            className="inline-flex items-center gap-2 rounded bg-amber-500 px-4 py-2 text-white text-sm font-medium hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  )
}
