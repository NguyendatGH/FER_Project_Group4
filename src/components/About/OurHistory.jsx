import React from "react";

const milestones = [
  {
    year: "2022",
    title: "Project Kickoff",
    desc: "The team was officially founded, set development goals, and built the initial platform with great enthusiasm.",
    icon: "🚀"
  },
  {
    year: "2023",
    title: "First Release",
    desc: "Completed the MVP, launched pilot testing, gathered feedback, and continuously improved based on early user input.",
    icon: "🎉"
  },
  {
    year: "2024",
    title: "Feature Expansion & Community Growth",
    desc: "Added new features, expanded partnerships, grew the user community, and aimed for a larger scale.",
    icon: "🌱"
  },
  {
    year: "2025",
    title: "Going Global",
    desc: "Launched the product internationally, partnered with global organizations, achieved outstanding milestones, and established a strong presence in the tech world.",
    icon: "🌏"
  }
];

const OurHistory = () => (
  <section style={{background: '#fff', padding: '90px 0'}}>
    <div className="container" style={{maxWidth: 950, margin: '0 auto'}}>
      <h2 style={{fontSize: '2.5rem', fontWeight: 900, textAlign: 'center', marginBottom: 48, color: '#222', letterSpacing: '-1px', textTransform: 'uppercase'}}>Our History</h2>
      <div style={{position: 'relative', marginLeft: 30, marginRight: 30, paddingTop: 10}}>
        <div style={{position: 'absolute', left: 44, top: 0, bottom: 0, width: 8, background: 'linear-gradient(180deg, #6366f1 0%, #4f8cff 100%)', borderRadius: 4, zIndex: 0, boxShadow: '0 0 16px #6366f133'}}></div>
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          {milestones.map((item, idx) => (
            <li key={idx} style={{position: 'relative', marginBottom: idx === milestones.length - 1 ? 0 : 64, zIndex: 1}}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{background: '#fff', border: '5px solid #6366f1', boxShadow: '0 2px 16px #6366f122', borderRadius: '50%', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, color: '#6366f1', marginRight: 44, zIndex: 2, transition: 'box-shadow 0.2s'}}>
                  {item.icon}
                </div>
                <div>
                  <div style={{fontWeight: 900, fontSize: '1.25rem', color: '#6366f1', letterSpacing: '1px', textTransform: 'uppercase'}}>{item.year}</div>
                  <div style={{fontWeight: 800, fontSize: '1.13rem', margin: '8px 0', color: '#222'}}>{item.title}</div>
                  <div style={{color: '#444', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 520}}>{item.desc}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default OurHistory; 