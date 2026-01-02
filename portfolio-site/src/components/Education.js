
import React from 'react';
import './Body.css';

const Education = () => (
        <div className='skills-box'>
            <h2>Education</h2>
            <div className='education'>
                <p>Bachelor of Science in Computer Science; Minor in Mathematics - December 2025</p>
                <p>State University of New York at Oswego</p>
            </div>
            
            <div className='div-divider'></div>

            <h3>Publication</h3>
             <div className='education'>
                <p>B. Tenbergen, K. Parajuli, T. Marten, M. Daun: Towards a Quantification Framework for Model Comprehension: A Qualitative Comparison of Measurements. In: Communications in Computer Science and Information Science, 2025. (in press)</p>
            </div>

            <div className='div-divider'></div>

            <h3>Certifications</h3>
             <div className='certifications'>
                <a href="https://www.credly.com/badges/aa064418-7431-40e5-b5f6-ec5b517d09ba/public_url" target="_blank" rel="noopener noreferrer">
                AWS Academy Cloud and Security Foundations </a>
                <a href="https://certification.testout.com/verifycert/6-1C6-VG3HBL" target="_blank" rel="noopener noreferrer">
                TestOut Security Pro </a>
            </div>

            <div className='div-divider'></div>
            
            <h3>Programming Languages</h3>
             <div className='education'>
                <p>Java, Python, Go, C++, C#, SQL</p>
            </div>

            <div className='div-divider'></div>

            <h3>Spoken Languages</h3>
             <div className='education'>
                <p>English (Fluent), Nepali (Native), Hindi (Fluent)</p>
            </div>
        </div>
);
export default Education;