import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Plans } from "@/components/plans"
import { Services } from "@/components/services"
import { ChannelLineup } from "@/components/channel-lineup"
import { MobileService } from "@/components/mobile-service"
import { BusinessHours } from "@/components/business-hours"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#170a26]">
      <Header />
      <Hero />
      <Plans />
      <Services />
      <ChannelLineup />
      <MobileService />
      <BusinessHours />
      <CTASection />
      <Footer />
    </main>
  )
}
