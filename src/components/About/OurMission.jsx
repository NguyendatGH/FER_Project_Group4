import React from "react";
import "../../css/components/AboutSectionOne.css";

const OurMission = () => (
  <section style={{
    background: 'linear-gradient(135deg, #e0e7ff 0%, #f9fafb 100%)',
    padding: '80px 0 60px 0',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2}}>
      <div style={{fontSize: 80, color: '#6366f1', marginBottom: 24, filter: 'drop-shadow(0 4px 16px #6366f133)'}}>
        <span role="img" aria-label="target">🎯</span>
      </div>
      <h2 style={{fontSize: '2.8rem', fontWeight: 800, marginBottom: 18, color: '#222', letterSpacing: '-1px'}}>Our Mission</h2>
      <div style={{width: 80, height: 4, background: 'linear-gradient(90deg, #6366f1 40%, #4f8cff 100%)', borderRadius: 2, margin: '0 auto 32px'}}></div>
      <p style={{fontSize: '1.25rem', color: '#444', maxWidth: 700, margin: '0 auto 18px', lineHeight: 1.7}}>
        We are committed to building a modern, user-friendly, and impactful technology platform for the community. Our mission is to <b>connect people</b>, <b>foster creativity</b>, and <b>deliver real value</b> to users through smart, secure, and sustainable digital solutions.
      </p>
      <p style={{fontSize: '1.08rem', color: '#666', maxWidth: 600, margin: '0 auto', lineHeight: 1.6}}>
        We believe that technology is not just a tool, but a bridge that helps everyone grow, learn, and create a better future for society.
      </p>
    </div>
    <div style={{position: 'absolute', left: '-80px', top: '40%', width: 200, height: 200, background: '#6366f111', borderRadius: '50%', zIndex: 1}}></div>
    <div style={{position: 'absolute', right: '-60px', top: '10%', width: 120, height: 120, background: '#4f8cff22', borderRadius: '50%', zIndex: 1}}></div>
  </section>
);

export default OurMission; 