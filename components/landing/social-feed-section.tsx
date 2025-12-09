"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Heart, MessageCircle } from "lucide-react"

interface SocialPost {
  id: string
  image: string
  caption: string
  likes: number
  comments: number
  link: string
}

// Mock data - In production, this would come from Instagram Basic Display API
const MOCK_POSTS: SocialPost[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop",
    caption: "Nueva propiedad disponible en Santo Domingo",
    likes: 245,
    comments: 18,
    link: "https://instagram.com/p/example1",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop",
    caption: "Casa moderna con piscina",
    likes: 189,
    comments: 12,
    link: "https://instagram.com/p/example2",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
    caption: "Apartamento con vista al mar",
    likes: 312,
    comments: 25,
    link: "https://instagram.com/p/example3",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=400&fit=crop",
    caption: "Villa de lujo en Punta Cana",
    likes: 456,
    comments: 34,
    link: "https://instagram.com/p/example4",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=400&h=400&fit=crop",
    caption: "Penthouse con terraza panorámica",
    likes: 287,
    comments: 21,
    link: "https://instagram.com/p/example5",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=400&h=400&fit=crop",
    caption: "Casa familiar en zona exclusiva",
    likes: 198,
    comments: 15,
    link: "https://instagram.com/p/example6",
  },
]

export function SocialFeedSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-montserrat">
            Síguenos en Redes Sociales
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Mantente al día con nuestras últimas propiedades y novedades
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <a
                href="https://instagram.com/premiumrealestate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Síguenos en Instagram
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <a
                href="https://facebook.com/premiumrealestate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Síguenos en Facebook
              </a>
            </Button>
          </div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {MOCK_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                <p className="text-sm text-center mb-4 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
