import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Fleet } from "@/components/fleet"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/ui/section-divider"

/**
 * Section Divider System
 * ─────────────────────────────
 * Each section overlaps the previous one using a negative top-margin.
 * The rounded top corners of each section expose the PREVIOUS section's
 * background color in the corners, creating the "card lifting off" look.
 *
 * Stack order (z-index increases downward so each card sits ON TOP):
 *  Hero (brand-dark)       z-0   bg-inverse        ← root bg
 *  Fleet (muted)           z-10  bg-muted  rounded-t-[3rem] -mt-10
 *  Services (page bg)      z-20  bg-background  rounded-t-[3rem] -mt-10
 *  How It Works (page bg)  —     continues, no divider needed
 *  About (muted)           z-30  bg-muted  rounded-t-[3rem] -mt-10
 *  Testimonials (muted)    —     continues, no divider needed
 *  CTA (muted→photo)       z-40  bg-muted  no top divider (same bg)
 *  Footer (page bg)        z-50  bg-background  rounded notch at top
 * All section colors come from the theme tokens, so the whole stack
 * re-tints automatically between Light and Dark mode.
 */
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      {/* ══ 1. HERO — DARK ══════════════════════════════════════════════ */}
      <div className="relative z-0">
        <Hero />
      </div>

      {/* ══ 2. FLEET — MUTED (center tab overlap) ═══════════════════════ */}
      <div className="relative z-10 -mt-12 text-muted">
        <SectionDivider />
        <div className="bg-muted relative z-20">
          <Fleet />
        </div>
      </div>

      {/* ══ 3. SERVICES + HOW IT WORKS — DARK (lifts off the light fleet) ══ */}
      <div className="relative z-20 -mt-12 text-background">
        <SectionDivider />
        <div className="bg-background relative z-20">
          <Services />
          <HowItWorks />
        </div>
      </div>

      {/* ══ 4. ABOUT + TESTIMONIALS + CTA — MUTED (lifts off dark section) ═══ */}
      <div className="relative z-30 -mt-12 text-muted">
        <SectionDivider />
        <div className="bg-muted relative z-20">
          <About />
          <Testimonials />
          <CTA />
        </div>
      </div>

      {/* ══ 5. FOOTER — DARK base (lifts off the light CTA) ══════════════ */}
      <div className="relative z-40 -mt-12 text-background">
        <SectionDivider />
        <div className="bg-background relative z-20">
          <Footer />
        </div>
      </div>
    </main>
  )
}
