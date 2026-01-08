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
    { rel: 'icon', url: '/favicon-32x32.svg' },
    { rel: 'icon', url: '/favicon-16x16.svg' },
    { rel: 'apple-touch-icon', url: '/logo.png' },
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
