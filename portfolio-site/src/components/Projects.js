
import React from 'react';
import './Body.css';
import './Header'

const Projects = () => (
<div>
    <div className='project-container'>
        <h2>Projects</h2>
        <div className='project-box'>
            <h3>Quotable - Fullstack</h3>
             <div className='text-container'>
                <li>Collaborated in a cross-functional team of 20 students to design, develop and deploy 'Quotable', a full-stack quote management application featuring a RESTful API, user authentication, and a responsive front-end built with React</li>
                <li>Served on the Requirements team, gathering and defining project requirements through stakeholder interviews and collaborative workshops, in addition to refining system requirements throughout the project's lifecycle</li>
                <li>Co-managed the project timeline and coordination among front-end, back-end, QA and UX/UI teams to ensure alignment between design goals and user needs</li>
                <li>Assisted developers and testers by identifying and resolving issues during the development process, delivering effective communication and ensuring agile collaboration to keep all teams on track for the bi-weekly scrums</li>
            </div>
        </div>
        <div className='project-box'>
            <h3>Envisionary Application - Fullstack</h3>
             <div className='text-container'>
                <li>Developed and integrated automation solutions in a web application that allowed users to manage predictions in real-time data analysis to meet the stakeholder requirements</li>
                <li>Implemented real-time data tracking and analysis, pulling information from multiple APIs to automate data collection and synchronization, improving accuracy in the data received by the users</li>
                <li>Maintained a Software Requirements Specification (SRS) document, systematically tracking system requirements and presented weekly updates to stakeholders based on those specifications</li>
            </div>
        </div>
        <div className='project-box'>
            <h3>AWS Deployment - Server and Agent</h3>
             <div className='text-container'>
                <li>Automated the deployment of containerized applications using Amazon ECS and CodeDeploy, improving efficiency and consistency of application rollouts</li>
                <li>Configured and optimized AWS EC2 instances and Docker containers, while manually deploying the application to understand the deployment behind the scenes</li>
                <li>Implemented comprehensive monitoring and logging solutions with Amazon Cloudwatch and Loggly, to track performance, troubleshooting deployment inssues, and ensuring operational transparency</li>
            </div>
        </div>
        <div className='project-box'>
            <h3>Genetic Algorithm Implementation - Parallelism</h3>
             <div className='text-container'>
                <li>Developed a multi-threaded genetic algorithm in Java, optimizing facility layout using parallel processing across 100 threads for faster computation</li>
                <li>Implemented thread-safe mechanisms using various data structures, timers and locks, ensuring data integrity and synchronization across parallel processes</li>
                <li>Optimized algorithm performance with custom mutation and crossover functions based on the facility needs, accurately solving the layout problem</li>
            </div>
        </div>
        <div className='project-box'>
            <h3>Proxy Server Implementation - TCP, UDP, TFTP</h3>
             <div className='text-container'>
                <li>Developed a proxy server in Java simulating TFTP with TCP-style reliability, supporting URL-based file retrieval, caching, and secure relaying to client</li>
                <li>Incorporated lightweight encryption using randomized XOR key exchange derived from session-based sender ID and random seed negotiation</li>
                <li>Designed custom TFTP packet headers and integrated IETF 2347 Options Extension for extended configuration flexibility</li>
            </div>
        </div>
    </div>
    
</div>
);
export default Projects;