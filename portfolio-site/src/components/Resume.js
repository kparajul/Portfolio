import React from 'react';
import './Resume.css';

const Resume = () => (
  <div className="resume" id="resume">
    <div className="contact-info">
      <h3>Contact Me:</h3>
      <p>Email: <a href="mailto:kritikaparajuli55@gmail.com">kritikaparajuli55@gmail.com</a>
      </p>
    </div>
    <button className='resume-view' onClick={() => window.open(`${process.env.PUBLIC_URL}/Kritika-Resume.pdf`, '_blank')}>
        View full resume</button>
    
  </div>
);

export default Resume;