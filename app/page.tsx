import type { Metadata } from "next"
import { Hero, PlatformDemo, TrustStrip, Manifesto, ThreeJobs, TrustSection, FinalCTA } from "@/components/marketing"
import { BilingualEngineSection } from "@/components/bilingual-showcase"
import { IntegrationsBeam } from "@/components/integrations-beam"
import { TeamTooltips } from "@/components/team-tooltip"
import { FAQSection } from "@/components/faq"


export const metadata: Metadata = {
  title: { absolute: "Bolnivo – AI assistants for websites and customer conversations" },
  description:
    "Bolnivo is a Nepali AI assistant for websites and business chat. It answers questions, checks availability and books appointments across messaging channels.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bolnivo – AI assistants for websites and customer conversations",
    description: "Bolnivo is a Nepali AI assistant for websites and business chat. It answers questions, checks availability and books appointments across messaging channels.",
    url: "/",
  },
}


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <PlatformDemo />
      <TrustStrip />
      <BilingualEngineSection />
      <Manifesto />
      <ThreeJobs />
      <IntegrationsBeam />
      <TrustSection />
      <TeamTooltips />
      <FinalCTA />
      <FAQSection />
    </main>
  )
}
