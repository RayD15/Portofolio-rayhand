const contactInfo = [
  { icon: 'fas fa-envelope', title: 'Email', text: 'Erhaye1510@gmail.com' },
  { icon: 'fab fa-whatsapp', title: 'WhatsApp', text: '+62 895-3423-6892-8' },
  { icon: 'fas fa-map-marker-alt', title: 'Lokasi', text: 'Indonesia' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Hubungi Saya</h2>
        <p className="section-subtitle">Mari berkolaborasi atau sekadar berkenalan</p>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map(item => (
              <div className="contact-card" key={item.title}>
                <div className="contact-icon"><i className={item.icon}></i></div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}

            <div className="social-links">
              <a href="https://github.com/RayD15" target="_blank" rel="noopener noreferrer" className="social-btn github"><i className="fab fa-github"></i></a>
              <a href="https://instagram.com/Ryhnd15" target="_blank" rel="noopener noreferrer" className="social-btn instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <form className="contact-form" id="contactForm">
            <div className="form-group">
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">Nama Lengkap</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <input type="text" id="subject" name="subject" required />
              <label htmlFor="subject">Subjek</label>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="5" required></textarea>
              <label htmlFor="message">Pesan</label>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              <span>Kirim Pesan</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
