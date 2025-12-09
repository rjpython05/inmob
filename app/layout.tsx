import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Premium Real Estate - Tu hogar ideal te espera",
  description: "Encuentra tu hogar ideal con la mejor asesoría inmobiliaria. Más de 500 familias felices nos respaldan. Asesoría personalizada, transparencia total.",
  keywords: ["inmobiliaria", "propiedades", "casas", "apartamentos", "venta", "alquiler"],
  authors: [{ name: "Premium Real Estate" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://premiumrealestate.com",
    title: "Premium Real Estate - Tu hogar ideal te espera",
    description: "Encuentra tu hogar ideal con la mejor asesoría inmobiliaria.",
    siteName: "Premium Real Estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Real Estate - Tu hogar ideal te espera",
    description: "Encuentra tu hogar ideal con la mejor asesoría inmobiliaria.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
