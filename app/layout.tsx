import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/lib/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mirus Mix – Zahnarzt-Praxisbedarf',
  description:
    'Kinderzugabeartikel, Prophylaxebedarf und Recall-Karten für Zahnarztpraxen. Über 200 Artikel zu fairen Preisen.',
  keywords: 'Zahnarzt, Praxisbedarf, Kinderzugaben, Prophylaxe, Recall-Karten, Mirus Mix',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
