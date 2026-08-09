const interests = [
  { icon: 'fas fa-palette', title: 'UI Design', text: 'Menciptakan antarmuka yang indah, konsisten, dan memanjakan mata pengguna.' },
  { icon: 'fas fa-heart', title: 'UX Design', text: 'Memahami kebutuhan pengguna untuk menciptakan pengalaman yang memuaskan.' },
  { icon: 'fas fa-laptop-code', title: 'Frontend Dev', text: 'Mengubah desain menjadi kode yang fungsional dan interaktif.' },
  { icon: 'fas fa-mobile-screen-button', title: 'Responsive Design', text: 'Memastikan website tampil sempurna di semua ukuran layar.' },
  { icon: 'fas fa-wand-magic-sparkles', title: 'Animation', text: 'Menambahkan animasi halus untuk meningkatkan pengalaman pengguna.' },
  { icon: 'fas fa-lightbulb', title: 'Innovation', text: 'Terus mencari ide baru dan solusi kreatif untuk masalah digital.' },
]

export default function Interest() {
  return (
    <section id="interest" className="interest">
      <div className="container">
        <h2 className="section-title">Minat & Passion</h2>
        <p className="section-subtitle">Apa yang membuat saya bersemangat dalam dunia digital</p>

        <div className="interest-grid">
          {interests.map(item => (
            <div className="interest-card" key={item.title}>
              <div className="interest-icon">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
