import './HeroSection.css'

function HeroSection({ title, subtitle, imageSrc, imageAlt, cta1Text, cta2Text, cta1Action, cta2Action }) {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-cta">
            {cta1Text && (
              <button className="btn btn-primary" onClick={cta1Action}>
                {cta1Text}
              </button>
            )}
            {cta2Text && (
              <button className="btn btn-secondary" onClick={cta2Action}>
                {cta2Text}
              </button>
            )}
          </div>
        </div>

        {imageSrc && (
          <div className="hero-image">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="hero-decoration hero-circle"></div>
      <div className="hero-decoration hero-square"></div>
    </section>
  )
}

export default HeroSection
