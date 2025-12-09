"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, Calendar, Heart, Share2, Eye } from "lucide-react"
import { getWhatsAppLink, getInitials, formatDate } from "@/lib/utils"
import Link from "next/link"

interface PropertySidebarProps {
  property: any
}

export function PropertySidebar({ property }: PropertySidebarProps) {
  const { agent } = property

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* Agent Card */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Agente Asignado
        </h3>

        <div className="flex items-start gap-4 mb-6">
          {agent.image ? (
            <img
              src={agent.image}
              alt={agent.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">
                {getInitials(agent.name)}
              </span>
            </div>
          )}

          <div className="flex-1">
            <h4 className="font-bold text-slate-900">{agent.name}</h4>
            <p className="text-sm text-slate-600">{agent.title}</p>
            <p className="text-xs text-slate-500 mt-1">{agent.specialty}</p>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href={`tel:${agent.phone}`}
            className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <p className="text-xs text-slate-600">Teléfono</p>
              <p className="text-sm font-medium text-slate-900">{agent.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${agent.email}`}
            className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Mail className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <p className="text-xs text-slate-600">Email</p>
              <p className="text-sm font-medium text-slate-900 truncate">{agent.email}</p>
            </div>
          </a>
        </div>
      </Card>

      {/* CTAs */}
      <Card className="p-6 space-y-3">
        <Button asChild className="w-full" size="lg">
          <Link href={`/agendar?property=${property.id}`}>
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Visita
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="w-full"
          size="lg"
        >
          <a
            href={getWhatsAppLink(
              agent.phone,
              `Hola, me interesa la propiedad "${property.title}" (${property.propertyCode}). ¿Podrías darme más información?`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Consultar por WhatsApp
          </a>
        </Button>

        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200">
          <Button variant="outline" className="gap-2">
            <Heart className="w-4 h-4" />
            Guardar
          </Button>
          <Button variant="outline" className="gap-2">
            <Share2 className="w-4 h-4" />
            Compartir
          </Button>
        </div>
      </Card>

      {/* Property Info */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Información Adicional
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-600">Código</span>
            <span className="font-medium text-slate-900">{property.propertyCode}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Publicado</span>
            <span className="font-medium text-slate-900">
              {formatDate(property.publishedAt)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600">Vistas</span>
            <span className="flex items-center gap-1 font-medium text-slate-900">
              <Eye className="w-4 h-4" />
              {property.views}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Estado</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              property.status === "AVAILABLE"
                ? "bg-green-100 text-green-700"
                : property.status === "RESERVED"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}>
              {property.status === "AVAILABLE"
                ? "Disponible"
                : property.status === "RESERVED"
                ? "Reservada"
                : "Vendida"}
            </span>
          </div>
        </div>
      </Card>

      {/* Safety Notice */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <p className="text-xs text-blue-900">
          <strong>💡 Consejo:</strong> Verifica siempre la propiedad en persona
          antes de realizar cualquier pago. Nuestros agentes te acompañarán
          en todo el proceso.
        </p>
      </Card>
    </div>
  )
}
