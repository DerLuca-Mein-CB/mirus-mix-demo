'use client'

import Link from 'next/link'
import { useCart } from '@/lib/CartContext'
import { useState } from 'react'
import { ShoppingCart, ImageOff, Lock, Zap, Phone, RotateCcw, ArrowRight } from 'lucide-react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart()
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <ShoppingCart className="w-20 h-20 text-slate-300" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Ihr Warenkorb ist leer</h1>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            Entdecken Sie unsere tolle Auswahl an Kinderzugabeartikeln und Praxisbedarf.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all hover:shadow-lg"
          >
            Jetzt stöbern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  const shipping = totalPrice >= 75 ? 0 : 5.90
  const grandTotal = totalPrice + shipping

  return (
    <div className="bg-slate-50 min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Warenkorb</h1>
          <button
            onClick={clearCart}
            className="text-sm text-slate-500 hover:text-red-600 transition-colors"
          >
            Warenkorb leeren
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex gap-4 items-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-sky-50 rounded-xl overflow-hidden flex items-center justify-center">
                  {imgErrors[item.product.id] ? (
                    <ImageOff className="w-8 h-8 text-slate-300" />
                  ) : (
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain p-2"
                      onError={() => setImgErrors((prev) => ({ ...prev, [item.product.id]: true }))}
                    />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.product.id}`}
                    className="font-semibold text-slate-800 hover:text-primary-700 transition-colors line-clamp-1"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {item.product.pieces} {item.product.unit} · {item.product.unit_price.toFixed(2).replace('.', ',')} € / {item.product.unit}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center bg-slate-100 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-slate-600 hover:text-slate-900 font-bold transition-colors"
                      >
                        −
                      </button>
                      <span className="px-3 py-1.5 font-semibold text-slate-800 min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-slate-600 hover:text-slate-900 font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-sm text-red-500 hover:text-red-700 transition-colors ml-auto"
                    >
                      Entfernen
                    </button>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-bold text-slate-900">
                    {(item.product.price * item.quantity).toFixed(2).replace('.', ',')} €
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Bestellübersicht</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Zwischensumme</span>
                  <span>{totalPrice.toFixed(2).replace('.', ',')} €</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Versand</span>
                  <span>{shipping === 0 ? <span className="text-dental-green font-semibold">Kostenlos</span> : `${shipping.toFixed(2).replace('.', ',')} €`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-slate-400">Kostenloser Versand ab 75,00 €</p>
                )}
                <div className="border-t pt-3 flex justify-between text-lg font-bold text-slate-900">
                  <span>Gesamt</span>
                  <span>{grandTotal.toFixed(2).replace('.', ',')} €</span>
                </div>
                <p className="text-xs text-slate-400">inkl. MwSt.</p>
              </div>

              <button className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all hover:shadow-lg active:scale-[0.98]">
                Zur Kasse (Demo)
              </button>

              <Link
                href="/products"
                className="block text-center text-sm text-primary-600 hover:text-primary-700 mt-4 transition-colors"
              >
                ← Weiter einkaufen
              </Link>

              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-2 gap-3 text-center text-xs text-slate-500">
                  <div className="p-2 bg-slate-50 rounded-lg flex flex-col items-center gap-1">
                    <Lock className="w-4 h-4" /> Sicherer Kauf
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg flex flex-col items-center gap-1">
                    <Zap className="w-4 h-4" /> 1-2 Werktage
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg flex flex-col items-center gap-1">
                    <Phone className="w-4 h-4" /> Persönliche Beratung
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg flex flex-col items-center gap-1">
                    <RotateCcw className="w-4 h-4" /> Einfache Retoure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
