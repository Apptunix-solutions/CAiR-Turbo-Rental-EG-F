"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowLeft, ArrowRight, Star, Quote, ShieldCheck, MapPin, Car } from "lucide-react"
import { reviews } from "@/data"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const total = reviews.length

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  // Auto-play interval with hover-pause
  useEffect(() => {
    if (!isAutoPlaying || total <= 1) return
    const interval = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, total, handleNext])

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrev()
    }
    setTouchStart(null)
  }

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev()
    if (e.key === "ArrowRight") handleNext()
  }

  const activeReview = reviews[activeIndex]
  const prevIndex = (activeIndex - 1 + total) % total
  const nextIndex = (activeIndex + 1) % total
  const prevReview = reviews[prevIndex]
  const nextReview = reviews[nextIndex]

  return (
    <section
      id="testimonials"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      aria-label="Client testimonials slider"
      className="w-full bg-muted pt-20 pb-16 px-4 sm:px-6 lg:px-8 outline-none"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              Verified Client Experiences
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight uppercase tracking-tight max-w-sm">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-md leading-relaxed">
              Travelers, business executives and VIP guests across Egypt trust CAiR Turbo for their
              luxury rides.
            </p>
          </div>

          {/* Controls: Counter + Next / Prev Buttons */}
          <div className="flex items-center gap-3.5 flex-shrink-0">
            <span
              aria-label={`Review ${activeIndex + 1} of ${total}`}
              className="font-mono text-xs tracking-widest text-muted-foreground font-semibold px-3 py-2 rounded-full bg-card border border-border"
            >
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            <div className="flex gap-2">
              <button
                id="prev-review"
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-12 h-12 bg-card hover:bg-gold hover:text-black border border-border hover:border-gold rounded-full flex items-center justify-center transition-all duration-200 text-foreground group shadow-sm active:scale-95"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                id="next-review"
                onClick={handleNext}
                aria-label="Next review"
                className="w-12 h-12 bg-card hover:bg-gold hover:text-black border border-border hover:border-gold rounded-full flex items-center justify-center transition-all duration-200 text-foreground group shadow-sm active:scale-95"
              >
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Stage Focus Cards Carousel */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative flex items-center justify-center gap-4 lg:gap-6 py-4 overflow-visible"
        >
          {/* Left / Previous Card (Preview on large screens) */}
          <div
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            aria-label={`Previous review: ${prevReview.name}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handlePrev()
            }}
            className="hidden lg:block relative rounded-[2rem] p-6 bg-card/60 border border-border/70 opacity-40 hover:opacity-80 scale-90 hover:scale-[0.93] transition-all duration-300 flex-shrink-0 w-80 cursor-pointer select-none"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted-foreground/20 text-foreground flex-shrink-0 flex items-center justify-center font-bold text-sm">
                {prevReview.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <h4 className="font-extrabold text-sm uppercase text-foreground truncate">
                  {prevReview.name}
                </h4>
                <p className="text-muted-foreground text-xs truncate">{prevReview.role}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed italic">
              &ldquo;{prevReview.text}&rdquo;
            </p>
            {prevReview.car && (
              <p className="text-[11px] font-semibold text-gold mt-3 truncate">
                {prevReview.car}
              </p>
            )}
          </div>

          {/* Center Stage: MAIN FOCUS CARD */}
          <div
            key={activeIndex}
            className="relative rounded-[2rem] p-7 sm:p-9 bg-card border-2 border-gold/40 shadow-2xl z-20 w-full max-w-xl transition-all duration-300 animate-in fade-in-50 zoom-in-95 duration-300"
          >
            {/* Subtle luxury glow behind active card */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header: Reviewer Info + Rating + Quote Icon */}
            <div className="flex items-start justify-between gap-4 mb-6 relative">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark text-on-gold flex-shrink-0 flex items-center justify-center font-extrabold text-base shadow-md">
                  {activeReview.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-base uppercase text-foreground tracking-tight">
                      {activeReview.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      <ShieldCheck size={12} />
                      Verified
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-0.5">{activeReview.role}</p>

                  <div className="flex items-center gap-1 mt-1.5" aria-label={`${activeReview.stars} out of 5 stars`}>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <Star
                          key={si}
                          size={13}
                          aria-hidden
                          className={si < activeReview.stars
                            ? "fill-[#c9a94e] text-[#c9a94e]"
                            : "fill-muted-foreground/30 text-muted-foreground/30"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#c9a94e] ml-1.5">5.0</span>
                  </div>
                </div>
              </div>

              {/* Quote Accent Badge */}
              <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                <Quote size={18} className="fill-gold" />
              </div>
            </div>

            {/* Review Body */}
            <p className="text-sm sm:text-base leading-relaxed text-foreground/90 font-normal mb-6 relative italic">
              &ldquo;{activeReview.text}&rdquo;
            </p>

            {/* Vehicle & Location Badges */}
            {(activeReview.car || activeReview.location) && (
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/60 text-xs">
                {activeReview.car && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-semibold">
                    <Car size={13} className="text-gold" />
                    {activeReview.car}
                  </span>
                )}
                {activeReview.location && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                    <MapPin size={13} className="text-muted-foreground" />
                    {activeReview.location}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Right / Next Card (Preview on large screens) */}
          <div
            onClick={handleNext}
            role="button"
            tabIndex={0}
            aria-label={`Next review: ${nextReview.name}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleNext()
            }}
            className="hidden lg:block relative rounded-[2rem] p-6 bg-card/60 border border-border/70 opacity-40 hover:opacity-80 scale-90 hover:scale-[0.93] transition-all duration-300 flex-shrink-0 w-80 cursor-pointer select-none"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted-foreground/20 text-foreground flex-shrink-0 flex items-center justify-center font-bold text-sm">
                {nextReview.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <h4 className="font-extrabold text-sm uppercase text-foreground truncate">
                  {nextReview.name}
                </h4>
                <p className="text-muted-foreground text-xs truncate">{nextReview.role}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed italic">
              &ldquo;{nextReview.text}&rdquo;
            </p>
            {nextReview.car && (
              <p className="text-[11px] font-semibold text-gold mt-3 truncate">
                {nextReview.car}
              </p>
            )}
          </div>
        </div>

        {/* Pagination Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((r, idx) => (
            <button
              key={r.name + idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to review ${idx + 1}: ${r.name}`}
              className={`transition-all duration-300 rounded-full h-2.5 ${
                idx === activeIndex
                  ? "w-8 bg-gold shadow-sm shadow-gold/40"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
