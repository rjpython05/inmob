"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Calendar, Users, TrendingUp, DollarSign, Eye, Plus } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 font-montserrat">
                Panel Administrativo
              </h1>
              <p className="text-slate-600 mt-1">Gestiona tu negocio inmobiliario</p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/admin/propiedades/nueva">
                  <Plus className="w-5 h-5 mr-2" />
                  Nueva Propiedad
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-slate-600">Propiedades Activas</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">42</p>
                <p className="text-sm text-green-600 mt-1">+8 este mes</p>
              </div>
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                <Home className="w-7 h-7 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-slate-600">Citas Esta Semana</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">18</p>
                <p className="text-sm text-green-600 mt-1">+5 vs semana pasada</p>
              </div>
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-7 h-7 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-slate-600">Leads Nuevos</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">27</p>
                <p className="text-sm text-green-600 mt-1">+12 este mes</p>
              </div>
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-7 h-7 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-slate-600">Ingresos Este Mes</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">$125K</p>
                <p className="text-sm text-green-600 mt-1">+18% vs mes pasado</p>
              </div>
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-yellow-600" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sales Chart */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Ventas Mensuales
              </h2>
              <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-600">Gráfico de Ventas</p>
                  <p className="text-sm text-slate-500">Integración con Recharts</p>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Actividad Reciente
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Home,
                    color: "blue",
                    title: "Nueva propiedad publicada",
                    desc: "Villa Moderna - Santo Domingo",
                    time: "Hace 2 horas",
                  },
                  {
                    icon: Calendar,
                    color: "purple",
                    title: "Cita agendada",
                    desc: "Juan Pérez - Casa de Playa",
                    time: "Hace 3 horas",
                  },
                  {
                    icon: Users,
                    color: "green",
                    title: "Nuevo lead",
                    desc: "María López - Interesada en apartamentos",
                    time: "Hace 5 horas",
                  },
                  {
                    icon: DollarSign,
                    color: "yellow",
                    title: "Venta cerrada",
                    desc: "Penthouse - $550,000",
                    time: "Hace 1 día",
                  },
                ].map((activity, i) => {
                  const Icon = activity.icon
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 bg-${activity.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`w-5 h-5 text-${activity.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">
                          {activity.title}
                        </h4>
                        <p className="text-sm text-slate-600">{activity.desc}</p>
                        <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Properties */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Propiedades Más Vistas
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3">
                    <img
                      src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&h=100&fit=crop`}
                      alt="Property"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 text-sm truncate">
                        Villa Moderna
                      </h4>
                      <p className="text-xs text-slate-600">Santo Domingo</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Eye className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-600">127 vistas</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">Acciones Rápidas</h3>
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/admin/propiedades">
                    <Home className="w-4 h-4 mr-2" />
                    Gestionar Propiedades
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/admin/citas">
                    <Calendar className="w-4 h-4 mr-2" />
                    Ver Calendario
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/admin/leads">
                    <Users className="w-4 h-4 mr-2" />
                    Gestionar Leads
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/admin/reportes">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Ver Reportes
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Team Performance */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">Performance del Equipo</h3>
              <div className="space-y-3">
                {[
                  { name: "María González", sales: 8, color: "blue" },
                  { name: "Carlos Rodríguez", sales: 6, color: "green" },
                  { name: "Ana Martínez", sales: 5, color: "purple" },
                ].map((agent) => (
                  <div key={agent.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-900">
                        {agent.name}
                      </span>
                      <span className="text-sm text-slate-600">
                        {agent.sales} ventas
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${agent.color}-500`}
                        style={{ width: `${(agent.sales / 10) * 100}%` }}
                      />
                    </div>
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
