'use client'

import Link from 'next/link'
import { Product } from '@/lib/data'
import { useCart } from '@/lib/CartContext'
import { useState } from 'react'
import { Star, ImageOff, Check } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100 hover:border-primary-200 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50 aspect-square flex items-center justify-center">
          {imgError ? (
            <div className="flex flex-col items-center justify-center gap-2 text-slate-300">
              <ImageOff className="w-12 h-12" />
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isBestseller && (
              <span className="inline-flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
                <Star className="w-3 h-3 fill-current" /> Bestseller
              </span>
            )}
            {product.isNew && (
              <span className="bg-dental-green text-white text-xs font-bold px-2 py-0.5 rounded-full">
                Neu
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-slate-800 text-sm leading-snug mb-1 group-hover:text-primary-700 transition-colors line-clamp-2">
            {product.name}, {product.pieces} {product.unit}
          </h3>

          <div className="mt-auto pt-3">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-xl font-bold text-slate-900">
                {product.price.toFixed(2).replace('.', ',')} €
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-3">
              {product.unit_price.toFixed(2).replace('.', ',')} € / {product.unit}
            </p>

            <button
              onClick={handleAddToCart}
              className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-dental-green text-white scale-95'
                  : 'bg-primary-600 hover:bg-primary-700 text-white hover:shadow-md active:scale-95'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Hinzugefügt
                </>
              ) : (
                'In den Warenkorb'
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
