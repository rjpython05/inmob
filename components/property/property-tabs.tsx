"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { FileText, Home, MapPin, Play } from "lucide-react"
import { MortgageCalculator } from "./mortgage-calculator"

interface PropertyTabsProps {
  property: any
}

export function PropertyTabs({ property }: PropertyTabsProps) {
  const [activeTab, setActiveTab] = useState("description")

  const tabs = [
    { id: "description", label: "Descripción", icon: FileText },
    { id: "features", label: "Características", icon: Home },
    { id: "location", label: "Ubicación", icon: MapPin },
    { id: "multimedia", label: "Multimedia", icon: Play },
  ]

  return (
    <div>
      {/* Tabs Header */}
      <div className="flex gap-2 border-b border-slate-200 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tabs Content */}
      <div className="mt-6">
        {activeTab === "description" && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">
              Sobre esta propiedad
            </h2>
            <div className="prose max-w-none">
              {property.description.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-slate-700 mb-4 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Amenidades
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity: string) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}

        {activeTab === "features" && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-montserrat">
              Características Detalladas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(property.features).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center py-3 border-b border-slate-100"
                >
                  <span className="font-medium text-slate-700">{key}</span>
                  <span className="text-slate-900">{value as string}</span>
                </div>
              ))}
            </div>

            {/* Mortgage Calculator */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Calculadora de Hipoteca
              </h3>
              <MortgageCalculator propertyPrice={property.price} />
            </div>
          </Card>
        )}

        {activeTab === "location" && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">
              Ubicación
            </h2>
            <p className="text-slate-700 mb-6">
              {property.address}, {property.city}, {property.state} {property.zipCode}
            </p>

            {/* Map Placeholder */}
            <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-600">Mapa Interactivo</p>
                <p className="text-sm text-slate-500">
                  Lat: {property.latitude}, Lng: {property.longitude}
                </p>
              </div>
            </div>

            {/* Nearby Places */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Puntos de Interés Cercanos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Colegio Internacional", distance: "800m", icon: "🏫" },
                  { name: "Hospital Central", distance: "1.2km", icon: "🏥" },
                  { name: "Supermercado Nacional", distance: "500m", icon: "🛒" },
                  { name: "Metro Los Próceres", distance: "1.5km", icon: "🚇" },
                  { name: "Parque Mirador Sur", distance: "2km", icon: "🏞️" },
                  { name: "Centro Comercial", distance: "1km", icon: "🏬" },
                ].map((place) => (
                  <div
                    key={place.name}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                  >
                    <span className="text-2xl">{place.icon}</span>
                    <div>
                      <p className="font-medium text-slate-900">{place.name}</p>
                      <p className="text-sm text-slate-600">{place.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}

        {activeTab === "multimedia" && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-montserrat">
              Videos y Tours Virtuales
            </h2>

            <div className="space-y-6">
              {/* Video Tour */}
              {property.videoUrl && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Video Tour
                  </h3>
                  <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                    <Play className="w-16 h-16 text-slate-400" />
                  </div>
                </div>
              )}

              {/* 360 Tour */}
              {property.tour360Url && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Tour Virtual 360°
                  </h3>
                  <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🔄</div>
                      <p className="text-slate-600">Tour 360° Interactivo</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Floor Plans */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Planos de la Propiedad
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Planta Baja", "Planta Alta"].map((floor) => (
                    <div
                      key={floor}
                      className="aspect-[4/3] bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300"
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">📐</div>
                        <p className="text-slate-600">{floor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
