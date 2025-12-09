import { Card } from "@/components/ui/card"
import { Search, Calendar, FileText, Key } from "lucide-react"

const STEPS = [
  {
    number: 1,
    icon: <Search className="w-10 h-10" />,
    title: "Explora",
    description: "Navega nuestro catálogo de propiedades premium y encuentra las que se ajustan a tus necesidades y presupuesto.",
  },
  {
    number: 2,
    icon: <Calendar className="w-10 h-10" />,
    title: "Visita",
    description: "Agenda una cita para visitar las propiedades de tu interés. Presencial o virtual, tú decides.",
  },
  {
    number: 3,
    icon: <FileText className="w-10 h-10" />,
    title: "Negocia",
    description: "Te asesoramos en todo el proceso de negociación y documentación legal con total transparencia.",
  },
  {
    number: 4,
    icon: <Key className="w-10 h-10" />,
    title: "Cierra",
    description: "Finaliza la compra y recibe las llaves de tu nuevo hogar. Estaremos contigo hasta el último momento.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-montserrat">
            ¿Cómo Funciona?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Un proceso simple y transparente para encontrar tu hogar ideal
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20 mx-auto" style={{ width: "80%", left: "10%" }}></div>

          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <div className="p-6 text-center space-y-4">
                  {/* Step number */}
                  <div className="relative inline-block">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center text-primary">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-montserrat">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
