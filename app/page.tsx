'use client'

import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import ProductCard from '@/components/ProductCard'
import TestimonialsSection from '@/components/TestimonialsSection'
import { products, categories } from '@/lib/data'
import { Star, Gift, Stethoscope, Mail, Phone, type LucideIcon } from 'lucide-react'

const bestsellers = products.filter((p) => p.isBestseller).slice(0, 8)

const categoryIconMap: Record<string, LucideIcon> = {
  gift: Gift,
  stethoscope: Stethoscope,
  mail: Mail,
  star: Star,
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                <Star className="w-3.5 h-3.5 fill-current" /> Bestseller
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Unsere beliebtesten Produkte
              </h2>
              <p className="text-slate-500 mt-2">
                Von Zahnarztpraxen deutschlandweit am häufigsten bestellt
              </p>
            </div>
            <Link
              href="/products"
              className="flex-shrink-0 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Alle Produkte anzeigen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-dental-green-light text-dental-green-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Kategorien
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Unser Sortiment
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Von Kinderzugabeartikeln über Prophylaxebedarf bis hin zu
              Recall-Karten – alles für Ihre Praxis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const Icon = categoryIconMap[cat.icon] ?? Gift
              return (
                <Link
                  key={cat.slug}
                  href={`/products?category=${cat.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`bg-gradient-to-br ${cat.color} p-8 h-full min-h-[180px] flex flex-col justify-between`}
                  >
                    <div className="mb-4">
                      <Icon className="w-12 h-12 text-white/90" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight mb-1">
                        {cat.name}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-primary-700 to-dental-green-dark py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit für glückliche kleine Patienten?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Entdecken Sie unser komplettes Sortiment und bestellen Sie noch heute.
            Bei Fragen sind wir persönlich für Sie da.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all hover:shadow-lg"
            >
              Jetzt bestellen
            </Link>
            <a
              href="tel:+4906203-64668"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-4 h-4" /> Anrufen
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
