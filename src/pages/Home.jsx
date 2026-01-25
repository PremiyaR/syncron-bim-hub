import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Activities from '../components/Activities.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Services from '../components/Services.jsx'
import Career from '../components/Career.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div>
      <div className="bg-neutral-100">
        <Navbar />
        <Hero />
      </div>

      <Activities />
      <Testimonials />
      <Services />
      <Career />
      <Footer />
    </div>
  )
}
