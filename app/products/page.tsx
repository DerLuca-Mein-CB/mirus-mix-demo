'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/lib/data'
import { Package, Gift, Stethoscope, Mail, Star, Search } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const categoryIconMap: Record<string, LucideIcon> = {
  all: Package,
  kinderzugabeartikel: Gift,
  'praxis-prophylaxebedarf': Stethoscope,
  karten: Mail,
  bestseller: Star,
}

const allCategories = [
  { name: 'Alle Produkte', slug: 'all' },
  ...categories,
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    let result = products

    if (selectedCategory !== 'all') {
      if (selectedCategory === 'bestseller') {
        result = result.filter((p) => p.isBestseller)
      } else {
        result = result.filter((p) => p.category === selectedCategory)
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }

    return result
  }, [selectedCategory, searchQuery])

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-800 to-dental-green-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Alle Produkte
          </h1>
          <p className="text-white/70">
            {products.length} Artikel für Ihre Zahnarztpraxis
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Produkte suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 bg-white text-sm"
            />
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {allCategories.map((cat) => {
              const Icon = categoryIconMap[cat.slug] ?? Package
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === cat.slug
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {cat.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-500 text-sm">
            <span className="font-semibold text-slate-800">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'Produkt' : 'Produkte'} gefunden
          </p>
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="flex justify-center mb-4">
              <Search className="w-16 h-16 text-slate-300" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Keine Produkte gefunden
            </h3>
            <p className="text-slate-500 mb-6">
              Versuchen Sie einen anderen Suchbegriff oder wählen Sie eine andere Kategorie.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              className="bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
