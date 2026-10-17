"use client" // Error boundaries must be Client Components

import { useEffect } from "react"
import Link from "next/link"
import { RotateCcw, ArrowUpRight } from "lucide-react"

/**
 * Route-level error boundary (Next.js 16 signature: error + retry).
 * Catches any render failure inside the root layout — the layout's
 * theme, fonts and metadata still apply, so this UI is fully themed.
 */
export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    // Surface the failure for debugging / error reporting
    console.error(error)
  }, [error])

  return (
    <main className="min-h-[85vh] bg-background flex flex-col items-center justify-center text-center px-4 py-24">
      {/* React 19 hoists <title> into <head> (metadata exports aren't allowed here) */}
      <title>Something went wrong — CAiR Turbo</title>

      <p className="text-gold-ink font-bold text-xs uppercase tracking-[0.35em] mb-4">
        Error
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
        Something went wrong
      </h1>
      <p className="text-muted-foreground text-sm sm:text-base max-w-md mt-4 leading-relaxed">
        An unexpected error interrupted this page. Nothing on your end is
        broken — try again, or head back to the homepage.
      </p>

      {error.digest && (
        <p className="text-muted-foreground/60 text-xs mt-4 font-mono">
          Reference: {error.digest}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
        <button
          onClick={() => retry()}
          className="bg-gold text-on-gold rounded-full px-7 py-3.5 text-sm font-extrabold inline-flex items-center gap-2 hover:bg-gold-light hover:shadow-gold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Try again
          <RotateCcw size={15} aria-hidden />
        </button>
        {/* Client navigation clears the error state automatically */}
        <Link
          href="/"
          className="border border-border text-foreground rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Back to home
          <ArrowUpRight size={15} aria-hidden />
        </Link>
      </div>
    </main>
  )
}
