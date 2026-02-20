import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Bewertungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hunderte von Zahnarztpraxen vertrauen täglich auf Mirus Mix.
            Lesen Sie, was sie über unsere Produkte und unseren Service sagen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-200 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-dental-green-light flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-500">{testimonial.practice}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: '500+', label: 'zufriedene Praxen' },
            { value: '10+', label: 'Jahre Erfahrung' },
            { value: '4,9/5', label: 'Kundenbewertung' },
          ].map((item) => (
            <div key={item.label} className="px-6">
              <div className="text-3xl font-bold text-primary-700">{item.value}</div>
              <div className="text-sm text-slate-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
