const timeline = [
  { date: '2025', title: 'Memulai Perjalanan', text: 'Mulai belajar HTML dan CSS dasar. Membuat website pertama sederhana.' },
  { date: '2025', title: 'Desain UI/UX', text: 'Mempelajari Figma dan prinsip desain UI/UX. Membuat wireframe dan prototipe pertama.' },  
  { date: 'Sekarang', title: 'Terus Berkembang', text: 'Terus belajar dan mengasah kemampuan. Siap untuk proyek nyata dan kolaborasi.' },
]

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <h2 className="section-title">Perjalanan Belajar</h2>
        <p className="section-subtitle">Timeline pencapaian saya selama 1 tahun terakhir</p>

        <div className="timeline">
          {timeline.map(item => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
