import { Link2 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-black text-white shadow-soft">
            <Link2 size={18} />
          </div>
          <div className="font-semibold tracking-tight">Syncron BIM Hub</div>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-medium text-neutral-700 md:flex">
          <a className="hover:text-black" href="#services">Our Services</a>
          <a className="hover:text-black" href="#career">Career</a>
          <a className="hover:text-black" href="#contact">Connect Us</a>
        </nav>

        <button className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black shadow-soft hover:bg-neutral-50 md:hidden">
          Menu
        </button>
      </div>
    </header>
  )
}
