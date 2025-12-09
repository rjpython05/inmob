"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyGalleryProps {
  images: string[]
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {/* Main Image */}
          <div
            className="col-span-4 md:col-span-2 md:row-span-2 cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => openLightbox(0)}
          >
            <img
              src={images[0]}
              alt="Imagen principal"
              className="w-full h-full object-cover aspect-[4/3] transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Thumbnail Grid */}
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index + 1}
              className="col-span-2 md:col-span-1 cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => openLightbox(index + 1)}
            >
              <img
                src={image}
                alt={`Imagen ${index + 2}`}
                className="w-full h-full object-cover aspect-[4/3] transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    +{images.length - 5}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] p-4">
            <img
              src={images[selectedImage]}
              alt={`Imagen ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            <p className="text-white text-center mt-4">
              {selectedImage + 1} de {images.length}
            </p>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? "border-white scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
