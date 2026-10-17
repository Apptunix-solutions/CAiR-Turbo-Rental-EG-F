/**
 * Route loading fallback — shown while the segment streams in (dev /
 * soft navigation). Fully themed via the root layout's tokens.
 */
export default function Loading() {
  return (
    <div
      role="status"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <span
        aria-hidden
        className="w-11 h-11 bg-gold text-on-gold rounded-xl flex items-center justify-center font-extrabold text-sm mb-5"
      >
        CT
      </span>
      <div
        aria-hidden
        className="w-44 h-1.5 rounded-full bg-muted overflow-hidden"
      >
        <div className="h-full w-1/3 bg-gold rounded-full animate-pulse" />
      </div>
      <p
        aria-hidden
        className="text-muted-foreground text-[11px] uppercase tracking-[0.3em] mt-5"
      >
        CAiR Turbo
      </p>
      <span className="sr-only">Loading CAiR Turbo</span>
    </div>
  )
}
