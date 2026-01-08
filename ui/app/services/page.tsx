// export default function Pricing() {
//   return (
//     <section className="max-w-4xl mx-auto px-6 py-20">
//       <h2 className="text-3xl font-semibold text-slate-800">
//         Pricing
//       </h2>

//       <p className="mt-4 text-slate-600">
//         Transparent pricing based on project size and scope.
//       </p>

//       <p className="mt-6 font-medium text-slate-700">
//         Typical projects range from $75 to $300.
//       </p>
//     </section>
//   )
// }


// app/divisions/page.tsx
"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ServicesRedirect() {
  const router = useRouter()
  useEffect(() => {
    // Client-side redirect to the main page services section
    router.replace('/#services')
  }, [router])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg">Redirecting to services...</p>
      </div>
    </main>
  )
}
