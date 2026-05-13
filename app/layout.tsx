import type { Metadata } from 'next'
import './globals.css'
import SiteFooter from '@/components/SiteFooter'

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
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
