const reasons = [
  {
    title: "WORLD-CLASS FLEET",
    description:
      "Mercedes, Rolls Royce, Ferrari, BMW, Audi, Range Rover — we curate only the finest vehicles from the planet's most legendary brands.",
  },
  {
    title: "PROFESSIONAL SERVICE",
    description:
      "From booking to return, our multilingual team ensures every detail is perfect. 24/7 customer support, anywhere in Egypt.",
  },
  {
    title: "COMPLETE PROTECTION",
    description:
      "Full insurance coverage, mechanical warranty, and worldwide background verification for maximum safety and trust.",
  },
  {
    title: "FLEXIBLE OPTIONS",
    description:
      "Self-drive, chauffeur, airport transfer, wedding cars — whatever your need, we have the perfect solution.",
  },
]

export function About() {
  return (
    <section id="about" className="w-full bg-muted pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — story */}
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight uppercase tracking-tight">
              ABOUT CAiR TURBO
            </h2>
            <p className="text-foreground font-semibold text-sm sm:text-base leading-relaxed">
              Cairo&apos;s premier luxury car rental — where every drive is a first-class experience.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              CAiR Turbo was founded with a singular vision: to bring world-class luxury car
              rental to Egypt. Based in the heart of Cairo&apos;s Mohandessin district on King
              Faisal Street, Giza, we&apos;ve built a reputation for exceptional vehicles,
              professional service, and an unwavering commitment to client satisfaction.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our diverse fleet spans the world&apos;s most prestigious automotive brands — from
              the commanding Mercedes G63 AMG to the iconic Rolls Royce Cullinan. Every vehicle
              in our collection is meticulously maintained to factory standards, ensuring an
              impeccable driving experience.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Whether you&apos;re a business executive, a tourist exploring ancient wonders, or
              celebrating life&apos;s most important moments, CAiR Turbo delivers an experience
              that matches the grandeur of Egypt itself.
            </p>
          </div>

          {/* Right — why choose cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`rounded-[2rem] p-6 flex flex-col justify-between min-h-[180px] ${
                  index % 2 === 0
                    ? "bg-foreground"
                    : "bg-card border border-border"
                }`}
              >
                <h3 className={`${index % 2 === 0 ? "text-background" : "text-foreground"} text-sm font-extrabold uppercase mb-3`}>
                  {reason.title}
                </h3>
                <p className={`${index % 2 === 0 ? "text-background/60" : "text-muted-foreground"} text-xs leading-relaxed`}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
