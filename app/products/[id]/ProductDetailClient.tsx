'use client'

import Link from 'next/link'
import { Product, products } from '@/lib/data'
import AddToCartSection from '@/components/AddToCartSection'
import ProductCard from '@/components/ProductCard'
import { useState } from 'react'

interface Props {
  productId: string
}

export default function ProductDetailClient({ productId }: Props) {
  const [imgError, setImgError] = useState(false)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">🦷</p>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Produkt nicht gefunden</h1>
          <Link href="/products" className="text-primary-600 hover:underline font-medium">
            ← Zurück zur Übersicht
          </Link>
        </div>
      </div>
    )
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-primary-600 transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary-600 transition-colors">Produkte</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 flex items-center justify-center aspect-square relative">
            {imgError ? (
              <div className="text-9xl">🦷</div>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
                onError={() => setImgError(true)}
              />
            )}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isBestseller && (
                <span className="bg-amber-400 text-amber-900 text-sm font-bold px-3 py-1 rounded-full">⭐ Bestseller</span>
              )}
              {product.isNew && (
                <span className="bg-dental-green text-white text-sm font-bold px-3 py-1 rounded-full">Neu</span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-2">
              <span className="inline-block bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
                {product.category.replace(/-/g, ' ')}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              {product.name}
            </h1>
            <p className="text-slate-500 mb-6">{product.pieces} {product.unit} pro Packung</p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">{product.description}</p>

            <div className="bg-slate-50 rounded-2xl p-6 mb-6">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-4xl font-bold text-slate-900">{product.price.toFixed(2).replace('.', ',')} €</span>
                <span className="text-slate-400 text-lg">inkl. MwSt.</span>
              </div>
              <p className="text-slate-500">
                {product.unit_price.toFixed(2).replace('.', ',')} € pro {product.unit} · {product.pieces} Stück
              </p>
            </div>

            <AddToCartSection product={product} />

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-3 bg-sky-50 rounded-xl">
                <p className="text-2xl mb-1">🚀</p>
                <p className="text-xs text-slate-600 font-medium">1-2 Werktage</p>
              </div>
              <div className="text-center p-3 bg-emerald-50 rounded-xl">
                <p className="text-2xl mb-1">✅</p>
                <p className="text-xs text-slate-600 font-medium">Auf Lager</p>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <p className="text-2xl mb-1">📞</p>
                <p className="text-xs text-slate-600 font-medium">Beratung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Ähnliche Produkte</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
