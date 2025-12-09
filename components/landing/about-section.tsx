import { Card } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import { getInitials } from "@/lib/utils"

interface TeamMember {
  name: string
  role: string
  specialty: string
  image?: string
  email: string
  phone: string
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "María González",
    role: "CEO & Fundadora",
    specialty: "Propiedades de Lujo",
    email: "maria@premiumrealestate.com",
    phone: "+1-809-555-0100",
  },
  {
    name: "Carlos Rodríguez",
    role: "Agente Senior",
    specialty: "Inversiones Comerciales",
    email: "carlos@premiumrealestate.com",
    phone: "+1-809-555-0101",
  },
  {
    name: "Ana Martínez",
    role: "Agente Inmobiliario",
    specialty: "Propiedades Residenciales",
    email: "ana@premiumrealestate.com",
    phone: "+1-809-555-0102",
  },
  {
    name: "Luis Fernández",
    role: "Consultor",
    specialty: "Propiedades Costeras",
    email: "luis@premiumrealestate.com",
    phone: "+1-809-555-0103",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-montserrat">
            Conoce a Nuestro Equipo
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Somos un equipo de profesionales apasionados por ayudarte a encontrar
            el hogar perfecto. Con años de experiencia en el mercado inmobiliario,
            te brindamos asesoría personalizada y transparencia total en cada paso
            del proceso.
          </p>
        </div>

        {/* Philosophy */}
        <div className="max-w-4xl mx-auto mb-16 text-center space-y-4">
          <p className="text-slate-700 leading-relaxed">
            En Premium Real Estate, entendemos que comprar una propiedad es una de
            las decisiones más importantes de tu vida. Por eso, nuestro compromiso
            va más allá de una simple transacción: te acompañamos desde la primera
            consulta hasta que tengas las llaves en tu mano.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Nuestra misión es convertir tus sueños de vivienda en realidad,
            ofreciéndote las mejores opciones del mercado con honestidad,
            profesionalismo y dedicación absoluta.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.email} className="group hover:shadow-xl transition-shadow">
              <div className="p-6 text-center space-y-4">
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-slate-100 group-hover:border-primary transition-colors"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-4 border-slate-100 group-hover:border-primary transition-colors">
                      <span className="text-3xl font-bold text-white">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600">
                    {member.specialty}
                  </p>
                </div>

                {/* Contact */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Llamar</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
