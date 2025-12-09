"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, Star, Award, Users } from "lucide-react"
import { getWhatsAppLink } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

interface HeroSectionProps {
  founderName?: string
  founderTitle?: string
  videoUrl?: string
  fallbackImage?: string
  companyName?: string
  rating?: number
  totalFamilies?: number
  yearsExperience?: number
  phone?: string
  email?: string
  whatsappNumber?: string
}

export function HeroSection({
  founderName = "María González",
  founderTitle = "CEO & Fundadora",
  videoUrl,
  fallbackImage = "/placeholder-founder.jpg",
  companyName = "Premium Real Estate",
  rating = 4.9,
  totalFamilies = 500,
  yearsExperience = 15,
  phone = "+1-809-555-0100",
  email = "info@premiumrealestate.com",
  whatsappNumber = "+18095550100",
}: HeroSectionProps) {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Video */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[9/16] lg:aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
              {videoUrl && !videoError ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onError={() => setVideoError(true)}
                >
                  <source src={videoUrl} type="video/mp4" />
                  <track kind="captions" />
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={fallbackImage}
                    alt={founderName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Video overlay with subtitles hint */}
              {videoUrl && !videoError && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm">
                    <p className="text-center">Subtítulos disponibles</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Logo */}
            <div className="mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary font-montserrat">
                {companyName}
              </h1>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 font-montserrat leading-tight">
              Déjame ayudarte a encontrar tu hogar
            </h2>

            {/* Founder Info */}
            <div className="space-y-2">
              <p className="text-xl font-semibold text-slate-800">{founderName}</p>
              <p className="text-lg text-slate-600">{founderTitle}</p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 py-4">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <div>
                  <p className="font-bold text-slate-900">{rating}/5</p>
                  <p className="text-xs text-slate-600">Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <Award className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-bold text-slate-900">{yearsExperience} Años</p>
                  <p className="text-xs text-slate-600">Experiencia</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-bold text-slate-900">{totalFamilies}+</p>
                  <p className="text-xs text-slate-600">Familias Felices</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-base font-semibold">
                <Link href="/propiedades">Ver Propiedades</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base font-semibold">
                <Link href="#contacto">Asesoría Gratuita</Link>
              </Button>
            </div>

            {/* Contact Icons */}
            <div className="flex gap-4 pt-4 border-t border-slate-200">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors"
                aria-label="Llamar"
              >
                <div className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Llamar</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <div className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Email</span>
              </a>

              <a
                href={getWhatsAppLink(whatsappNumber, "Hola, quisiera información sobre sus servicios")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <div className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
