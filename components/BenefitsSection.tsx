import { Gift, Tag, Zap, Handshake, type LucideIcon } from 'lucide-react'
import { benefits } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  gift: Gift,
  tag: Tag,
  zap: Zap,
  handshake: Handshake,
}

export default function BenefitsSection() {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] ?? Gift
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-dental-blue-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
