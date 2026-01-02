import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

  const Header = () => (
    <header className="header">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/myImage.png`} alt="Kritika Parajuli"/>
      </div>
      <div className='name-container'><h1>
        Kritika Parajuli {""}
        </h1></div>
        <div className="resume" id="resume">
        <div className="contact-info">
          <p>Email: <a href="mailto:kritikaparajuli55@gmail.com">kritikaparajuli55@gmail.com</a>
          </p>
          <div className='div-divider'></div>
          <a href="https://www.linkedin.com/in/kritika-parajuli/" target="_blank" rel="noopener noreferrer" className='linkedin-icon'><FaLinkedin size={30} color='#008080' /></a>
        <a href="https://github.com/kparajul" target="_blank" rel="noopener noreferrer" className='linkedin-icon'><FaGithub size={30} color='#008080' /></a>
        </div>
        <button className='resume-view' onClick={() => window.open(`${process.env.PUBLIC_URL}/CV_Kritika.pdf`, '_blank')}>
            View Full CV</button>
        
      </div>
    </header>
  );

export default Header;
