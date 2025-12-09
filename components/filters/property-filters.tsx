"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

interface PropertyFiltersProps {
  onFilterChange: (filters: FilterValues) => void
}

export interface FilterValues {
  location: string
  propertyType: string
  priceMin: number
  priceMax: number
  bedrooms: number | null
  bathrooms: number | null
  squareMetersMin: number
  squareMetersMax: number
  amenities: string[]
  status: string
}

const PROPERTY_TYPES = [
  { value: "", label: "Todos" },
  { value: "HOUSE", label: "Casa" },
  { value: "APARTMENT", label: "Apartamento" },
  { value: "LAND", label: "Terreno" },
  { value: "COMMERCIAL", label: "Comercial" },
  { value: "PENTHOUSE", label: "Penthouse" },
  { value: "VILLA", label: "Villa" },
]

const AMENITIES = [
  "Piscina",
  "Jardín",
  "Garaje",
  "Seguridad 24/7",
  "Gimnasio",
  "Área de juegos",
  "Terraza",
  "Balcón",
  "Vista al mar",
  "Amueblado",
  "Cocina equipada",
  "Aire acondicionado",
]

const STATUS_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "AVAILABLE", label: "Disponible" },
  { value: "RESERVED", label: "Reservada" },
]

export function PropertyFilters({ onFilterChange }: PropertyFiltersProps) {
  const [filters, setFilters] = useState<FilterValues>({
    location: "",
    propertyType: "",
    priceMin: 0,
    priceMax: 2000000,
    bedrooms: null,
    bathrooms: null,
    squareMetersMin: 0,
    squareMetersMax: 1000,
    amenities: [],
    status: "",
  })

  const updateFilter = (key: keyof FilterValues, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const toggleAmenity = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity]
    updateFilter("amenities", newAmenities)
  }

  const clearFilters = () => {
    const defaultFilters: FilterValues = {
      location: "",
      propertyType: "",
      priceMin: 0,
      priceMax: 2000000,
      bedrooms: null,
      bathrooms: null,
      squareMetersMin: 0,
      squareMetersMax: 1000,
      amenities: [],
      status: "",
    }
    setFilters(defaultFilters)
    onFilterChange(defaultFilters)
  }

  return (
    <Card className="sticky top-24">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Filtros</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-slate-600 hover:text-slate-900"
          >
            <X className="w-4 h-4 mr-1" />
            Limpiar
          </Button>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Ubicación</Label>
          <Input
            id="location"
            placeholder="Ciudad o zona"
            value={filters.location}
            onChange={(e) => updateFilter("location", e.target.value)}
          />
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <Label htmlFor="propertyType">Tipo de Propiedad</Label>
          <select
            id="propertyType"
            value={filters.propertyType}
            onChange={(e) => updateFilter("propertyType", e.target.value)}
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
        <div className="space-y-3">
          <Label>Rango de Precio</Label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Input
                type="number"
                placeholder="Mínimo"
                value={filters.priceMin || ""}
                onChange={(e) => updateFilter("priceMin", Number(e.target.value))}
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Máximo"
                value={filters.priceMax || ""}
                onChange={(e) => updateFilter("priceMax", Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <Label>Habitaciones</Label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => updateFilter("bedrooms", num)}
                className={`flex-1 h-10 rounded-md border transition-colors ${
                  filters.bedrooms === num
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-slate-700 border-slate-300 hover:border-primary"
                }`}
              >
                {num}+
              </button>
            ))}
          </div>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <Label>Baños</Label>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => updateFilter("bathrooms", num)}
                className={`flex-1 h-10 rounded-md border transition-colors ${
                  filters.bathrooms === num
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-slate-700 border-slate-300 hover:border-primary"
                }`}
              >
                {num}+
              </button>
            ))}
          </div>
        </div>

        {/* Square Meters */}
        <div className="space-y-3">
          <Label>Metros Cuadrados</Label>
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="number"
              placeholder="Min m²"
              value={filters.squareMetersMin || ""}
              onChange={(e) => updateFilter("squareMetersMin", Number(e.target.value))}
            />
            <Input
              type="number"
              placeholder="Max m²"
              value={filters.squareMetersMax || ""}
              onChange={(e) => updateFilter("squareMetersMax", Number(e.target.value))}
            />
          </div>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label htmlFor="status">Estado</Label>
          <select
            id="status"
            value={filters.status}
            onChange={(e) => updateFilter("status", e.target.value)}
            className="w-full h-12 px-4 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        {/* Amenities */}
        <div className="space-y-3">
          <Label>Amenidades</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {AMENITIES.map((amenity) => (
              <label
                key={amenity}
                className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
              >
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                  className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-slate-700">{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <Button className="w-full" size="lg">
          Aplicar Filtros
        </Button>
      </div>
    </Card>
  )
}
