# PORTOFOLIO RAYHAND

> Portfolio website dengan tema **Brutalist** — kontras tinggi, border tebal 3px, geometri kotak, dan kartu ID 3D yang bergantung di leher.

![React](https://img.shields.io/badge/React-18-0066FF?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-FFD600?style=for-the-badge&logo=vite&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-r169-FF0000?style=for-the-badge&logo=threedotjs&logoColor=white)

## ✨ Fitur

- **3D Lanyard Card** — kartu ID 3D dengan simulasi fisika (React Three Fiber + Rapier), foto profil tampil di kartu
- **Brutalist Design System** — monospace + sans-serif, warna blok solid, offset shadow, tanpa gradient
- **Animated Particles & Cursor Trail** — efek interaktif yang dibuat dinamis via DOM
- **Filterable Projects Section** — daftar proyek dengan filter kategori (Web / Mobile / UI-UX)
- **Certificates & Journey Timeline** — riwayat sertifikat dan perjalanan belajar
- **Counter Animations & Scroll Reveal** — animasi saat section masuk viewport
- **Contact Form** — validasi sisi klien
- **Smooth Anchor Navigation** — navigasi satu halaman (`#home`, `#about`, `#skills`, `#interest`, `#contact`)

## 🛠️ Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | React 18 + Vite 5 |
| 3D & Fisika | Three.js, @react-three/fiber, @react-three/drei, @react-three/rapier, meshline |
| Styling | CSS murni dengan custom properties (design tokens) |
| Font | Space Mono (heading/UI) + Inter (body) |
| Icons | Font Awesome 6.4 |

## 🚀 Menjalankan Project

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

## 📁 Struktur

```
src/
├── App.jsx                  # Entry komponen, susunan section
├── index.css                # Global styles + design tokens
├── components/
│   ├── Navbar.jsx           # Navigasi anchor
│   ├── Hero.jsx             # Hero + 3D Lanyard
│   ├── Lanyard.jsx          # Kartu ID 3D (React Bits)
│   ├── About.jsx            # Tentang saya
│   ├── Skills.jsx           # Skill bars
│   ├── Marquee.jsx          # Ticker berjalan
│   ├── Projects.jsx         # Proyek + filter kategori
│   ├── Certificates.jsx     # Sertifikat
│   ├── Interest.jsx         # Minat bidang
│   ├── Journey.jsx          # Timeline perjalanan
│   ├── Contact.jsx          # Form kontak
│   └── Footer.jsx / BackToTop.jsx
└── hooks/
    └── usePortfolioEffects.js   # Loader, particles, cursor, reveal, counter
```

## 🔗 Link

- **Live Demo**: [tambahkan URL deploy di sini]
- **GitHub**: [@RayD15](https://github.com/RayD15)
- **AI Study Assistant**: [ai-study-ray.vercel.app](https://ai-study-ray.vercel.app) — proyek terbaru yang juga ditampilkan di portfolio ini

---

© 2026 Rayhand Ayandrie — Dibuat dengan React & kopi ☕
