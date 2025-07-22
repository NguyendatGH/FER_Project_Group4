import React from "react";

const values = [
  {
    icon: "💡",
    title: "Creativity",
    desc: "Constantly innovating, seeking optimal and creative solutions in every activity, creating unique value for the community."
  },
  {
    icon: "🤝",
    title: "Collaboration",
    desc: "Promoting teamwork, supporting and sharing knowledge, and growing sustainably together."
  },
  {
    icon: "🔒",
    title: "Security",
    desc: "Committed to protecting user data and privacy strictly, transparently, and safely."
  },
  {
    icon: "🌱",
    title: "Sustainable Development",
    desc: "Aiming for long-term solutions, being environmentally friendly, and making a positive contribution to society."
  }
];

const cardStyle = {
  background: 'linear-gradient(135deg, #fff 80%, #e0e7ff 100%)',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(99,102,241,0.07)',
  padding: 32,
  textAlign: 'center',
  border: '2px solid #e0e7ff',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
};

const iconStyle = {
  fontSize: 48,
  marginBottom: 18,
  color: '#6366f1',
  filter: 'drop-shadow(0 2px 8px #6366f122)'
};

const getGridStyle = () => {
  const width = window.innerWidth;
  if (width < 700) {
    return { display: 'grid', gridTemplateColumns: '1fr', gap: 36, maxWidth: 700, margin: '0 auto' };
  } else if (width < 1100) {
    return { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 36, maxWidth: 900, margin: '0 auto' };
  }
  return { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 36, maxWidth: 1200, margin: '0 auto' };
};

const OurValues = () => {
  const [style, setStyle] = React.useState(getGridStyle());

  React.useEffect(() => {
    const handleResize = () => setStyle(getGridStyle());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{background: '#f9fafb', padding: '80px 0'}}>
      <div className="container" style={{maxWidth: 1300, margin: '0 auto'}}>
        <h2 style={{fontSize: '2.3rem', fontWeight: 800, textAlign: 'center', marginBottom: 44, color: '#222', letterSpacing: '-1px'}}>Our Core Values</h2>
        <div className="value-grid" style={style}>
          {values.map((item, idx) => (
            <div key={idx} style={cardStyle} className="value-card" onMouseOver={e => e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'none'}>
              <div style={iconStyle}>{item.icon}</div>
              <h3 style={{fontSize: '1.13rem', fontWeight: 700, margin: '12px 0 8px', color: '#333'}}>{item.title}</h3>
              <p style={{fontSize: '1.01rem', color: '#555', minHeight: 48}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues; 