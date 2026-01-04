export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500">
        © {new Date().getFullYear()} Takeoffs360. All rights reserved.
      </div>
    </footer>
  )
}
