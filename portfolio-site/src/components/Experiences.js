
import React from 'react';
import './Body.css';
import './Header'

const Experiences = () => (
<div>
    <div className='experience-container'>
        <h2>Internships</h2>
        <div className='experience-box'>
            <h3>Global EMRA Automation Engineering Intern - NOVELIS [May 2025 - Present]</h3>
             <div className='text-container'>
                <li>Built and maintained tools to streamline asset inventory management across automation systems, causing a 99% accuracy andvisibility for cross-functional teams</li>
                <li>Applied Agile practices to solve problems through stakeholder meetings, iterative development, and testing, delivering solutions aligned with user needs and business priorities</li>
                <li>Enhanced training and onboarding materials by identifying gaps, updating content, and designing new resources focusing on engagement, reducing the training time by 2 days while retaining the knowledge and information</li>
            </div>
        </div>
        <div className='experience-box'>
            <h3>Software Engineering Intern - Jobs4Interns [May 2024 - August 2024]</h3>
             <div className='text-container'>
                <li>Utilized Git for version control and Postman to test 20+ backend REST endpoints, integrating API calls with a MongoDB database to ensure reliable data flow and data integrity across the application</li>
                <li>Coordinated frontend-backend integration across the full stack, debugging and resolving cross-component issues to improve application responsiveness and overall performance</li>
                <li>Developed responsive frontend features through iterative releases, translating stakeholder requirements into scalable, maintainable code while supporting ongoing enhancements</li>
            </div>
        </div>
    </div>  
</div>
);
export default Experiences;