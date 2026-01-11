import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientWidgets from '@/components/ClientWidgets'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Takeoffs360 | Construction Quantity Takeoffs",
  description: "Accurate construction quantity takeoffs for contractors and builders.",
  icons: [
    // Standard favicon.ico - browsers often prefer this over PNG
    { rel: 'icon', url: '/favicon.ico?t=1768170201' },
    // High-resolution PNG fallbacks
    { rel: 'icon', type: 'image/png', sizes: '256x256', url: '/favicon-main.png?t=1768170201' },
    { rel: 'icon', type: 'image/png', sizes: '128x128', url: '/favicon-large.png?t=1768170201' },
    { rel: 'icon', type: 'image/png', sizes: '64x64', url: '/favicon-medium.png?t=1768170201' },
    // Additional PNG fallbacks
    { rel: 'icon', type: 'image/png', sizes: '48x48', url: '/favicon-48x48.png?t=1768170201' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png?t=1768170201' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png?t=1768170201' },
    // Apple touch icons
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png?t=1768170201' },
    { rel: 'apple-touch-icon', sizes: '152x152', url: '/apple-touch-icon-152.png?t=1768170201' },
    { rel: 'apple-touch-icon', sizes: '120x120', url: '/apple-touch-icon-120.png?t=1768170201' },
    // Android/Chrome icons
    { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/android-chrome-192.png?t=1768170201' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/android-chrome-512.png?t=1768170201' },
  ],
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f59e0b',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <ClientWidgets />
      </body>
    </html>
  );
}
