import Image from "next/image"
import Link from "next/link"
import { navLinks, business } from "@/data"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons"

export function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden pb-0">

      {/* Watermark */}
      <div className="w-full overflow-hidden select-none pointer-events-none" aria-hidden>
        <span
          className="block text-center font-extrabold tracking-tighter text-foreground/5 leading-none"
          style={{ fontSize: "clamp(60px, 18vw, 200px)" }}
        >
          CAiR Turbo
        </span>
      </div>

      {/* Full-bleed car image card */}
      <div className="relative mx-0 rounded-[2.5rem] overflow-hidden -mt-10 mx-4 sm:mx-6 lg:mx-8 mb-0">
        <div className="relative h-[420px] sm:h-[500px] md:h-[560px] w-full">
          <Image
            src="/footer-car.jpg"
            alt="Luxury CAiR Turbo rental car on an open highway"
            fill
            className="object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />

          {/* Floating labels — hidden on mobile */}
          <div className="hidden sm:block absolute left-8 top-1/2 -translate-y-[70%]">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white text-xs max-w-[160px]">
              <p className="font-bold leading-snug">DRIVE LUXURY<br /><span className="font-normal text-gray-300">EXPLORE EGYPT</span></p>
            </div>
          </div>
          <div className="hidden md:block absolute right-8 top-[30%]">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white text-xs max-w-[160px] text-right">
              <p className="font-bold leading-snug">FULLY INSURED<br /><span className="font-normal text-gray-300">EVERY RENTAL</span></p>
            </div>
          </div>
          <div className="hidden md:block absolute right-14 bottom-[30%]">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white text-xs max-w-[180px] text-right">
              <p className="font-bold leading-snug">WORLDWIDE RENTERS<br /><span className="font-normal text-gray-300">WELCOME</span></p>
            </div>
          </div>

          {/* Footer bar inside image */}
          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">

              <div className="flex-shrink-0">
                <span className="text-white font-extrabold text-xl tracking-tighter block mb-1">
                  CAiR <span className="text-gold">Turbo</span>
                </span>
                <p className="text-gray-400 text-xs leading-relaxed">
                  <a href={business.phoneHref} className="hover:text-white transition">{business.phone}</a>
                  {" · "}
                  <a href={business.phoneIntlHref} className="hover:text-white transition">{business.phoneIntl}</a>
                </p>
                <p className="text-gray-500 text-xs">{business.address}</p>
                <p className="text-gray-500 text-xs mt-1">© 2026 CAiR Turbo. All rights reserved.</p>
              </div>

              <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-gray-400 text-xs hover:text-white transition"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3 flex-shrink-0">
                {/* Facebook */}
                <a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="CAiR Turbo on Facebook" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition text-white">
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                {/* Instagram */}
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="CAiR Turbo on Instagram" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition text-white">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                {/* WhatsApp */}
                <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with CAiR Turbo on WhatsApp" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition text-white">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </a>
                <a href={business.privacyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-xs hover:text-white transition ml-1">Privacy policy</a>
                <a href={business.termsUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-xs hover:text-white transition">Terms</a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
