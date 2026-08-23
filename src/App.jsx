import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Interest from './components/Interest'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import usePortfolioEffects from './hooks/usePortfolioEffects'

export default function App() {
  usePortfolioEffects()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Marquee />
        <Projects />
        <Certificates />
        <Interest />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
