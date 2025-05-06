import React from 'react';
import './Header.css';

  const Header = () => (
    <header className="header">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/myImage.png`} alt="Kritika Parajuli"/>
      </div>
      <div className='name-container'><h1>Kritika Parajuli</h1></div>
      <div className='bio-container'><p>Hi! I am an aspiring software developer with an experience in full-stack development. In the future, I aim to go towards Quantum Computing.</p></div>
    </header>
  );

export default Header;
