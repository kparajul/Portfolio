import React from 'react';
import './Header.css';
import { FaLinkedin } from 'react-icons/fa';

  const Header = () => (
    <header className="header">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/myImage.png`} alt="Kritika Parajuli"/>
      </div>
      <div className='name-container'><h1>
        Kritika Parajuli {""}
        <a href="https://www.linkedin.com/in/kritika-parajuli/" target="_blank" rel="noopener noreferrer" className='linkedin-icon'><FaLinkedin size={30} color='#008080' /></a>
        </h1></div>
      <div className='bio-container'><p>Hi! I am an aspiring software developer with an experience in full-stack development. I'm much more fun and funny in person!</p></div>
    </header>
  );

export default Header;
