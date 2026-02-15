import React from 'react'

type SocialLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { label: string }

export function LinkedIn({ label, ...props }: SocialLinkProps) {
  return (
    <a {...props} aria-label={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z" />
      </svg>
    </a>
  )
}

export function Facebook({ label, ...props }: SocialLinkProps) {
  return (
    <a {...props} aria-label={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
    </a>
  )
}

export function X({ label, ...props }: SocialLinkProps) {
  return (
    <a {...props} aria-label={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.17-6.763-5.91 6.763h-3.308l7.73-8.835L.424 2.25h6.755l4.867 6.44 5.598-6.44zM17.002 18.868h1.83L6.822 4.066H4.881l12.121 14.802z" />
      </svg>
    </a>
  )
}

export default function SocialIcons({ links }: { links?: { href: string; label: string; type: 'linkedin' | 'facebook' | 'x' }[] }) {
  return (
    <div className="flex gap-3 items-center">
      {(links ?? []).map((l) => {
        const common = { href: l.href, target: '_blank', rel: 'noopener noreferrer', className: 'text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 rounded' }
        if (l.type === 'linkedin') return <LinkedIn key={l.href} {...common} label={l.label} />
        if (l.type === 'facebook') return <Facebook key={l.href} {...common} label={l.label} />
        return <X key={l.href} {...common} label={l.label} />
      })}
    </div>
  )
}
