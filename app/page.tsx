import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Plans } from "@/components/plans"
import { Services } from "@/components/services"
import { MobileService } from "@/components/mobile-service"
import { BusinessHours } from "@/components/business-hours"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { TvNetcar } from "@/components/tv-netcar"
import { ChannelLineup } from "@/components/channel-lineup"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0a1a]">
      <Header />
      <TvNetcar />
      <ChannelLineup />
      <Hero />
      <Plans />
      <Services />
      <MobileService />
      <BusinessHours />
      <CTASection />
      <Footer />
    </main>
  )
}
