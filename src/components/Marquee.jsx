const items = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Figma',
  'Laravel',
  'MySQL',
  'Git',
]

function Strip({ className }) {
  return (
    <div className={`marquee-strip ${className}`}>
      <div className="marquee-content">
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
            <i className="fas fa-asterisk"></i>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-band" aria-hidden="true">
      <Strip className="marquee-strip--dark" />
      <Strip className="marquee-strip--accent marquee-strip--reverse" />
    </div>
  )
}
