import SocialIcons from './icons/SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20 bg-white">
      <div className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            {/* Social icons component */}
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <SocialIcons links={[
              { href: 'https://www.linkedin.com', label: 'Takeoffs360 on LinkedIn', type: 'linkedin' },
              { href: 'https://x.com/takeoffs360', label: 'Takeoffs360 on Twitter', type: 'twitter' },
            ]} />
          </div>
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} Takeoffs360. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
