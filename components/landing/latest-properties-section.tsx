import { PropertyCard } from "@/components/property/property-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Mock data - In production, fetch from database
const LATEST_PROPERTIES = [
  {
    id: "1",
    title: "Villa Moderna con Piscina",
    price: 450000,
    address: "Av. Abraham Lincoln",
    city: "Santo Domingo",
    bedrooms: 4,
    bathrooms: 3.5,
    squareMeters: 350,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "María González",
  },
  {
    id: "2",
    title: "Apartamento Moderno Centro",
    price: 185000,
    address: "Calle El Vergel",
    city: "Santo Domingo",
    bedrooms: 2,
    bathrooms: 2,
    squareMeters: 120,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "Carlos Rodríguez",
  },
  {
    id: "3",
    title: "Casa de Playa Punta Cana",
    price: 750000,
    address: "Playa Bávaro",
    city: "Punta Cana",
    bedrooms: 5,
    bathrooms: 4,
    squareMeters: 450,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "Ana Martínez",
  },
  {
    id: "4",
    title: "Penthouse con Vista Panorámica",
    price: 550000,
    address: "Torre Empresarial",
    city: "Santiago",
    bedrooms: 3,
    bathrooms: 3,
    squareMeters: 280,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    status: "RESERVED" as const,
    agentName: "Luis Fernández",
  },
  {
    id: "5",
    title: "Casa Familiar Zona Colonial",
    price: 320000,
    address: "Calle Las Damas",
    city: "Santo Domingo",
    bedrooms: 3,
    bathrooms: 2.5,
    squareMeters: 220,
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "María González",
  },
  {
    id: "6",
    title: "Apartamento de Lujo Marina",
    price: 425000,
    address: "Marina Casa de Campo",
    city: "La Romana",
    bedrooms: 3,
    bathrooms: 3,
    squareMeters: 200,
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "Carlos Rodríguez",
  },
]

export function LatestPropertiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-montserrat">
            Últimas Propiedades
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubre las propiedades más recientes en nuestro catálogo
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {LATEST_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild size="lg" className="text-base font-semibold">
            <Link href="/propiedades">
              Ver Todas las Propiedades
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
