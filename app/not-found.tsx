import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { business, navLinks } from "@/data"

export const metadata: Metadata = {
  title: "Page Not Found — CAiR Turbo",
  description:
    "The page you requested could not be found. Browse CAiR Turbo's luxury fleet of Mercedes, Rolls Royce, Ferrari and more in Cairo, Egypt.",
  robots: { index: false, follow: true },
}

/**
 * 404 page — renders inside the root layout, so it inherits the theme
 * tokens (Light/Dark), fonts and SEO metadata automatically.
 * Self-contained navigation: no Header/Footer chrome, just clear recovery paths.
 */
export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4 py-24 relative overflow-hidden">
      {/* Faint brand watermark */}
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-extrabold tracking-tighter text-foreground/[0.04]"
        style={{ fontSize: "clamp(120px, 30vw, 420px)" }}
      >
        404
      </span>

      <div className="relative w-full max-w-xl">
        {/* Brand mark */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
          aria-label="CAiR Turbo — back to homepage"
        >
          <span className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center font-extrabold text-sm text-on-gold">
            CT
          </span>
          <span className="font-extrabold text-xl tracking-tighter text-foreground">
            CAiR <span className="text-gold-ink">Turbo</span>
          </span>
        </Link>

        <p className="text-gold-ink font-bold text-xs uppercase tracking-[0.35em] mb-3">
          Error 404
        </p>
        <h1
          className="font-extrabold leading-none tracking-tighter text-foreground"
          style={{ fontSize: "clamp(5rem, 18vw, 9rem)" }}
        >
          4<span className="text-gold-ink">0</span>4
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight mt-5">
          This page has left the garage
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto mt-4 leading-relaxed">
          The page you were looking for was moved, renamed, or never existed.
          Your luxury ride, however, is still waiting.
        </p>

        {/* Recovery actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <Link
            href="/"
            className="bg-gold text-on-gold rounded-full px-7 py-3.5 text-sm font-extrabold inline-flex items-center gap-2 hover:bg-gold-light hover:shadow-gold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Back to home
            <ArrowUpRight size={16} aria-hidden />
          </Link>
          <Link
            href="/#fleet"
            className="border border-gold-border text-gold-ink rounded-full px-7 py-3.5 text-sm font-extrabold inline-flex items-center gap-2 hover:bg-gold hover:text-on-gold hover:border-gold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Browse the fleet
          </Link>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-foreground rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <MessageCircle size={15} aria-hidden />
            WhatsApp us
          </a>
        </div>

        {/* Quick links */}
        <nav
          aria-label="Popular pages"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-12 text-xs uppercase tracking-widest"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-gold-ink transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-muted-foreground/70 text-xs mt-8">
          Need help? Call{" "}
          <a
            href={business.phoneHref}
            className="text-gold-ink font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            {business.phone}
          </a>
        </p>
      </div>
    </main>
  )
}
