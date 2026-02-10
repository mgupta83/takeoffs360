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
  title: "Takeoffs360 | Construction Quantity Takeoffs Made Easy",
  description: "Professional construction quantity takeoffs for contractors and builders. Turn drawings into winning bids with Takeoffs360. Reliable takeoffs, faster turnaround.",
  keywords: "takeoffs360, takeoffs 360, construction takeoffs, quantity takeoffs, bid quantification, construction estimating",
  authors: [{ name: "Takeoffs360" }],
  creator: "Takeoffs360",
  publisher: "Takeoffs360",
  metadataBase: new URL("https://takeoffs360.com"),
  alternates: {
    canonical: "https://takeoffs360.com",
  },
  openGraph: {
    type: 'website',
    url: 'https://takeoffs360.com',
    title: 'Takeoffs360 | Construction Quantity Takeoffs Made Easy',
    description: 'Professional construction quantity takeoffs for contractors and builders. Turn drawings into winning bids.',
    siteName: 'Takeoffs360',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Takeoffs360 Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Takeoffs360 | Construction Quantity Takeoffs',
    description: 'Professional construction quantity takeoffs for contractors and builders.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Takeoffs360',
    url: 'https://takeoffs360.com',
    logo: 'https://takeoffs360.com/logo.png',
    description: 'Professional construction quantity takeoffs for contractors and builders.',
    // sameAs: [
    //   'https://www.facebook.com/takeoffs360',
    //   'https://www.linkedin.com/company/takeoffs360',
    // ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@takeoffs360.com',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
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
