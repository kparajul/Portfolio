import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../App.css'

  const Footer = () => (
    <footer className="footer">
      <div className='social-icons'>
        <a href="https://www.linkedin.com/in/kritika-parajuli/" target="_blank" rel="noopener noreferrer" className='linkedin-icon'><FaLinkedin size={30} color='#008080' /></a>
        <a href="https://github.com/kparajul" target="_blank" rel="noopener noreferrer" className='github-icon'><FaGithub size={30} color='#008080' /></a>
      </div><div>
        <p>© 2025 Kritika Parajuli</p>
      </div>
    </footer>
  );

export default Footer;