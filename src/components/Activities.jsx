import { useRef } from 'react'
import SectionShell from './SectionShell.jsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import a1 from '../assets/activity1.png'
import a2 from '../assets/activity2.png'
import a3 from '../assets/activity3.png'
import a4 from '../assets/activity4.png'

const items = [
  { img: a1, caption: '"First Batch Training has completed Successfully"' },
  { img: a2, caption: '"Sruthi hired in ABC Pvt Ltd. Congratulations to her"' },
  { img: a3, caption: '"Admission started for upskill training programme"' },
  { img: a4, caption: '"Admission started for upskill training programme"' },
]

function ArrowButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20"
      aria-label="Scroll"
    >
      {children}
    </button>
  )
}

export default function Activities() {
  const scrollerRef = useRef(null)

  const scrollBy = (dx) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dx, behavior: 'smooth' })
  }

  return (
    <SectionShell title="Activites" dark>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-1/2 z-10 -translate-y-1/2">
          <div className="pointer-events-auto">
            <ArrowButton onClick={() => scrollBy(-320)}>
              <ChevronLeft />
            </ArrowButton>
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 z-10 -translate-y-1/2">
          <div className="pointer-events-auto">
            <ArrowButton onClick={() => scrollBy(320)}>
              <ChevronRight />
            </ArrowButton>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-14 pb-4 scrollbar-none"
        >
          {items.map((it, idx) => (
            <div
              key={idx}
              className="w-[180px] shrink-0 snap-start rounded-2xl bg-white/10 p-3 shadow-soft"
            >
              <div className="overflow-hidden rounded-xl">
                <img src={it.img} alt="" className="h-44 w-full object-cover" />
              </div>
              <p className="mt-3 text-xs leading-5 text-white/90">{it.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </SectionShell>
  )
}
