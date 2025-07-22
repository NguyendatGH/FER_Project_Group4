import React from "react";

const teamMembers = [
  {
    name: "Nguyen Van A",
    role: "Team Leader",
    img: "/images/testimonials/author-01.png",
    desc: "Leads the team, manages the project, connects members, and provides overall technical support. Always inspires creativity within the team."
  },
  {
    name: "Tran Thi B",
    role: "Frontend Developer",
    img: "/images/testimonials/author-02.png",
    desc: "Responsible for developing user interfaces, optimizing user experience, and ensuring responsiveness across all devices."
  },
  {
    name: "Le Van C",
    role: "Backend Developer",
    img: "/images/testimonials/author-03.png",
    desc: "Designs APIs, manages databases, ensures system security, and maintains backend performance."
  },
  {
    name: "Pham Thi D",
    role: "UI/UX Designer",
    img: "/images/testimonials/auth-01.png",
    desc: "Designs interfaces, builds wireframes and prototypes, and ensures optimal user experience."
  }
];

const cardStyle = {
  background: 'linear-gradient(135deg, #fff 80%, #e0e7ff 100%)',
  borderRadius: 18,
  boxShadow: '0 6px 32px rgba(99,102,241,0.08)',
  padding: 32,
  textAlign: 'center',
  border: '2px solid #e0e7ff',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
};

const imgStyle = {
  width: 96,
  height: 96,
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: 18,
  border: '4px solid #6366f1',
  boxShadow: '0 2px 12px #6366f122',
};

const OurTeam = () => (
  <section style={{background: '#f4f7fa', padding: '80px 0'}}>
    <div className="container" style={{maxWidth: 1100, margin: '0 auto'}}>
      <h2 style={{fontSize: '2.3rem', fontWeight: 800, textAlign: 'center', marginBottom: 44, color: '#222', letterSpacing: '-1px'}}>Our Team</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 36}}>
        {teamMembers.map((member, idx) => (
          <div key={idx} style={{...cardStyle}} className="team-card" onMouseOver={e => e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'none'}>
            <img src={member.img} alt={member.name} style={imgStyle} />
            <h3 style={{fontSize: '1.15rem', fontWeight: 700, margin: '14px 0 6px', color: '#333'}}>{member.name}</h3>
            <div style={{color: '#6366f1', fontWeight: 600, marginBottom: 10}}>{member.role}</div>
            <p style={{fontSize: '1.01rem', color: '#555', minHeight: 48}}>{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurTeam; 