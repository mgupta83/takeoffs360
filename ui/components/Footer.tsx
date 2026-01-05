export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
        <div>
          <div className="text-lg font-semibold text-slate-800">Takeoffs360</div>
          <div className="mt-2 text-slate-600">Accurate, fast construction quantity takeoffs.</div>
        </div>

        <div>
          <div className="font-medium">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="font-medium">Contact</div>
          <div className="mt-2">info@yourwebsite.com</div>
          <div className="mt-1">600.334.6151</div>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-slate-500">© {new Date().getFullYear()} Takeoffs360. All rights reserved.</div>
      </div>
    </footer>
  )
}
