const timeline = [
  {
    date: '2025',
    title: 'Memulai Perjalanan',
    text: 'Mulai belajar HTML dan CSS dasar. Membuat website pertama sederhana.',
    icon: 'fa-code',
    tag: 'Fundamentals',
  },
  {
    date: '2025',
    title: 'Desain UI/UX',
    text: 'Mempelajari Figma dan prinsip desain UI/UX. Membuat wireframe dan prototipe pertama.',
    icon: 'fa-pen-ruler',
    tag: 'Design',
  },
  {
    date: 'Sekarang',
    title: 'Terus Berkembang',
    text: 'Terus belajar dan mengasah kemampuan. Siap untuk proyek nyata dan kolaborasi.',
    icon: 'fa-rocket',
    tag: 'Current',
    current: true,
  },
]

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">PERJALANAN BELAJAR</h2>
          <p className="section-subtitle">Timeline pencapaian saya selama 1 tahun terakhir</p>
        </div>

        <div className="timeline">
          <span className="timeline-progress" aria-hidden="true"></span>
          {timeline.map((item, i) => (
            <div
              className={[
                'timeline-item',
                i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right',
                item.current ? 'timeline-item--current' : '',
              ].filter(Boolean).join(' ')}
              key={item.title}
            >
              <div className="timeline-marker">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div className="timeline-content">
                <span className="timeline-year" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div className="timeline-content-header">
                  <span className="timeline-tag">[{item.tag}]</span>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.current && <span className="timeline-now-badge"><i className="fa-solid fa-circle"></i> SEDANG BERLANGSUNG</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
