"use client";

import { useRouter } from 'next/navigation';

export default function ContactFixed() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/contact')}
      className="fixed right-4 bottom-6 z-50 inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-3 text-white font-medium shadow-lg hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      Contact Us
    </button>
  );
}
