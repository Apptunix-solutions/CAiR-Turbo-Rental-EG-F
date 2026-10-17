"use client"

import { useState } from "react"
import { ArrowUpRight, Plus, Minus } from "lucide-react"
import Image from "next/image"
import { faqs, business, cars } from "@/data"
import { FAQ } from "@/types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons"

function FAQItem({ item, defaultOpen }: { item: FAQ; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen)

  const renderQ = () => {
    const boldLower = item.bold.toLowerCase()
    const idx = item.q.toLowerCase().indexOf(boldLower)
    if (idx === -1) return <span className="font-medium">{item.q}</span>
    return (
      <>
        <span className="font-medium">{item.q.slice(0, idx)}</span>
        <strong className="font-extrabold">{item.q.slice(idx, idx + item.bold.length)}</strong>
        <span className="font-medium">{item.q.slice(idx + item.bold.length)}</span>
      </>
    )
  }

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <button
        id={`faq-${item.num}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted transition"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="text-muted-foreground text-xs font-semibold flex-shrink-0">{item.num}</span>
          <span className="text-foreground text-sm sm:text-base uppercase tracking-wide">{renderQ()}</span>
        </div>
        <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ml-3 transition-colors ${open ? "bg-foreground" : "border border-border"}`}>
          {open
            ? <Minus size={14} className="text-background" aria-hidden />
            : <Plus size={14} className="text-muted-foreground" aria-hidden />
          }
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 pl-[3.25rem] text-muted-foreground text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  )
}

export function CTA() {
  const [carPreference, setCarPreference] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem("cta-name") as HTMLInputElement)?.value.trim()
    const phone = (form.elements.namedItem("cta-phone") as HTMLInputElement)?.value.trim()
    const email = (form.elements.namedItem("cta-email") as HTMLInputElement)?.value.trim()
    const car = carPreference
    const message = [
      "Hello CAiR Turbo! I'd like to book a car:",
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      email && `Email: ${email}`,
      car && `Car: ${car}`,
    ]
      .filter(Boolean)
      .join("\n")
    window.open(`${business.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      {/* ── FAQ ─────────────────────────────────────────── */}
      <section id="faq" className="relative z-30 w-full bg-muted pt-6 pb-16 px-4 sm:px-6 lg:px-8 -mb-[1px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground text-center mb-4 tracking-tighter">
            FAQ
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base text-center mb-12 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about renting a luxury car with CAiR Turbo.
          </p>
          <div className="flex flex-col gap-2.5 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.num} item={faq} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────── */}
      <section id="contact" className="relative w-full overflow-hidden">
        
        {/* Outer Section with Road Background Image */}
        <div className="relative w-full px-4 sm:px-6 lg:px-8 pt-20 pb-24 z-20">
          
          {/* Masking SVG — uses muted color to mask (matches FAQ bg) */}
          <svg 
            viewBox="0 0 1440 60" 
            className="absolute top-0 left-0 w-full h-8 md:h-14 z-10" 
            preserveAspectRatio="none"
            style={{ fill: "var(--muted)" }}
            aria-hidden
          >
            <path d="M0,0 L1440,0 L1440,30 L920,30 C880,30 870,0 830,0 L610,0 C570,0 560,30 520,30 L0,30 Z" />
          </svg>

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image src="/road.jpg" alt="Open road in Egypt — explore the country with a CAiR Turbo rental car" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Inner Black Card */}
          <div className="relative z-10 max-w-7xl mx-auto bg-inverse rounded-[3rem] p-10 md:p-16 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* Left */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase leading-tight tracking-tight mb-4">
                  READY TO EXPLORE EGYPT?
                </h2>
                <p className="text-white/50 text-sm max-w-xs mb-6 leading-relaxed">
                  Book your luxury ride today. 24/7 availability, worldwide renters welcome.
                </p>
                <p className="text-white/50 text-sm max-w-xs mb-8 leading-relaxed">
                  Or call us directly:{" "}
                  <a href={business.phoneHref} className="text-white font-semibold hover:text-gold transition">
                    {business.phone}
                  </a>
                </p>
                {/* Socials */}
                <div className="flex gap-3">
                  <a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="CAiR Turbo on Facebook" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition text-white/60">
                    <FacebookIcon />
                  </a>
                  <a href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="CAiR Turbo on Instagram" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition text-white/60">
                    <InstagramIcon />
                  </a>
                  <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with CAiR Turbo on WhatsApp" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition text-white/60">
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>

              {/* Right — form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  id="cta-name"
                  name="cta-name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Full name"
                  aria-label="Full name"
                  className="w-full bg-transparent border border-white/15 text-white placeholder:text-white/45 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-white/40 transition"
                />
                <input
                  id="cta-phone"
                  name="cta-phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="Phone number"
                  aria-label="Phone number"
                  className="w-full bg-transparent border border-white/15 text-white placeholder:text-white/45 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-white/40 transition"
                />
                <input
                  id="cta-email"
                  name="cta-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  aria-label="Email address"
                  className="w-full bg-transparent border border-white/15 text-white placeholder:text-white/45 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-white/40 transition"
                />
                <Select value={carPreference} onValueChange={setCarPreference}>
                  <SelectTrigger
                    aria-label="Car preference"
                    className="w-full h-auto data-[size=default]:h-auto bg-transparent border border-white/15 text-white rounded-full px-5 py-3.5 text-sm shadow-none hover:border-white/30 focus-visible:border-gold focus-visible:ring-gold/30 transition data-[placeholder]:text-white/45 [&_svg:not([class*='text-'])]:text-white/50"
                  >
                    <SelectValue placeholder="Car preference (optional)" />
                  </SelectTrigger>
                  <SelectContent position="popper" align="start" className="rounded-xl border-white/10 bg-inverse-card text-white shadow-2xl">
                    {cars.map((car) => (
                      <SelectItem
                        key={car.name}
                        value={car.name}
                        className="rounded-lg py-2 pl-8 pr-10 focus:bg-white/10 focus:text-white data-[highlighted]:bg-white/10 data-[highlighted]:text-white"
                      >
                        {car.name}
                      </SelectItem>
                    ))}
                    <SelectItem
                      value="Other"
                      className="rounded-lg py-2 pl-8 pr-10 focus:bg-white/10 focus:text-white data-[highlighted]:bg-white/10 data-[highlighted]:text-white"
                    >
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
                <div className="pt-1">
                  <button
                    id="cta-submit"
                    type="submit"
                    className="bg-gold text-on-gold font-bold px-7 py-3.5 rounded-full flex items-center gap-3 text-sm hover:bg-gold-light hover:shadow-gold transition"
                  >
                    Book Your Car Now
                    <div className="bg-on-gold text-white p-1.5 rounded-full">
                      <ArrowUpRight size={14} aria-hidden />
                    </div>
                  </button>
                </div>
                <p className="text-white/45 text-xs pt-1">
                  Sends your request straight to our WhatsApp — we reply 24/7.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
