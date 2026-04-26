import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CIPCON 2026 | Annual National Conference of Indian Psychiatric Society',
  description: 'CIPCON 2026 – Transformative Therapeutics and Technology: Psychiatry 3.0. September 2026, Raipur, Chhattisgarh. Join us for the flagship academic event of the Indian Psychiatric Society.',
  keywords: ['CIPCON', 'Indian Psychiatric Society', 'psychiatry conference', 'mental health', 'Madurai 2026'],
  openGraph: {
    title: 'CIPCON 2026 | Annual National Conference of Indian Psychiatric Society',
    description: 'Join us in Raipur for the flagship academic event of the Indian Psychiatric Society.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
