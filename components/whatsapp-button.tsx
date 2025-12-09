"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"
import { getWhatsAppLink } from "@/lib/utils"

interface WhatsAppButtonProps {
  phone?: string
  message?: string
}

export function WhatsAppButton({
  phone = "+18095550100",
  message = "Hola, quisiera información sobre sus servicios"
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* Tooltip */}
        {isHovered && (
          <div className="bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
            ¿Necesitas ayuda?
          </div>
        )}

        {/* Main Button */}
        <a
          href={getWhatsAppLink(phone, message)}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group"
          aria-label="Contactar por WhatsApp"
        >
          <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 animate-pulse hover:animate-none">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          {/* Online Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
        </a>

        {/* Close Button (optional) */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-slate-600 transition-colors p-2"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </>
  )
}
