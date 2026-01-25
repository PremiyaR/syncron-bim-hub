import heroImg from '../assets/hero.png'
import { GraduationCap, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      <div className="grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
        {/* Left */}
        <div className="pt-4 md:pt-10">
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Skills Beyond <br className="hidden md:block" /> Drafting
          </h1>

          <p className="mt-10 max-w-md text-sm leading-6 text-neutral-700">
            Syncron BIM Hub is a BIM training and consultancy firm focused on practical BIM
            implementation, not just software learning.
          </p>

          <ul className="mt-4 space-y-1 text-sm text-neutral-800">
            <li>• BIM aligned with ISO 19650</li>
            <li>• Industry-driven workflows</li>
            <li>• MEP-focused expertise</li>
            <li>• Training + real project exposure</li>
          </ul>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute right-0 top-2 hidden flex-col gap-6 text-sm font-semibold text-neutral-800 md:flex">
            <div className="flex items-center justify-end gap-3">
              <span>Student Login</span>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-black text-white shadow-soft">
                <GraduationCap />
              </span>
            </div>
            <div className="flex items-center justify-end gap-3">
              <span>Community Login</span>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-black text-white shadow-soft">
                <Users />
              </span>
            </div>
          </div>

          <div className="mx-auto max-w-sm md:ml-auto md:max-w-none">
            <img
              src={heroImg}
              alt="BIM Engineer"
              className="w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
