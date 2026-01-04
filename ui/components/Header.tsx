export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-xl font-semibold text-slate-800">
          Takeoffs360
        </span>
        <nav className="space-x-6 text-slate-600">
          <a href="/" className="hover:text-slate-900">Home</a>
          <a href="/services" className="hover:text-slate-900">Services</a>
          <a href="/pricing" className="hover:text-slate-900">Pricing</a>
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
