"use client" // Error boundaries must be Client Components

import Link from "next/link"
import "./globals.css"

/**
 * Last-resort root error boundary — replaces the root layout entirely,
 * so it renders its own <html>/<body> (Next.js 16 convention).
 *
 * Per Next docs, global-error does NOT receive the app's theme class from
 * the ThemeProvider (that provider lives inside the layout that just
 * failed), so this page pins the brand-dark identity itself via
 * className="dark" and carries critical inline styles so it still renders
 * correctly even if the stylesheet fails to load.
 */
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  return (
    // Must include html and body tags
    <html lang="en" className="dark">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1rem",
          backgroundColor: "#0a0a0a", // brand black — self-contained fallback
          color: "#f5f0e8", // brand pearl
          fontFamily: '"Outfit", ui-sans-serif, system-ui, -apple-system, sans-serif',
          textAlign: "center",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {/* React 19 hoists <title> into <head> */}
        <title>Server error — CAiR Turbo</title>

        <main style={{ maxWidth: "28rem", margin: "0 auto" }}>
          {/* Brand mark — inline styles so it never depends on the stylesheet */}
          <div
            aria-hidden
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "#c9a94e",
              color: "#0a0a0a",
              fontWeight: 800,
              fontSize: "0.875rem",
              marginBottom: "1.5rem",
            }}
          >
            CT
          </div>

          <p
            style={{
              color: "#c9a94e",
              fontWeight: 700,
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              marginBottom: "0.75rem",
            }}
          >
            Server error
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Something went wrong
          </h1>

          <p
            style={{
              color: "#c4bfb5",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              marginTop: "1rem",
            }}
          >
            Our servers hit an unexpected problem while loading this page.
            Retry, or return to the homepage — your luxury ride is still
            waiting.
          </p>

          {error.digest && (
            <p
              style={{
                color: "rgba(245, 240, 232, 0.5)",
                fontSize: "0.75rem",
                fontFamily: "ui-monospace, monospace",
                marginTop: "0.875rem",
              }}
            >
              Reference: {error.digest}
            </p>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
              marginTop: "1.75rem",
            }}
          >
            <button
              onClick={() => retry()}
              style={{
                backgroundColor: "#c9a94e",
                color: "#0a0a0a",
                border: 0,
                borderRadius: "9999px",
                padding: "0.9rem 1.75rem",
                fontSize: "0.875rem",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {/* Client navigation clears the error state automatically */}
            <Link
              href="/"
              style={{
                backgroundColor: "transparent",
                color: "#f5f0e8",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "9999px",
                padding: "0.9rem 1.75rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Back to home
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
