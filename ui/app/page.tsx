import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">Bid More. Win More. Build Smarter.</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-lg">Takeoffs360 produces accurate, trade-specific takeoffs and cost estimates that turn drawings into submission-ready quantities — built for speed and precision so you can pursue more opportunities with confidence.</p>

            <div className="mt-8 flex items-center gap-4">
              <a href="/contact" className="inline-block rounded bg-amber-500 px-6 py-3 text-white font-medium hover:bg-amber-600">Get Started</a>
              <a href="/pricing" className="text-sm text-slate-700 hover:underline">See Pricing</a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              <li>Dedicated teams — not shared resources</li>
              <li>Confidential & secure delivery</li>
              <li>Fast turnarounds — overnight & next-day</li>
              <li>Flexible, cost-effective pricing</li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image src="/flyer.jpg" alt="Takeoffs360 services" width={520} height={640} className="rounded shadow-sm" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-semibold text-slate-800">Our Services</h2>
          <p className="mt-3 text-slate-700 max-w-2xl">Comprehensive quantity takeoffs across major CSI divisions — built for speed, accuracy, and value.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded bg-white p-4 shadow-sm">
              <h3 className="font-semibold">Concrete & Rebar</h3>
              <p className="text-sm text-slate-600">Concrete takeoffs, rebar estimates, foundations & walls.</p>
            </div>

            <div className="rounded bg-white p-4 shadow-sm">
              <h3 className="font-semibold">Masonry</h3>
              <p className="text-sm text-slate-600">CMU & brick takeoffs, masonry veneers, cast stone.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
