const details = [
  { label: 'Nama', value: 'Rayhand Ayandrie' },
  { label: 'Usia', value: '16 Tahun' },
  { label: 'Sekolah', value: 'SMK TAMAN SISWA 2 JAKARTA' },
  { label: 'Kelas', value: 'XI' },
  { label: 'Lokasi', value: 'Indonesia' },
  { label: 'Pengalaman', value: '1 Tahun' },
]

const stats = [
  { icon: 'fas fa-calendar-alt', number: '1', label: 'Tahun Pengalaman' },
  { icon: 'fas fa-book-open', number: '10+', label: 'Tutorial Dipelajari' },
  { icon: 'fas fa-lightbulb', number: '5+', label: 'Ide Proyek' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Tentang Saya</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Seorang pelajar SMK kelas 11 yang memiliki ketertarikan besar dalam dunia desain
              UI/UX dan pengembangan frontend. Dengan pengalaman 1 tahun di bidang ini, saya terus
              belajar dan mengasah kemampuan untuk menciptakan produk digital yang tidak hanya
              fungsional tetapi juga indah.
            </p>
            <div className="about-details">
              {details.map(item => (
                <div className="detail-item" key={item.label}>
                  <span className="detail-label">{item.label}</span>
                  <span className="detail-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {stats.map(stat => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-icon"><i className={stat.icon}></i></div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
