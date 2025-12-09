"use client"

import { useState } from "react"
import { PropertyCard } from "@/components/property/property-card"
import { PropertyFilters } from "@/components/filters/property-filters"
import { Button } from "@/components/ui/button"
import { LayoutGrid, Map, SlidersHorizontal } from "lucide-react"

// Mock data - In production, fetch from API
const MOCK_PROPERTIES = [
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
  {
    id: "7",
    title: "Villa Caribeña con Jardín",
    price: 680000,
    address: "Cap Cana",
    city: "Punta Cana",
    bedrooms: 4,
    bathrooms: 3.5,
    squareMeters: 400,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "Ana Martínez",
  },
  {
    id: "8",
    title: "Apartamento Ejecutivo",
    price: 210000,
    address: "Naco",
    city: "Santo Domingo",
    bedrooms: 2,
    bathrooms: 2,
    squareMeters: 110,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    status: "AVAILABLE" as const,
    agentName: "Luis Fernández",
  },
]

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid")
  const [showFilters, setShowFilters] = useState(true)
  const [filteredProperties, setFilteredProperties] = useState(MOCK_PROPERTIES)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 font-montserrat">
                Propiedades Disponibles
              </h1>
              <p className="text-slate-600 mt-1">
                {filteredProperties.length} propiedades encontradas
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Filter Toggle (Mobile) */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                Filtros
              </Button>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="gap-2"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span className="hidden sm:inline">Grid</span>
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                  className="gap-2"
                >
                  <Map className="w-4 h-4" />
                  <span className="hidden sm:inline">Mapa</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="lg:w-80 flex-shrink-0">
              <PropertyFilters
                onFilterChange={(filters) => {
                  // In production, apply filters to API call
                  console.log("Filters:", filters)
                }}
              />
            </aside>
          )}

          {/* Properties Grid/Map */}
          <div className="flex-1">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-4 h-[calc(100vh-200px)]">
                <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">
                      Vista de Mapa
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      Integración con Mapbox próximamente
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Pagination */}
            {viewMode === "grid" && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" disabled>
                    Anterior
                  </Button>
                  <Button variant="default">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">
                    Siguiente
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
