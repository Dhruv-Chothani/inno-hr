import './ServiceCard.css'

function ServiceCard({ icon: Icon, title, description, features = [] }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        {Icon && <Icon size={32} />}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      
      {features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      
      <a href="#" className="service-link">Learn More →</a>
    </div>
  )
}

export default ServiceCard
