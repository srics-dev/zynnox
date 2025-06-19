import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  // 1. Basic SEO Tags
  title: {
    default: 'Zynnox - IT Consulting & Software Solutions', // Main title for home page and default for others
    template: '%s | Zynnox', // Template for other pages (e.g., "About Us | Zynnox")
  },
  description: 'Zynnox provides expert IT consulting and innovative software solutions to empower businesses for digital transformation and growth.',
  keywords: [
    'Zynnox', 'IT services', 'IT consulting', 'software solutions',
    'custom software development', 'digital transformation', 'tech consulting',
    'business technology', 'enterprise software', 'cloud solutions',
    'IT strategy', 'technology consulting', 'Bengaluru IT services',
    'India IT services', 'software development company'
  ],
  authors: [{ name: 'Zynnox Team', url: 'https://www.zynnox.com' }], // Replace with your actual URL
  creator: 'Zynnox',
  publisher: 'Zynnox',
  robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // You can also specify specific URLs if canonicalization is needed
  // canonical: 'https://www.zynnox.com', // Only if this is the canonical URL

  // 2. Open Graph Tags (for social media sharing like Facebook, LinkedIn)
  openGraph: {
    title: 'Zynnox - IT Consulting & Software Solutions',
    description: 'Empowering businesses with strategic IT consulting and custom software development expertise.',
    url: 'https://www.zynnox.com', // Replace with your actual domain
    siteName: 'Zynnox',
    images: [
      {
        url: 'https://www.zynnox.com/images/og-image.jpg', // Path to your main Open Graph image (e.g., a banner, logo with text)
        width: 1200,
        height: 630,
        alt: 'Zynnox IT Consulting & Software Solutions',
      },
      // You can add more image objects if you have different sizes or purposes
    ],
    locale: 'en_US',
    type: 'website', // For a general website
  },

  // 3. Twitter Card Tags (for Twitter sharing)
  twitter: {
    card: 'summary_large_image', // Or 'summary' if your image is small
    title: 'Zynnox - IT Consulting & Software Solutions',
    description: 'Unlock your business potential with Zynnox\'s expert IT consulting and innovative software development services.',
    creator: '@YourTwitterHandle', // If Zynnox has a Twitter account
    site: '@YourTwitterHandle', // If Zynnox has a Twitter account
    images: ['https://www.zynnox.com/images/twitter-card-image.jpg'], // Path to your Twitter card image (ideally 1200x675)
  },

  // 4. Icons & Favicons
  icons: {
    icon: '/favicon.ico', // Standard favicon (should be in app/ folder)
    shortcut: '/shortcut-icon.png', // Optional, if you have a specific shortcut icon
    apple: '/apple-touch-icon.png', // For iOS devices
    // Add other sizes if necessary for full PWA support
  },

  // 5. Apple Web App (if applicable for PWA features)
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Zynnox',
    // startUpImage: [], // Optional: Splash screens for different devices
  },

  // 6. Manifest (for Progressive Web Apps - PWA)
  manifest: '/manifest.webmanifest', // Ensure you have a web app manifest file in your public directory
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='dark'>
      <body>{children}</body>
    </html>
  )
}
