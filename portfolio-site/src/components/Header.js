import React from 'react';
import './Header.css';

  const Header = () => (
    <header className="header">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/myImage.png`} alt="Kritika Parajuli"/>
      </div>
      <div className='name-container'><h1>Kritika Parajuli</h1></div>
      <div className='bio-container'><p>Hi! I am an aspiring software developer with an experience in full-stack development. I'm much more fun and funny in person!</p></div>
    </header>
  );

export default Header;
