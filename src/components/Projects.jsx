import { useState } from 'react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Web', 'Mobile', 'UI/UX']

  const projects = [
    {
      id: 1,
      title: 'AI Study Assistant',
      category: 'Web',
      description: 'Aplikasi belajar berbasis AI untuk pelajar SMP/SMA/SMK. Upload materi (PDF/TXT), lalu dapatkan ringkasan otomatis, quiz generator, flashcard, dan AI chat — lengkap dengan sistem XP, level, dan streak.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini AI', 'LibSQL'],
      repoUrl: 'https://github.com/RayD15/ai-study-assistant',
      liveUrl: 'https://ai-study-ray.vercel.app',
      featured: true,
      status: 'ON PROGRESS',
    },
    {
      id: 5,
      title: 'Laravel E-Commerce',
      category: 'Web',
      description: 'Aplikasi e-commerce sederhana berbasis Laravel 12 dengan fitur produk, keranjang, checkout, pesanan, laporan, dan panel admin.',
      tech: ['Laravel', 'Tailwind CSS', 'MySQL', 'PHP', 'Blade'],
      repoUrl: 'https://github.com/RayD15/Rayhand-laravel',
      featured: false,
      status: 'Tahap Pengembangan',
    }
  ]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">PROYEK TERPILIH</h2>
        <p className="section-subtitle">Karya & Eksperimen Pengembangan Software</p>
      </div>

      <div className="projects-container">
        {/* Filter Buttons */}
        <div className="projects-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card reveal">
              <div className="project-badges">
                {project.featured && <span className="project-badge">FEATURED</span>}
                {project.status && <span className="project-badge project-badge--dev">{project.status}</span>}
              </div>
              <div className="project-card-header">
                <span className="project-category">[{project.category}]</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} className="project-btn live-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                  </a>
                )}
                <a href={project.repoUrl} className="project-btn repo-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}