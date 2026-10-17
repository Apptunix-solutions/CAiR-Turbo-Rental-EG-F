import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { generateJsonLd } from '@/lib/seo'
import { ThemeProvider } from '@/components/theme-provider'
import { business } from '@/data'
import './globals.css'

const outfit = Outfit({ subsets: ["latin"], display: 'swap', variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: 'CAiR Turbo — Premium Car Rental in Cairo, Egypt',
  description:
    "Egypt's premier luxury car rental. Mercedes G-Wagon, Rolls Royce, Ferrari and more. Self-drive, chauffeur, airport transfers in Cairo. Insurance & worldwide verification included.",
  keywords: [
    'luxury car rental Cairo',
    'car rental Egypt',
    'Mercedes G63 rental Cairo',
    'Rolls Royce rental Egypt',
    'Ferrari rental Cairo',
    'chauffeur service Cairo',
    'airport transfer Cairo',
    'CAiR Turbo',
  ],
  applicationName: business.name,
  authors: [{ name: business.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CAiR Turbo — Premium Car Rental in Egypt',
    description:
      'Drive luxury, explore Egypt. G-Wagon, Rolls Royce, Ferrari & more. Full insurance, 24/7 support.',
    url: business.url,
    siteName: business.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAiR Turbo — Premium Car Rental in Egypt',
    description:
      'Drive luxury, explore Egypt. G-Wagon, Rolls Royce, Ferrari & more. Full insurance, 24/7 support.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = generateJsonLd()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
