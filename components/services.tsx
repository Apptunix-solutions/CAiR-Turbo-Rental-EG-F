import { ArrowUpRight } from "lucide-react"
import { services } from "@/data"

/**
 * Services Section Component
 * Single Responsibility: Showcases CAiR Turbo's rental service offerings (chauffeur, airport, etc.).
 */
export function Services() {
  return (
    <section id="services" className="w-full bg-background pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight uppercase tracking-tight max-w-3xl mx-auto">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Tailored luxury transportation solutions for every occasion — in Cairo and across Egypt.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const inverted = index % 2 === 0
            return (
              <div
                key={service.title}
                className={`rounded-[2rem] p-7 flex flex-col justify-between min-h-[220px] group ${
                  inverted
                    ? "bg-foreground"
                    : "bg-card border border-border"
                }`}
              >
                <div>
                  <service.icon size={26} strokeWidth={1.8} aria-hidden className={`mb-3 ${inverted ? "text-background" : "text-foreground"}`} />
                  <h3 className={`${inverted ? "text-background" : "text-foreground"} text-base font-extrabold uppercase mb-3`}>
                    {service.title}
                  </h3>
                  <p className={`${inverted ? "text-background/60" : "text-muted-foreground"} text-sm leading-relaxed`}>
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <div className={`w-10 h-10 border rounded-full flex items-center justify-center transition cursor-pointer ${
                    inverted
                      ? "border-background/20 group-hover:bg-background group-hover:border-background"
                      : "border-border group-hover:bg-foreground group-hover:text-background"
                  }`}>
                    <ArrowUpRight size={16} className={inverted
                      ? "text-background/60 group-hover:text-foreground transition"
                      : "text-foreground group-hover:text-background transition"} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground text-sm sm:text-base text-center mt-14 max-w-2xl mx-auto leading-relaxed">
          Every CAiR Turbo rental includes comprehensive insurance coverage, a mechanical
          breakdown warranty, and 24/7 roadside assistance across Egypt — so all you have to do
          is enjoy the drive.
        </p>

      </div>
    </section>
  )
}

// Backwards compatibility alias
export { Services as Features }
