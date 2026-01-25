import SectionShell from './SectionShell.jsx'
import bg from '../assets/services_bg.png'

const cards = [
  {
    title: "Training Programme",
    bullets: ["For students & working professionals", "Structured modules", "Outcome-oriented learning"],
    cta: "Explore Training",
  },
  {
    title: "BIM Consulting",
    bullets: ["BIM Project Modeling", "Transform your organisation to BIM workflow"],
    cta: "Discuss a Project",
  },
  {
    title: "BIM Resouces Deployement",
    bullets: ["Short-term BIM support", "Trained & Syncron-ready resources", "Reduced onboarding time"],
    cta: "Request Resources",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative">
        <SectionShell title="Our Sevices">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <div key={c.title} className="rounded-3xl bg-white/80 p-6 shadow-soft backdrop-blur">
                <h3 className="text-2xl font-extrabold tracking-tight">{c.title}</h3>
                <ul className="mt-6 space-y-2 text-sm text-neutral-800">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-neutral-900">
                  {c.cta} &gt;
                </button>
              </div>
            ))}
          </div>
        </SectionShell>
      </div>
    </section>
  )
}
