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
    { rel: 'icon', url: '/favicon.ico?v=1.0.1' },
    // PNG favicons
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png?v=1.0.1' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png?v=1.0.1' },
    // Apple touch icons
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png?v=1.0.1' },
    // Android/Chrome icons
    { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/android-chrome-192x192.png?v=1.0.1' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/android-chrome-512x512.png?v=1.0.1' },
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
