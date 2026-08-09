import Lanyard from './Lanyard'
import profil from '../assets/profil.jpeg'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Halo, saya</span>
          <h1 className="hero-name">Rayhand Ayandrie</h1>
          <h2 className="hero-title">Pelajar SMK Kelas 11</h2>
          <p className="hero-description">
            Siswa SMK yang passionate dalam <span className="highlight">UI/UX Design</span> dan{' '}
            <span className="highlight">Frontend Development</span>. Suka menciptakan antarmuka yang
            indah dan user-friendly.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Hubungi Saya</a>
            <a href="#about" className="btn btn-secondary">Pelajari Lebih Lanjut</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/RayD15" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://instagram.com/Ryhnd15" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-lanyard">
            <Lanyard
              position={[0, 0, 22]}
              gravity={[0, -40, 0]}
              frontImage={profil}
              imageFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#about">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  )
}
