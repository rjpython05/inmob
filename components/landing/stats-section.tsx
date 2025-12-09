"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Home, Users, Award, TrendingUp } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  value: number
  suffix?: string
  label: string
  prefix?: string
}

const STATS: Stat[] = [
  {
    icon: <Home className="w-8 h-8" />,
    value: 850,
    suffix: "+",
    label: "Propiedades Vendidas",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 15,
    suffix: "+",
    label: "Años de Experiencia",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: 500,
    suffix: "+",
    label: "Clientes Satisfechos",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    prefix: "$",
    value: 125,
    suffix: "M+",
    label: "Valor Transado",
  },
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, value, duration])

  return <span ref={countRef}>{count}</span>
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Números que Impresionan
          </h2>
          <p className="text-xl text-white/90">
            Nuestra trayectoria habla por sí misma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="p-8 text-center space-y-4">
                <div className="flex justify-center text-white/90">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-white font-montserrat">
                    {stat.prefix}
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix}
                  </p>
                </div>
                <p className="text-lg text-white/90 font-medium">
                  {stat.label}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
