const skills = {
  frontend: {
    title: 'Frontend Development',
    icon: 'fas fa-code',
    items: [
      { icon: 'fab fa-html5', name: 'HTML5', progress: 80 },
      { icon: 'fab fa-css3-alt', name: 'CSS3', progress: 75 },
      { icon: 'fab fa-js-square', name: 'JavaScript', progress: 60 },
    ],
  },
  design: {
    title: 'Design UI/UX',
    icon: 'fas fa-pen-ruler',
    items: [
      { icon: 'fab fa-figma', name: 'Figma', progress: 70 },
      { icon: 'fas fa-object-group', name: 'Prototyping', progress: 65 },
    ],
  },
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">KEAHLIAN SAYA</h2>
          <p className="section-subtitle">Teknologi yang saya pelajari selama 1 tahun terakhir</p>
        </div>

        {Object.entries(skills).map(([key, cat]) => (
          <div className="skills-category" key={key}>
            <h3 className="category-title"><i className={cat.icon}></i> {cat.title}</h3>
            <div className="skills-grid">
              {cat.items.map(skill => (
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
        ))}
      </div>
    </section>
  )
}
