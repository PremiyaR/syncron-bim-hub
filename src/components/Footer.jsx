import qr from '../assets/qr.png'
import { Instagram, Linkedin, MessageCircle, X, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-start justify-between gap-10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Get in touch</h2>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {/* QR */}
          <div className="rounded-3xl bg-white/5 p-6 shadow-soft">
            <img src={qr} alt="QR" className="w-44 rounded-2xl bg-white p-3" />
            <div className="mt-4 text-sm font-semibold">Connect our WhatsApp Community</div>
          </div>

          {/* Address */}
          <div className="rounded-3xl bg-white/5 p-6 shadow-soft">
            <div className="text-sm font-semibold text-white/90">Main Office</div>
            <div className="mt-2 text-sm leading-6 text-white/80">
              Perambalur - 621212
              <br />
              Tamilnadu, India.
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-3xl bg-white/5 p-6 shadow-soft">
            <div className="space-y-2 text-sm text-white/85">
              <div><span className="font-semibold text-white">Tel:</span> 123-456-789</div>
              <div><span className="font-semibold text-white">Email:</span> hello@reallygreatsite.com</div>
              <div><span className="font-semibold text-white">Social:</span> @reallygreatsite</div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20" href="#">
                <MessageCircle size={18} />
              </a>
              <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20" href="#">
                <Linkedin size={18} />
              </a>
              <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20" href="#">
                <Instagram size={18} />
              </a>
              <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20" href="#">
                <X size={18} />
              </a>
              <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20" href="#">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Syncron BIM Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
