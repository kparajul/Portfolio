
import React from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Education from './components/Education';
import './App.css';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Research from './components/Research';

function App() {
  return (
    <div className='App'>
      <div className='columns-container'>
        <div className='left-side'><Header/></div>
        <div className='right-side'>
          <Resume/>
        </div>
      </div>
      <div className='section-divider'></div>
      <div className='body-container'>
        <div>
          <div><Education/></div>
          <div><Skills/></div>
        </div>
        <div></div>
        <div className='scroll-container'><Experiences/></div>
      </div>
      <div className='section-divider'></div>
      <div className='body-container-second'>
        <div><Projects/></div>
        <div><Research/></div>
      </div>
    </div>
  );
}

export default App;
