"use client"

import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { getInitials } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  image?: string
  property: string
  quote: string
  rating: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Pedro Jiménez",
    property: "Villa en Punta Cana",
    quote: "Excelente servicio. María y su equipo me ayudaron a encontrar la casa de mis sueños en tiempo récord. Muy profesionales y atentos en cada detalle.",
    rating: 5,
  },
  {
    id: 2,
    name: "Laura Martínez",
    property: "Apartamento en Santo Domingo",
    quote: "Proceso transparente y sin complicaciones. Me mantuvieron informada en todo momento y respondieron todas mis dudas con paciencia.",
    rating: 5,
  },
  {
    id: 3,
    name: "Roberto Sánchez",
    property: "Casa en Santiago",
    quote: "La mejor inversión que he hecho. El equipo me asesoró perfectamente sobre la ubicación y el potencial de revalorización de la propiedad.",
    rating: 5,
  },
  {
    id: 4,
    name: "Carmen Rodríguez",
    property: "Penthouse en La Romana",
    quote: "Superaron mis expectativas. Desde la primera visita hasta la entrega de llaves, todo fue impecable. Totalmente recomendados.",
    rating: 5,
  },
  {
    id: 5,
    name: "Miguel Ángel Torres",
    property: "Local Comercial",
    quote: "Profesionalismo de primer nivel. Me ayudaron con toda la documentación legal y el proceso fue mucho más sencillo de lo que esperaba.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const visibleTestimonials = [
    TESTIMONIALS[currentIndex],
    TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(currentIndex + 2) % TESTIMONIALS.length],
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-montserrat">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow">
                <div className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-700 leading-relaxed">
                    {testimonial.quote}
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {getInitials(testimonial.name)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.property}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-slate-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
