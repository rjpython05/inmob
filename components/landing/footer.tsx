import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-montserrat">
              Premium Real Estate
            </h3>
            <p className="text-sm leading-relaxed">
              Tu socio de confianza para encontrar el hogar perfecto.
              Experiencia, profesionalismo y dedicación en cada transacción.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/premiumrealestate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/premiumrealestate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/premiumrealestate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/premiumrealestate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/propiedades" className="hover:text-primary transition-colors">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Av. Winston Churchill #1100<br />
                  Santo Domingo, República Dominicana
                </span>
              </li>
              <li>
                <a href="tel:+18095550100" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">+1 (809) 555-0100</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@premiumrealestate.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">info@premiumrealestate.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Lun - Vie: 9:00 AM - 6:00 PM<br />
                  Sábado: 10:00 AM - 2:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Ubicación</h4>
            <div className="aspect-square rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2297471855894!2d-69.93969668509149!3d18.469401987410443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f2b88e6379%3A0x7b9d6f7f7f7f7f7f!2sAv.%20Winston%20Churchill%2C%20Santo%20Domingo!5e0!3m2!1sen!2sdo!4v1234567890123!5m2!1sen!2sdo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de oficina"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} Premium Real Estate. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/terminos" className="text-slate-400 hover:text-primary transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/privacidad" className="text-slate-400 hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
