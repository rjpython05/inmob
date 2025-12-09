"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Video, MapPin, Check } from "lucide-react"
import Link from "next/link"

function AppointmentForm() {
  const searchParams = useSearchParams()
  const propertyId = searchParams.get("property")

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    type: "IN_PERSON",
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, send to API
    console.log("Appointment data:", { ...formData, propertyId })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            ¡Cita Agendada!
          </h1>
          <p className="text-slate-600 mb-6">
            Hemos recibido tu solicitud. Te enviaremos una confirmación por email
            y SMS en breve.
          </p>
          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link href="/propiedades">Ver Más Propiedades</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 font-montserrat">
            Agenda tu Visita
          </h1>
          <p className="text-lg text-slate-600">
            Elige el día y hora que mejor te convenga
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            {[
              { num: 1, label: "Fecha y Hora" },
              { num: 2, label: "Tipo de Visita" },
              { num: 3, label: "Tus Datos" },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s.num
                      ? "bg-primary text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {s.num}
                </div>
                <span
                  className={`hidden sm:inline ${
                    step >= s.num ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {s.label}
                </span>
                {s.num < 3 && (
                  <div className="w-8 h-0.5 bg-slate-200 mx-2 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Date & Time */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="date">Fecha</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div>
                  <Label htmlFor="time">Hora</Label>
                  <select
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full h-12 px-4 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecciona una hora</option>
                    {[
                      "09:00", "10:00", "11:00", "12:00",
                      "14:00", "15:00", "16:00", "17:00",
                    ].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full"
                  disabled={!formData.date || !formData.time}
                >
                  Continuar
                </Button>
              </div>
            )}

            {/* Step 2: Visit Type */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: "IN_PERSON" })}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      formData.type === "IN_PERSON"
                        ? "border-primary bg-primary/5"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <MapPin className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-slate-900 mb-1">
                      Visita Presencial
                    </h3>
                    <p className="text-sm text-slate-600">
                      Te acompañaremos personalmente en la propiedad
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: "VIDEO_CALL" })}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      formData.type === "VIDEO_CALL"
                        ? "border-primary bg-primary/5"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Video className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-slate-900 mb-1">
                      Videollamada
                    </h3>
                    <p className="text-sm text-slate-600">
                      Tour virtual desde la comodidad de tu hogar
                    </p>
                  </button>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Atrás
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1"
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Info */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje (Opcional)</Label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="¿Algo que quieras que sepamos?"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1"
                  >
                    Atrás
                  </Button>
                  <Button type="submit" className="flex-1">
                    Confirmar Cita
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Card>

        {/* Summary Card */}
        {step > 1 && (
          <Card className="mt-6 p-6 bg-slate-50">
            <h3 className="font-bold text-slate-900 mb-4">Resumen de tu cita</h3>
            <div className="space-y-2 text-sm">
              {formData.date && (
                <div className="flex justify-between">
                  <span className="text-slate-600">Fecha:</span>
                  <span className="font-medium text-slate-900">
                    {new Date(formData.date).toLocaleDateString("es-ES", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
              {formData.time && (
                <div className="flex justify-between">
                  <span className="text-slate-600">Hora:</span>
                  <span className="font-medium text-slate-900">{formData.time}</span>
                </div>
              )}
              {step >= 2 && (
                <div className="flex justify-between">
                  <span className="text-slate-600">Tipo:</span>
                  <span className="font-medium text-slate-900">
                    {formData.type === "IN_PERSON" ? "Presencial" : "Videollamada"}
                  </span>
                </div>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

export default function ScheduleAppointmentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Cargando...</div>}>
      <AppointmentForm />
    </Suspense>
  )
}
