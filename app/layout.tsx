import SiteFooter from '@/components/SiteFooter'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IT Solutions Landing Page',
  description: 'Reliable IT Solutions for Your Business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Coderaft" />
      </head>
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
