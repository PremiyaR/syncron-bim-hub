import SectionShell from './SectionShell.jsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const quotes = [
  {
    name: "Rajat Sharma",
    text: "Boost your product and service's credibility by adding testimonials from your clients.",
  },
  {
    name: "Vijay Singh",
    text: "People love recommendations — use feedback from others who’ve tried it.",
  },
  {
    name: "Geeta Maheswari",
    text: "Add genuine testimonials to build trust. People love recommendations from others.",
  },
]

export default function Testimonials() {
  return (
    <SectionShell dark>
      <div className="flex items-center justify-between">
        <button className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20">
          <ChevronLeft />
        </button>

        <h3 className="text-center text-2xl font-extrabold tracking-tight md:text-4xl">
          What student say…
        </h3>

        <button className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20">
          <ChevronRight />
        </button>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {quotes.map((q) => (
          <div key={q.name} className="rounded-2xl bg-white/5 p-6 shadow-soft">
            <p className="text-sm leading-6 text-white/85">{q.text}</p>
            <div className="mt-6 text-sm font-semibold text-white">— {q.name}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
