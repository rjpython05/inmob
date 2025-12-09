import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Bed, Bath, Maximize, MapPin, User } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export interface PropertyCardProps {
  id: string
  title: string
  price: number
  address: string
  city: string
  bedrooms: number
  bathrooms: number
  squareMeters: number
  image: string
  status: "AVAILABLE" | "RESERVED" | "SOLD"
  isFavorite?: boolean
  agentName?: string
  agentImage?: string
}

export function PropertyCard({
  id,
  title,
  price,
  address,
  city,
  bedrooms,
  bathrooms,
  squareMeters,
  image,
  status,
  isFavorite = false,
  agentName,
  agentImage,
}: PropertyCardProps) {
  const statusConfig = {
    AVAILABLE: { label: "Disponible", className: "bg-green-500" },
    RESERVED: { label: "Reservada", className: "bg-yellow-500" },
    SOLD: { label: "Vendida", className: "bg-red-500" },
  }

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link href={`/propiedades/${id}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Status Badge */}
        <div className={`absolute top-4 left-4 ${statusConfig[status].className} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
          {statusConfig[status].label}
        </div>

        {/* Favorite Button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          aria-label="Agregar a favoritos"
        >
          <Heart
            className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-slate-600"}`}
          />
        </button>

        {/* Agent Avatar */}
        {agentName && (
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            {agentImage ? (
              <img
                src={agentImage}
                alt={agentName}
                className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary border-2 border-white shadow-lg flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Price */}
        <div className="flex items-baseline justify-between">
          <p className="text-3xl font-bold text-primary font-montserrat">
            {formatCurrency(price)}
          </p>
        </div>

        {/* Title */}
        <Link href={`/propiedades/${id}`}>
          <h3 className="text-xl font-bold text-slate-900 line-clamp-1 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-center gap-2 text-slate-600">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <p className="text-sm line-clamp-1">{address}, {city}</p>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <Bed className="w-5 h-5 text-slate-400" />
            <span className="text-sm font-medium text-slate-700">{bedrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-slate-400" />
            <span className="text-sm font-medium text-slate-700">{bathrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-5 h-5 text-slate-400" />
            <span className="text-sm font-medium text-slate-700">{squareMeters}m²</span>
          </div>
        </div>

        {/* CTA */}
        <Button asChild className="w-full" variant="outline">
          <Link href={`/propiedades/${id}`}>
            Ver Detalles
          </Link>
        </Button>
      </div>
    </Card>
  )
}
