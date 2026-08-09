import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Beranda' },
    { href: '#about', label: 'Tentang' },
    { href: '#skills', label: 'Keahlian' },
    { href: '#interest', label: 'Minat' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className={`nav-menu${open ? ' active' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className="nav-link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={`hamburger${open ? ' active' : ''}`} onClick={() => setOpen(prev => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
