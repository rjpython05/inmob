"use client"

import { PropertyCard } from "./property-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SimilarPropertiesProps {
  currentPropertyId: string
}

// Mock data
const SIMILAR_PROPERTIES = [
  {
    id: "2",
    title: "Casa Moderna en Zona Exclusiva",
    price: 480000,
    address: "Av. Sarasota",
    city: "Santo Domingo",
    bedrooms: 4,
    bathrooms: 3,
    squareMeters: 320,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "Carlos Rodríguez",
  },
  {
    id: "3",
    title: "Villa de Lujo Frente al Mar",
    price: 820000,
    address: "Playa Bávaro",
    city: "Punta Cana",
    bedrooms: 5,
    bathrooms: 4.5,
    squareMeters: 480,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "Ana Martínez",
  },
  {
    id: "4",
    title: "Residencia Premium con Jardín",
    price: 525000,
    address: "Los Cacicazgos",
    city: "Santo Domingo",
    bedrooms: 4,
    bathrooms: 3.5,
    squareMeters: 380,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "Luis Fernández",
  },
  {
    id: "5",
    title: "Casa Contemporánea",
    price: 395000,
    address: "Arroyo Hondo",
    city: "Santo Domingo",
    bedrooms: 3,
    bathrooms: 2.5,
    squareMeters: 280,
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "María González",
  },
]

export function SimilarProperties({ currentPropertyId }: SimilarPropertiesProps) {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 3

  const next = () => {
    if (startIndex + itemsPerPage < SIMILAR_PROPERTIES.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  const visibleProperties = SIMILAR_PROPERTIES.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-slate-900 font-montserrat">
          Propiedades Similares
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            disabled={startIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            disabled={startIndex + itemsPerPage >= SIMILAR_PROPERTIES.length}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  )
}
