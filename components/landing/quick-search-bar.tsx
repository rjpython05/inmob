"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Home, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"

const PROPERTY_TYPES = [
  { value: "all", label: "Todos" },
  { value: "HOUSE", label: "Casa" },
  { value: "APARTMENT", label: "Apartamento" },
  { value: "LAND", label: "Terreno" },
  { value: "COMMERCIAL", label: "Comercial" },
  { value: "PENTHOUSE", label: "Penthouse" },
  { value: "VILLA", label: "Villa" },
]

const LOCATIONS = [
  { value: "all", label: "Todas las ubicaciones" },
  { value: "santo-domingo", label: "Santo Domingo" },
  { value: "santiago", label: "Santiago" },
  { value: "punta-cana", label: "Punta Cana" },
  { value: "la-romana", label: "La Romana" },
  { value: "puerto-plata", label: "Puerto Plata" },
]

const PRICE_RANGES = [
  { value: "all", label: "Cualquier precio" },
  { value: "0-100000", label: "Hasta $100,000" },
  { value: "100000-250000", label: "$100,000 - $250,000" },
  { value: "250000-500000", label: "$250,000 - $500,000" },
  { value: "500000-1000000", label: "$500,000 - $1M" },
  { value: "1000000-plus", label: "Más de $1M" },
]

export function QuickSearchBar() {
  const router = useRouter()
  const [location, setLocation] = useState("all")
  const [propertyType, setPropertyType] = useState("all")
  const [priceRange, setPriceRange] = useState("all")

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (location !== "all") params.set("location", location)
    if (propertyType !== "all") params.set("type", propertyType)
    if (priceRange !== "all") params.set("price", priceRange)

    router.push(`/propiedades?${params.toString()}`)
  }

  return (
    <section className="py-8 -mt-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center md:text-left">
            Encuentra tu propiedad ideal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <MapPin className="w-4 h-4" />
                Ubicación
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-12 px-4 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Home className="w-4 h-4" />
                Tipo de Propiedad
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full h-12 px-4 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {PROPERTY_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <DollarSign className="w-4 h-4" />
                Rango de Precio
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full h-12 px-4 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {PRICE_RANGES.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-transparent">
                Search
              </label>
              <Button
                onClick={handleSearch}
                className="w-full h-12 text-base font-semibold"
                size="lg"
              >
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
