const certificates = [
  {
    id: 1,
    title: 'Judul Sertifikat 01',
    issuer: 'Lembaga Penyelenggara',
    year: '2026',
    status: 'Segera Hadir',
  },
  {
    id: 2,
    title: 'Judul Sertifikat 02',
    issuer: 'Lembaga Penyelenggara',
    year: '2026',
    status: 'Segera Hadir',
  },
  {
    id: 3,
    title: 'Judul Sertifikat 03',
    issuer: 'Lembaga Penyelenggara',
    year: '2026',
    status: 'Segera Hadir',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">SERTIFIKAT &amp; PENGHARGAAN</h2>
          <p className="section-subtitle">Bukti kompetensi yang sedang dalam proses</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <div className="certificate-card" key={cert.id}>
              <span className="certificate-badge">{cert.status}</span>
              <div className="certificate-preview">
                <i className="fas fa-award"></i>
                <span>Gambar Sertifikat</span>
              </div>
              <span className="certificate-number">[{String(i + 1).padStart(2, '0')}]</span>
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">
                <i className="fas fa-building"></i> {cert.issuer}
              </p>
              <div className="certificate-meta">
                <span className="certificate-year">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
