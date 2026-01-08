import SocialIcons from './icons/SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-6">
            <div>
              {/* Social icons component */}
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <SocialIcons links={[
                { href: 'https://www.linkedin.com', label: 'Takeoffs360 on LinkedIn', type: 'linkedin' },
                { href: 'https://www.facebook.com', label: 'Takeoffs360 on Facebook', type: 'facebook' },
                { href: 'https://www.twitter.com', label: 'Takeoffs360 on Twitter', type: 'twitter' },
              ]} />
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/terms" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-slate-500">© {new Date().getFullYear()} Takeoffs360. All rights reserved.</div>
      </div>
    </footer>
  )
}
