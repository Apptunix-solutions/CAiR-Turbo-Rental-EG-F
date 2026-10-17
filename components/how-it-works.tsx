import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const steps = [
  {
    num: 1,
    title: "BROWSE & CHOOSE",
    description:
      "Explore our premium fleet and select your perfect car for any occasion.",
  },
  {
    num: 2,
    title: "VERIFY & BOOK",
    description:
      "Complete our worldwide background verification and secure your booking online.",
  },
  {
    num: 3,
    title: "DEPOSIT & INSURE",
    description:
      "Pay a refundable security deposit. Full insurance and warranty included.",
  },
  {
    num: 4,
    title: "PICK UP & DRIVE",
    description:
      "Collect your car or get it delivered anywhere in Cairo. Explore Egypt in style.",
  },
]

/**
 * How It Works Section Component
 * Single Responsibility: Illustrates the 4-step car booking and verification workflow.
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-background pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="relative rounded-[2.5rem] overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image src="/hero.jpg" alt="Luxury rental car from the CAiR Turbo fleet" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-10 min-h-[480px] items-center">

            {/* Left — headline + cta */}
            <div className="flex flex-col justify-between h-full gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase tracking-tight">
                  HOW IT WORKS
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm mt-5">
                  Renting a luxury car in Egypt is simple, secure, and stress-free.
                </p>
              </div>

              <div>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-6">
                  Worldwide renters welcome, with verification typically approved in under 24 hours.
                </p>
                <Link href="#contact" className="bg-gold text-on-gold px-6 py-3 rounded-full font-bold text-sm flex items-center gap-3 hover:bg-gold-light hover:shadow-gold transition w-fit">
                  Book Now
                  <div className="bg-on-gold text-white p-1.5 rounded-full">
                    <ArrowUpRight size={14} />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right — steps */}
            <div className="flex flex-col gap-3">

              {/* Step 1 — expanded */}
              <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-6 group">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                  <ArrowUpRight size={18} className="text-gray-400 group-hover:text-white transition" />
                </div>
                <h3 className="text-white text-lg font-extrabold uppercase mb-2">{steps[0].title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {steps[0].description}
                </p>
              </div>

              {/* Steps 2–4 */}
              {steps.slice(1).map((step) => (
                <div
                  key={step.num}
                  className="bg-white/5 backdrop-blur-md border border-white/5 rounded-[1.5rem] px-6 py-4 flex justify-between items-center group hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-white/50 font-bold">{step.num}</span>
                    <h3 className="text-white text-sm font-extrabold uppercase">{step.title}</h3>
                  </div>
                  <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition" />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Backwards compatibility alias
export { HowItWorks as Stats }
