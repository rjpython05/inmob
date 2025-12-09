"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { PropertyGallery } from "@/components/property/property-gallery"
import { PropertyTabs } from "@/components/property/property-tabs"
import { PropertySidebar } from "@/components/property/property-sidebar"
import { SimilarProperties } from "@/components/property/similar-properties"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, Heart } from "lucide-react"
import Link from "next/link"

// Mock data - In production, fetch from API based on ID
const MOCK_PROPERTY = {
  id: "1",
  title: "Villa Moderna con Piscina Infinity",
  description: `Esta espectacular villa moderna combina elegancia contemporánea con comodidad excepcional.
  Ubicada en una de las zonas más exclusivas de Santo Domingo, ofrece vistas panorámicas impresionantes
  y acabados de lujo en cada detalle.

  La propiedad cuenta con amplios espacios diseñados para el entretenimiento y la vida familiar.
  Los ventanales de piso a techo permiten una abundante entrada de luz natural, creando una atmósfera
  luminosa y acogedora en todos los ambientes.

  La cocina gourmet está completamente equipada con electrodomésticos de última generación,
  ideal para los amantes de la gastronomía. El área exterior cuenta con una impresionante piscina
  infinity, zona de BBQ y jardines meticulosamente diseñados.`,
  price: 450000,
  address: "Av. Abraham Lincoln 1234",
  city: "Santo Domingo",
  state: "Distrito Nacional",
  zipCode: "10101",
  type: "HOUSE",
  status: "AVAILABLE",
  bedrooms: 4,
  bathrooms: 3.5,
  squareMeters: 350,
  yearBuilt: 2021,
  features: {
    "Acabados": "Mármol italiano, pisos de madera",
    "Orientación": "Norte",
    "Calefacción/AC": "Aire acondicionado central",
    "Cocina": "Cocina gourmet equipada",
    "Closets": "Walk-in closets en todas las habitaciones",
    "Pisos": "2 niveles",
    "Estacionamiento": "Garaje para 3 vehículos",
    "Seguridad": "Sistema de seguridad 24/7",
  },
  amenities: [
    "Piscina infinity",
    "Jardín tropical",
    "Garaje cubierto",
    "Seguridad 24/7",
    "Gimnasio privado",
    "Área de BBQ",
    "Terraza panorámica",
    "Sistema domótico",
    "Planta eléctrica",
    "Cisterna",
  ],
  images: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200&h=800&fit=crop",
  ],
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  tour360Url: "https://my.matterport.com/show/?m=example",
  latitude: 18.4861,
  longitude: -69.9312,
  agent: {
    id: "1",
    name: "María González",
    title: "CEO & Fundadora",
    specialty: "Propiedades de Lujo",
    phone: "+1-809-555-0100",
    email: "maria@premiumrealestate.com",
    image: null,
  },
  views: 127,
  publishedAt: "2024-01-15T10:00:00.000Z",
  propertyCode: "PRE-001234",
}

export default function PropertyDetailPage() {
  const params = useParams()
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/propiedades">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver a Propiedades
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite ? "fill-red-500 text-red-500" : ""
                  }`}
                />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <PropertyGallery images={MOCK_PROPERTY.images} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Price */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 font-montserrat mb-2">
                    {MOCK_PROPERTY.title}
                  </h1>
                  <p className="text-lg text-slate-600">
                    {MOCK_PROPERTY.address}, {MOCK_PROPERTY.city}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-primary font-montserrat">
                    ${MOCK_PROPERTY.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    Código: {MOCK_PROPERTY.propertyCode}
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 text-slate-700">
                <div>
                  <span className="font-semibold">{MOCK_PROPERTY.bedrooms}</span> Habitaciones
                </div>
                <div>
                  <span className="font-semibold">{MOCK_PROPERTY.bathrooms}</span> Baños
                </div>
                <div>
                  <span className="font-semibold">{MOCK_PROPERTY.squareMeters}</span> m²
                </div>
                <div>
                  <span className="font-semibold">{MOCK_PROPERTY.yearBuilt}</span> Año
                </div>
              </div>
            </div>

            {/* Tabs */}
            <PropertyTabs property={MOCK_PROPERTY} />
          </div>

          {/* Right Sidebar - 1/3 */}
          <div className="lg:col-span-1">
            <PropertySidebar property={MOCK_PROPERTY} />
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-16">
          <SimilarProperties currentPropertyId={MOCK_PROPERTY.id} />
        </div>
      </div>
    </div>
  )
}
