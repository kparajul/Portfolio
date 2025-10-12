
import React from 'react';
import './Body.css';
import './Header'

const Experiences = () => (
<div>
    <div className='experience-container'>
        <h2>Experiences</h2>
        <div className='experience-box'>
            <h3>Global EMRA Automation Engineering Intern - NOVELIS [May 2025 - Present]</h3>
             <div className='text-container'>
                <li>Built and maintained tools in C# to streamline asset inventory management across automation systems, improving accuracy and visibility for cross-functional teams</li>
                <li>Applied Agile practices through stakeholder meetings, iterative development, and testing, delivering solutions aligned with user needs and business priorities</li>
                <li>Gained hands-on experience with cybersecurity and Active Directory, contributing to automation system security while learning from senior technical leaders</li>
                <li>Enhanced training and onboarding materials by identifying gaps, updating content, and designing new resources to improve knowledge-sharing across teams</li>
            </div>
        </div>
        <div className='experience-box'>
            <h3>Software Engineering Intern - Jobs4Interns [May 2024 - August 2024]</h3>
             <div className='text-container'>
                <li>Developed and optimized data storage and retrieval process using MongoDB, ensuring 30% performance improvement</li>
                <li>Conducted API testing and reliability analysis, ensuring system stability across environments</li>
                <li>Designed efficient state management for front-end interfaces using React.js, enhancing user experience</li>
            </div>
        </div>
    </div>  
</div>
);
export default Experiences;