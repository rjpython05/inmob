import { HeroSection } from "@/components/landing/hero-section"
import { QuickSearchBar } from "@/components/landing/quick-search-bar"
import { AboutSection } from "@/components/landing/about-section"
import { StatsSection } from "@/components/landing/stats-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { LatestPropertiesSection } from "@/components/landing/latest-properties-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { SocialFeedSection } from "@/components/landing/social-feed-section"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Founder Video */}
      <HeroSection />

      {/* Quick Search Bar */}
      <QuickSearchBar />

      {/* About Us Section */}
      <AboutSection />

      {/* Stats Section */}
      <StatsSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Latest Properties */}
      <LatestPropertiesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Social Media Feed */}
      <SocialFeedSection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  )
}
