'use client'

import Link from 'next/link'
import { shopInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={shopInfo.logo}
                alt={shopInfo.name}
                className="h-10 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              <span className="text-xl font-bold text-white">{shopInfo.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
              {shopInfo.description}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${shopInfo.phone}`}
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {shopInfo.phone}
              </a>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Inhaber: {shopInfo.owner}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors">
                  Alle Produkte
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=kinderzugabeartikel"
                  className="hover:text-primary-400 transition-colors"
                >
                  Kinderzugabeartikel
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=praxis-prophylaxebedarf"
                  className="hover:text-primary-400 transition-colors"
                >
                  Prophylaxebedarf
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-primary-400 transition-colors">
                  Warenkorb
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informationen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  Datenschutz
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  AGB
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  Impressum
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  Widerrufsrecht
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  Versand & Zahlung
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2024 {shopInfo.name}. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span>🔒</span> Sichere Zahlung
            </span>
            <span className="flex items-center gap-1">
              <span>🚚</span> Schnelle Lieferung
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
