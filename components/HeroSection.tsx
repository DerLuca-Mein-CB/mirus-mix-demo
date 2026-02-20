'use client'

import Link from 'next/link'
import { shopInfo } from '@/lib/data'
import { Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-dental-green-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10" />
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full border border-white/10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-dental-green animate-pulse" />
              Ihr Spezialist für Zahnarzt-Praxisbedarf
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Kleine Patienten{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
                groß begeistern
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
              Kinderzugabeartikel, Prophylaxebedarf und Recall-Karten für Ihre
              Zahnarztpraxis – direkt vom Spezialisten. Über 200 Artikel, faire Preise.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3.5 rounded-xl font-semibold hover:bg-primary-50 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Produkte entdecken
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/products?category=bestseller"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <Star className="w-4 h-4 fill-current" /> Bestseller
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: '200+', label: 'Artikel' },
                { value: '0,14 €', label: 'ab/Stück' },
                { value: '1–2', label: 'Werktage' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product showcase */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Main product cards floating */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    img: 'https://www.mirus-mix.de/WebRoot/Store12/Shops/62584053/4C8E/1E00/6464/41BA/2B2F/C0A8/29B9/8840/254_Dinosaurier_m.jpg',
                    name: 'Dinosaurier',
                    price: '29,90 €',
                    rotate: '-rotate-3',
                  },
                  {
                    img: 'https://www.mirus-mix.de/WebRoot/Store12/Shops/62584053/57D6/6638/B930/5058/EAF9/C0A8/2BBC/98D4/Smilie_Flumies_m.jpg',
                    name: 'Springbälle Smile',
                    price: '24,90 €',
                    rotate: 'rotate-3',
                  },
                  {
                    img: 'https://www.mirus-mix.de/WebRoot/Store12/Shops/62584053/4C8D/0470/4FA7/82CE/64A2/C0A8/29B9/6669/200_Sanduhr_m.jpg',
                    name: 'Sanduhr',
                    price: '26,90 €',
                    rotate: 'rotate-2',
                  },
                  {
                    img: 'https://www.mirus-mix.de/WebRoot/Store12/Shops/62584053/4C8C/FD5C/1DA2/C354/2F59/C0A8/29BA/0994/Ring_med_rulle_m.jpg',
                    name: 'Kristallringe',
                    price: '24,90 €',
                    rotate: '-rotate-2',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`bg-white/95 backdrop-blur rounded-2xl p-3 shadow-xl ${item.rotate} transform hover:rotate-0 transition-transform duration-300`}
                  >
                    <div className="aspect-square rounded-xl overflow-hidden bg-slate-50 mb-2">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmOWZmIi8+PHJlY3QgeD0iMjIiIHk9IjI4IiB3aWR0aD0iNTYiIGhlaWdodD0iNDQiIHJ4PSI0IiBzdHJva2U9IiM3ZGQzZmMiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0iI2UwZjJmZSIvPjxjaXJjbGUgY3g9IjM2IiBjeT0iNDIiIHI9IjciIGZpbGw9IiM3ZGQzZmMiLz48cGF0aCBkPSJNMjIgNjIgTDQwIDQ4IEw1MiA1NiBMNjQgNDQgTDc4IDYyIFoiIGZpbGw9IiNiYWU2ZmQiLz48L3N2Zz4="
                        }}
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-700 truncate">{item.name}</p>
                    <p className="text-sm font-bold text-primary-700">{item.price}</p>
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-dental-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                Schnelle Lieferung in 1–2 Werktagen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
