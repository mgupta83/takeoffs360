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

export function Twitter({ label, ...props }: SocialLinkProps) {
  return (
    <a {...props} aria-label={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.725-.666 1.562-.666 2.457 0 1.696.863 3.193 2.177 4.071-.802-.026-1.558-.246-2.22-.616v.062c0 2.367 1.684 4.342 3.918 4.789-.41.111-.844.171-1.29.171-.315 0-.621-.03-.921-.086.622 1.942 2.427 3.357 4.565 3.397-1.674 1.312-3.786 2.095-6.079 2.095-.395 0-.785-.023-1.17-.068 2.168 1.392 4.745 2.205 7.516 2.205 9.02 0 13.968-7.47 13.968-13.946 0-.213-.005-.425-.014-.636.961-.694 1.796-1.562 2.457-2.549z" />
      </svg>
    </a>
  )
}

export default function SocialIcons({ links }: { links?: { href: string; label: string; type: 'linkedin' | 'facebook' | 'twitter' }[] }) {
  return (
    <div className="flex gap-3 items-center">
      {(links ?? []).map((l) => {
        const common = { href: l.href, target: '_blank', rel: 'noopener noreferrer', className: 'text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 rounded' }
        if (l.type === 'linkedin') return <LinkedIn key={l.href} {...common} label={l.label} />
        if (l.type === 'facebook') return <Facebook key={l.href} {...common} label={l.label} />
        return <Twitter key={l.href} {...common} label={l.label} />
      })}
    </div>
  )
}
