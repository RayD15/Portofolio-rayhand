const skills = [
  { icon: 'fab fa-html5', name: 'HTML5', progress: 80 },
  { icon: 'fab fa-css3-alt', name: 'CSS3', progress: 75 },
  { icon: 'fab fa-js-square', name: 'JavaScript', progress: 60 },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Keahlian Saya</h2>
        <p className="section-subtitle">Teknologi yang saya pelajari selama 1 tahun terakhir</p>

        <div className="skills-category">
          <h3 className="category-title"><i className="fas fa-code"></i> Frontend Development</h3>
          <div className="skills-grid">
            {skills.map(skill => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon"><i className={skill.icon}></i></div>
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-level">
                  <div className="skill-progress" data-progress={skill.progress}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
