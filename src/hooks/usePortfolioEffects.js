import { useEffect } from 'react'

export default function usePortfolioEffects() {
  useEffect(() => {
    // ===================================
    // Page Loader
    // ===================================
    const loader = document.createElement('div')
    loader.className = 'page-loader'
    loader.innerHTML = `
      <div class="loader-book">
        <div class="page"></div>
        <div class="page"></div>
        <div class="page"></div>
      </div>
      <div class="loader-text">Memuat portofolio...</div>
    `
    document.body.prepend(loader)

    const onLoad = () => {
      setTimeout(() => {
        loader.classList.add('hidden')
        document.body.classList.add('loaded')
        setTimeout(() => loader.remove(), 600)
      }, 800)
    }
    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }

    // ===================================
    // Scroll Progress Bar
    // ===================================
    const bar = document.createElement('div')
    bar.className = 'scroll-progress'
    document.body.prepend(bar)

    const onScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      bar.style.width = progress + '%'
    }
    window.addEventListener('scroll', onScrollProgress, { passive: true })

    // ===================================
    // Floating Particles
    // ===================================
    const container = document.createElement('div')
    container.className = 'particles'
    document.body.appendChild(container)

    const colors = ['var(--accent-1)', 'var(--accent-2)', 'var(--accent-3)', 'var(--accent-4)', 'var(--accent-5)']
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.width = (Math.random() * 6 + 3) + 'px'
      particle.style.height = particle.style.width
      particle.style.background = colors[Math.floor(Math.random() * colors.length)]
      particle.style.animationDuration = (Math.random() * 15 + 10) + 's'
      particle.style.animationDelay = (Math.random() * 10) + 's'
      container.appendChild(particle)
    }

    // ===================================
    // Hero Name Text Splitting + Reveal
    // ===================================
    const heroName = document.querySelector('.hero-name')
    if (heroName) {
      const text = heroName.textContent
      heroName.innerHTML = ''
      heroName.classList.add('text-revealed')
      ;[...text].forEach((char, i) => {
        const span = document.createElement('span')
        span.className = 'char'
        span.textContent = char === ' ' ? '\u00A0' : char
        span.style.animationDelay = (0.5 + i * 0.05) + 's'
        heroName.appendChild(span)
      })
    }

    // ===================================
    // Custom Cursor Trail
    // ===================================
    let dot = null
    let ring = null
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let animId = null
    let onMouseMove = null

    if (window.innerWidth >= 768) {
      dot = document.createElement('div')
      dot.className = 'cursor-dot'
      ring = document.createElement('div')
      ring.className = 'cursor-ring'
      document.body.appendChild(dot)
      document.body.appendChild(ring)

      onMouseMove = e => {
        mouseX = e.clientX
        mouseY = e.clientY
        dot.style.left = mouseX + 'px'
        dot.style.top = mouseY + 'px'
      }
      document.addEventListener('mousemove', onMouseMove)

      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.15
        ringY += (mouseY - ringY) * 0.15
        ring.style.left = ringX + 'px'
        ring.style.top = ringY + 'px'
        animId = requestAnimationFrame(animateRing)
      }
      animateRing()

      const hoverElements = document.querySelectorAll('a, button, .skill-card, .interest-card, .social-link')
      const onEnter = () => ring.classList.add('hover')
      const onLeave = () => ring.classList.remove('hover')
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    // ===================================
    // Ink Splash on Click
    // ===================================
    const onInkClick = e => {
      const splash = document.createElement('div')
      splash.className = 'ink-splash'
      splash.style.left = e.clientX + 'px'
      splash.style.top = e.clientY + 'px'
      document.body.appendChild(splash)
      setTimeout(() => splash.remove(), 600)
    }
    document.addEventListener('click', onInkClick)

    // ===================================
    // Magnetic Button Effect
    // ===================================
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
      btn.classList.add('btn-magnetic')
      const onMove = e => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
      }
      const onLeave = () => {
        btn.style.transform = 'translate(0, 0)'
      }
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
    })

    // ===================================
    // 3D Tilt Effect on Cards
    // ===================================
    document.querySelectorAll('.skill-card, .interest-card').forEach(card => {
      card.classList.add('card-3d')
      const onMove = e => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        const tiltX = (y - 0.5) * 10
        const tiltY = (x - 0.5) * -10
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`
      }
      const onLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
    })

    // ===================================
    // Counter Animation for Stats
    // ===================================
    const counters = document.querySelectorAll('.stat-number')
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target
            const target = parseInt(counter.dataset.target, 10)
            if (isNaN(target) || target === 0) return
            let current = 0
            const increment = target / 40
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                counter.textContent = target + (counter.dataset.suffix || '')
                clearInterval(timer)
              } else {
                counter.textContent = Math.floor(current) + (counter.dataset.suffix || '')
              }
            }, 40)
            counterObserver.unobserve(counter)
          }
        })
      },
      { threshold: 0.5 },
    )
    counters.forEach(counter => {
      const text = counter.textContent
      const num = parseInt(text, 10)
      if (!isNaN(num)) {
        counter.dataset.suffix = text.replace(num, '')
        counter.dataset.target = num
        counter.textContent = '0' + counter.dataset.suffix
        counter.classList.add('count-up')
        counterObserver.observe(counter)
      }
    })

    // ===================================
    // Section Reveal on Scroll
    // ===================================
    document.querySelectorAll('.about-text, .about-stats').forEach(el => el.classList.add('reveal-section'))
    document.querySelectorAll('.hero-image').forEach(el => el.classList.add('slide-from-right'))
    document.querySelectorAll('.hero-content').forEach(el => el.classList.add('slide-from-left'))

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed', 'visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    )
    document.querySelectorAll('.reveal-section, .slide-from-left, .slide-from-right, .slide-from-bottom, .zoom-reveal, .skew-reveal').forEach(el => {
      revealObserver.observe(el)
    })

    // ===================================
    // Stagger Reveal for Grid Items
    // ===================================
    const staggerObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 },
    )
    document.querySelectorAll('.skills-grid, .interest-grid, .about-details').forEach(el => {
      el.classList.add('stagger-reveal')
      staggerObserver.observe(el)
    })

    // ===================================
    // Typing Effect for Hero Title
    // ===================================
    const heroTitle = document.querySelector('.hero-title')
    let typeTimer = null
    if (heroTitle) {
      const text = heroTitle.textContent
      heroTitle.textContent = ''
      heroTitle.classList.add('typewriter-cursor')
      let i = 0
      const type = () => {
        if (i < text.length) {
          heroTitle.textContent += text.charAt(i)
          i++
          typeTimer = setTimeout(type, 80)
        } else {
          setTimeout(() => {
            heroTitle.classList.remove('typewriter-cursor')
          }, 2000)
        }
      }
      typeTimer = setTimeout(type, 1200)
    }

    // ===================================
    // Ripple Effect on Buttons
    // ===================================
    document.querySelectorAll('.btn').forEach(btn => {
      btn.classList.add('ripple')
      const onClick = e => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const ripple = document.createElement('span')
        ripple.className = 'ripple-circle'
        ripple.style.left = x + 'px'
        ripple.style.top = y + 'px'
        btn.appendChild(ripple)
        setTimeout(() => ripple.remove(), 600)
      }
      btn.addEventListener('click', onClick)
    })

    // ===================================
    // Navbar Scroll Effect + Back to Top
    // ===================================
    const navbar = document.querySelector('.navbar')
    const backToTop = document.getElementById('backToTop')

    const onScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll > 50) {
        navbar?.classList.add('scrolled')
      } else {
        navbar?.classList.remove('scrolled')
      }
      if (currentScroll > 500) {
        backToTop?.classList.add('visible')
      } else {
        backToTop?.classList.remove('visible')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const navLinks = document.querySelectorAll('.nav-link')
    const sections = document.querySelectorAll('section')

    const updateActiveNav = () => {
      const scrollPosition = window.scrollY + 150
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active')
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active')
            }
          })
        }
      })
    }
    updateActiveNav()
    window.addEventListener('scroll', updateActiveNav, { passive: true })

    // ===================================
    // Skill Progress Animation
    // ===================================
    const animateSkillProgress = () => {
      document.querySelectorAll('.skill-progress').forEach(progress => {
        const skillSection = document.getElementById('skills')
        if (!skillSection) return
        const sectionTop = skillSection.offsetTop
        const scrollPosition = window.scrollY + window.innerHeight
        if (scrollPosition > sectionTop + sectionTop * 0.5) {
          const progressValue = progress.getAttribute('data-progress')
          progress.style.width = `${progressValue}%`
        }
      })
    }
    window.addEventListener('scroll', animateSkillProgress, { passive: true })

    // ===================================
    // Intersection Observer for Fade-in
    // ===================================
    const fadeObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.1 },
    )
    document.querySelectorAll('.skill-card, .interest-card, .stat-card, .timeline-item, .contact-card').forEach(el => {
      el.classList.add('fade-in')
      fadeObserver.observe(el)
    })

    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.getElementById('contactForm')
    const showNotification = (message, type = 'info') => {
      const existingNotification = document.querySelector('.notification')
      if (existingNotification) {
        existingNotification.remove()
      }
      const notification = document.createElement('div')
      notification.className = `notification notification-${type}`
      notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
      `
      notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 99999;
        animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        font-family: 'Crimson Text', serif;
        font-size: 1rem;
        ${type === 'success' ? 'background: #7a9e7e; color: white;' : ''}
        ${type === 'error' ? 'background: #c4887a; color: white;' : ''}
        ${type === 'info' ? 'background: #8a7bb0; color: white;' : ''}
      `
      document.body.appendChild(notification)
      const closeBtn = notification.querySelector('.notification-close')
      const dismiss = () => {
        notification.style.animation = 'slideDown 0.3s ease forwards'
        setTimeout(() => notification.remove(), 300)
      }
      closeBtn.addEventListener('click', dismiss)
      setTimeout(() => {
        if (notification.parentElement) {
          dismiss()
        }
      }, 5000)
    }

    const onSubmit = async e => {
      e.preventDefault()
      const formData = new FormData(contactForm)
      const name = formData.get('name')
      const email = formData.get('email')
      const subject = formData.get('subject')
      const message = formData.get('message')

      if (!name || !email || !subject || !message) {
        showNotification('Mohon isi semua field', 'error')
        return
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotification('Email tidak valid', 'error')
        return
      }

      const submitBtn = contactForm.querySelector('.btn-submit')
      const originalText = submitBtn.innerHTML
      submitBtn.innerHTML = '<span>Mengirim...</span><i class="fas fa-spinner fa-spin"></i>'
      submitBtn.disabled = true

      try {
        const res = await fetch('https://formspree.io/f/mvkpkoon', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message }),
        })
        if (res.ok) {
          showNotification('Pesan berhasil dikirim!', 'success')
          contactForm.reset()
        } else {
          showNotification('Gagal mengirim. Coba lagi.', 'error')
        }
      } catch {
        showNotification('Gagal mengirim. Periksa koneksi.', 'error')
      } finally {
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
      }
    }
    contactForm?.addEventListener('submit', onSubmit)

    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================
    const onAnchorClick = e => {
      const anchor = e.currentTarget
      const href = anchor.getAttribute('href')
      if (!href || href === '#' || href.startsWith('http')) return
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', onAnchorClick)
    })

    // Add animation keyframes for notification
    const animStyle = document.createElement('style')
    animStyle.textContent = `
      @keyframes slideUp {
        from { transform: translateX(-50%) translateY(100px); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
      }
      @keyframes slideDown {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(100px); opacity: 0; }
      }
    `
    document.head.appendChild(animStyle)

    // ===================================
    // Cleanup
    // ===================================
    return () => {
      window.removeEventListener('load', onLoad)
      window.removeEventListener('scroll', onScrollProgress)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', updateActiveNav)
      window.removeEventListener('scroll', animateSkillProgress)
      if (onMouseMove) document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('click', onInkClick)
      contactForm?.removeEventListener('submit', onSubmit)
      if (typeTimer) clearTimeout(typeTimer)
      if (animId) cancelAnimationFrame(animId)
      counterObserver.disconnect()
      revealObserver.disconnect()
      staggerObserver.disconnect()
      fadeObserver.disconnect()
    }
  }, [])
}
