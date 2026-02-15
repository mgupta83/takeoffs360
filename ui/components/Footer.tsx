import SocialIcons from './icons/SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20 bg-white">
      <div className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 pb-20 md:pb-4">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col gap-4 md:hidden">
            <div className="flex items-center justify-between">
              <div>
                {/* Social icons component */}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <SocialIcons links={[
                  { href: 'https://x.com/takeoffs360', label: 'Takeoffs360 on X', type: 'x' },
                  { href: 'https://www.linkedin.com/company/takeoffs360/', label: 'Takeoffs360 on LinkedIn', type: 'linkedin' },
                ]} />
              </div>
              <div className="text-xs text-slate-500">© {new Date().getFullYear()} Takeoffs360. All rights reserved.</div>
            </div>
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-600">
              <a href="/disclaimer" className="hover:text-slate-800 transition-colors duration-200">Disclaimer</a>
              <span className="text-slate-300">|</span>
              <a href="/privacy" className="hover:text-slate-800 transition-colors duration-200">Privacy Policy</a>
              <span className="text-slate-300">|</span>
              <a href="/terms" className="hover:text-slate-800 transition-colors duration-200">Terms of Use</a>
            </div>
          </div>

          {/* Desktop Layout - Single Row */}
          <div className="hidden md:flex items-center justify-between">
            <div>
              {/* Social icons component */}
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <SocialIcons links={[
                { href: 'https://x.com/takeoffs360', label: 'Takeoffs360 on X', type: 'x' },
                { href: 'https://www.linkedin.com/company/takeoffs360/', label: 'Takeoffs360 on LinkedIn', type: 'linkedin' },
              ]} />
            </div>

            {/* Footer Links - Centered */}
            <div className="flex items-center gap-6 text-xs text-slate-600">
              <a href="/disclaimer" className="hover:text-slate-800 transition-colors duration-200">Disclaimer</a>
              <span className="text-slate-300">|</span>
              <a href="/privacy" className="hover:text-slate-800 transition-colors duration-200">Privacy Policy</a>
              <span className="text-slate-300">|</span>
              <a href="/terms" className="hover:text-slate-800 transition-colors duration-200">Terms of Use</a>
            </div>

            <div className="text-xs text-slate-500">© {new Date().getFullYear()} Takeoffs360. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
