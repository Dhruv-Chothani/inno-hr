import './TeamMember.css'

function TeamMember({ name, position, image }) {
  return (
    <div className="team-member">
      <div className="team-member-image">
        <img src={image} alt={name} />
      </div>
      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-position">{position}</p>
    </div>
  )
}

export default TeamMember
