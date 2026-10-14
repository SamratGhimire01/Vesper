"use client"

import * as React from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/shared"

export function TrustSection() {
  return (
    <section className="w-full py-28 px-6 bg-soft-canvas">
      <div className="mx-auto max-w-[900px]">
        <ScrollReveal className="flex flex-col items-center justify-center text-center">
          <p className="text-eyebrow text-signal-blue uppercase tracking-widest mb-4">Pilot program</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-ink mb-5">
            Help shape Bolnivo’s first pilot.
          </h2>
          <p className="text-base md:text-lg text-muted max-w-[680px] leading-relaxed mb-8">
            We’re in the final build phase and preparing a free pilot for businesses in Nepal. Bolnivo is designed to answer from business-approved information, support customer requests, and hand conversations to staff. It understands English, Nepali, and Romanized Nepali.
          </p>
          <Link
            href="mailto:bolnivo.ai@gmail.com?subject=Bolnivo%20free%20pilot"
            className="inline-flex items-center justify-center rounded-full bg-signal-blue px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Ask about the free pilot
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
