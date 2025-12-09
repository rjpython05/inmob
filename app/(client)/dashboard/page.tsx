"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, FileText, MessageCircle, Bell, User } from "lucide-react"
import Link from "next/link"

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 font-montserrat">
                Mi Dashboard
              </h1>
              <p className="text-slate-600 mt-1">Bienvenido, Juan Pérez</p>
            </div>
            <Button variant="outline" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Favoritos</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">12</p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Citas</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">3</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Documentos</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">5</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Upcoming Appointments */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Próximas Citas
              </h2>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <div className="text-center">
                        <p className="text-2xl font-bold">15</p>
                        <p className="text-xs">ENE</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">
                        Villa Moderna con Piscina
                      </h3>
                      <p className="text-sm text-slate-600">
                        10:00 AM - Visita Presencial
                      </p>
                      <p className="text-sm text-slate-600">
                        Agente: María González
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Reagendar
                      </Button>
                      <Button size="sm" variant="destructive">
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Saved Properties */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900">
                  Propiedades Guardadas
                </h2>
                <Link href="/dashboard/favoritos">
                  <Button variant="outline" size="sm">
                    Ver Todas
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-3 p-3 bg-slate-50 rounded-lg">
                    <img
                      src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=150&fit=crop`}
                      alt="Property"
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 text-sm">
                        Villa Moderna
                      </h4>
                      <p className="text-xs text-slate-600">Santo Domingo</p>
                      <p className="text-sm font-bold text-primary mt-1">
                        $450,000
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="p-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-slate-900">Juan Pérez</h3>
                <p className="text-sm text-slate-600">juan@email.com</p>
                <Button asChild className="w-full mt-4">
                  <Link href="/dashboard/perfil">
                    Editar Perfil
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">Acciones Rápidas</h3>
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/propiedades">
                    <Heart className="w-4 h-4 mr-2" />
                    Ver Propiedades
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/agendar">
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Visita
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/dashboard/documentos">
                    <FileText className="w-4 h-4 mr-2" />
                    Mis Documentos
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/dashboard/chat">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat con Agente
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">Recomendado para Ti</h3>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <img
                      src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=200&fit=crop`}
                      alt="Property"
                      className="w-full h-32 rounded-lg object-cover mb-2"
                    />
                    <h4 className="font-semibold text-slate-900 text-sm">
                      Casa de Playa
                    </h4>
                    <p className="text-xs text-slate-600">Punta Cana</p>
                    <p className="text-sm font-bold text-primary mt-1">
                      $750,000
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
