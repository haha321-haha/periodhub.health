import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Period Magic - Traditional Cultural Healing Practices',
  description: 'Explore traditional cultural practices and modern approaches to menstrual wellness. Discover ancient charms, healing methods, and community support.',
  keywords: 'period magic, menstrual wellness, traditional charms, cultural healing, period pain relief',
  authors: [{ name: 'Period Magic Team' }],
  creator: 'Period Magic',
  publisher: 'Period Magic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://periodmagic.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Period Magic - Traditional Cultural Healing Practices',
    description: 'Explore traditional cultural practices and modern approaches to menstrual wellness.',
    url: 'https://periodmagic.vercel.app',
    siteName: 'Period Magic',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Period Magic - Traditional Cultural Healing Practices',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Period Magic - Traditional Cultural Healing Practices',
    description: 'Explore traditional cultural practices and modern approaches to menstrual wellness.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 