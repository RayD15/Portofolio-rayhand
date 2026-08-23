const contactInfo = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    text: 'Erhaye1510@gmail.com',
    href: 'mailto:Erhaye1510@gmail.com',
    linkLabel: 'Kirim Email',
    linkIcon: 'fas fa-arrow-up-right-from-square',
  },
  {
    icon: 'fab fa-whatsapp',
    title: 'WhatsApp',
    text: '+62 895-3423-6892-8',
    href: 'https://wa.me/62895342368928',
    linkLabel: 'Chat WhatsApp',
    linkIcon: 'fab fa-whatsapp',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Lokasi',
    text: 'Jakarta, Indonesia',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">HUBUNGI SAYA</h2>
          <p className="section-subtitle">Mari berkolaborasi atau sekadar berkenalan</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map(item => (
              <div className="contact-card" key={item.title}>
                <div className="contact-icon"><i className={item.icon}></i></div>
                <div className="contact-card-body">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card-link"
                    >
                      <i className={item.linkIcon}></i> {item.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="social-links">
              <a href="https://github.com/RayD15" target="_blank" rel="noopener noreferrer" className="social-btn github"><i className="fab fa-github"></i></a>
              <a href="https://instagram.com/Ryhnd15" target="_blank" rel="noopener noreferrer" className="social-btn instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
