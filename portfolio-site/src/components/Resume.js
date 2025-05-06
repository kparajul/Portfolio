import React from 'react';
import './Resume.css';

const Resume = () => (
  <div className="resume" id="resume">
    <button className='resume-view' onClick={() => window.open(`${process.env.PUBLIC_URL}/Kritika-Resume.pdf`, '_blank')}>
        View full resume</button>
  </div>
);

export default Resume;