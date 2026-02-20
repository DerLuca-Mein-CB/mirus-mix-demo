'use client'

import { useState } from 'react'
import { useCart } from '@/lib/CartContext'
import { Product } from '@/lib/data'
import Link from 'next/link'
import { ShoppingCart, Check } from 'lucide-react'

export default function AddToCartSection({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Quantity */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-slate-600">Menge:</span>
        <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2.5 hover:bg-slate-50 transition-colors text-slate-600 font-medium"
          >
            −
          </button>
          <span className="px-6 py-2.5 font-semibold text-slate-800 border-x border-slate-200 min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2.5 hover:bg-slate-50 transition-colors text-slate-600 font-medium"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 ${
          added
            ? 'bg-dental-green text-white scale-[0.98]'
            : 'bg-primary-600 hover:bg-primary-700 text-white hover:shadow-lg active:scale-[0.98]'
        }`}
      >
        {added ? (
        <><Check className="w-5 h-5" /> In den Warenkorb gelegt!</>
      ) : (
        <><ShoppingCart className="w-5 h-5" /> In den Warenkorb</>
      )}
      </button>

      {added && (
        <Link
          href="/cart"
          className="block w-full py-3 px-6 rounded-xl font-semibold text-base border-2 border-primary-600 text-primary-700 hover:bg-primary-50 transition-colors text-center"
        >
          Zum Warenkorb →
        </Link>
      )}

      {/* Info */}
      <div className="flex flex-col gap-2 pt-2">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <svg className="w-4 h-4 text-dental-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Lieferzeit: 1–2 Werktage
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <svg className="w-4 h-4 text-dental-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Kostenloser Versand ab 50 €
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <svg className="w-4 h-4 text-dental-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          30 Tage Rückgaberecht
        </div>
      </div>
    </div>
  )
}
