import './SectionTitle.css'

function SectionTitle({ title, highlightWord, subtitle, centered = true }) {
  return (
    <div className={`section-title ${centered ? 'centered' : ''}`}>
      <h2>
        {title}{' '}
        {highlightWord && <span className="highlight">{highlightWord}</span>}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
