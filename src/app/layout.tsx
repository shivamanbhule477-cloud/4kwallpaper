import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '4K Wallpaper - Discover Beautiful Photography',
  description: 'A Pinterest-style photography discovery platform with high-quality wallpapers and images',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  charset: 'utf-8',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shivamanbhule477-cloud.github.io/4kwallpaper',
    title: '4K Wallpaper - Discover Beautiful Photography',
    description: 'A Pinterest-style photography discovery platform',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '4K Wallpaper',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4K Wallpaper',
    description: 'Discover beautiful high-quality wallpapers',
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="dns-prefetch" href="https://jbpeoveltjtlhkjxteyy.supabase.co" />
        <link rel="preconnect" href="https://jbpeoveltjtlhkjxteyy.supabase.co" />
      </head>
      <body className="bg-canvas text-ink font-pin-sans">{children}</body>
    </html>
  )
}