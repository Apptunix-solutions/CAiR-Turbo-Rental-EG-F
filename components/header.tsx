"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { navLinks } from "@/data"

function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={(e) => {
        const btn = e.currentTarget
        const rect = btn.getBoundingClientRect()
        const x = ((rect.left + rect.width / 2) / window.innerWidth * 100).toFixed(1) + "%"
        const y = ((rect.top + rect.height / 2) / window.innerHeight * 100).toFixed(1) + "%"
        document.documentElement.style.setProperty("--theme-toggle-x", x)
        document.documentElement.style.setProperty("--theme-toggle-y", y)

        const next = theme === "dark" ? "light" : "dark"
        if (!document.startViewTransition) {
          setTheme(next)
          return
        }
        document.startViewTransition(() => {
          setTheme(next)
        })
      }}
      className={`relative w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 overflow-hidden group ${
        className || "bg-foreground/5 border-border text-foreground/80 hover:text-foreground hover:bg-foreground/10"
      }`}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Sun icon */}
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        style={{
          opacity: theme === "dark" ? 0 : 1,
          transform: theme === "dark" 
            ? "rotate(-90deg) scale(0.4)" 
            : "rotate(0deg) scale(1)",
        }}
      >
        <Sun size={18} />
      </span>
      {/* Moon icon */}
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        style={{
          opacity: theme === "dark" ? 1 : 0,
          transform: theme === "dark" 
            ? "rotate(0deg) scale(1)" 
            : "rotate(90deg) scale(0.4)",
        }}
      >
        <Moon size={18} />
      </span>
    </button>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 mt-4 pointer-events-none">
      <header 
        className={`pointer-events-auto transition-all duration-500 ease-in-out ${
          scrolled 
            ? "w-full max-w-5xl py-3 px-6 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-2xl" 
            : "w-full max-w-7xl py-4 bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2" aria-label="CAiR Turbo — home">
          <span className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center font-extrabold text-sm text-on-gold">CT</span>
          <span className={`font-extrabold text-xl tracking-tighter transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-white"
          }`}>CAiR <span className="text-gold-ink">Turbo</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 backdrop-blur-sm px-8 py-3 rounded-full border transition-all duration-300 ${
          scrolled 
            ? "bg-foreground/5 border-border" 
            : "bg-white/10 border-white/20"
        }`}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={`text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
            }`}>
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {mounted && (
            <ThemeToggle
              className={
                scrolled
                  ? "bg-foreground/5 border-border text-foreground/80 hover:text-foreground hover:bg-foreground/10"
                  : "bg-white/10 border-white/20 text-white/80 hover:text-white hover:bg-white/20"
              }
            />
          )}
          <Button 
            asChild 
            variant="default" 
            className="rounded-full px-6 flex items-center gap-2 h-[44px] bg-gold text-on-gold hover:bg-gold-light hover:shadow-gold transition-all duration-300"
          >
            <Link href="#contact">
              <span className="font-semibold">Book Now</span>
              <div className="bg-on-gold text-white p-1.5 rounded-full transition-all duration-300">
                <Phone size={14} />
              </div>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-white"
          }`} 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 p-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-[500px] translate-y-0" : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground hover:text-gold-ink transition"
              >
                {label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4 border-t border-border/50">
              <Button asChild className="flex-1 bg-gold text-on-gold hover:bg-gold-light hover:shadow-gold rounded-full">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
              {mounted && (
                <ThemeToggle className="bg-foreground/5 border-border text-foreground/80 hover:text-foreground hover:bg-foreground/10 flex-shrink-0" />
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
