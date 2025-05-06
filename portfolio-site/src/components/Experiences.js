
import React from 'react';
import './Body.css';
import './Header'

const Experiences = () => (
<div>
    <div className='experience-container'>
        <h2>Experiences</h2>
        <div className='experience-box'>
            <h3>Global EMRA Automation Engineering Intern - NOVELIS</h3>
             <div className='text-container'>
                <p>TBD</p>
            </div>
        </div>
        <div className='experience-box'>
            <h3>Software Engineering Intern - Jobs4Interns</h3>
             <div className='text-container'>
                <li>Developed and optimized data storage and retrieval process using MongoDB, ensuring 30% performance improvement</li>
                <li>Conducted API testing and reliability analysis, ensuring system stability across environments</li>
                <li>Designed efficient state management for front-end interfaces using React.js, enhancing user experience</li>
            </div>
        </div>
        <div className='experience-box'>
            <h3>Requirements Engineering - Research Intern</h3>
             <div className='text-container'>
                <li>Conducted in-depth analysis of UML diagrams to evaluate software model quality using quantifiable metrics, following methodology outlined in peer-reviewed research</li>
                <li>Contributed to an experimental framework aimed at identifying reliable indicators of high-quality software design models</li>
                <li>Managed a team using Agile methodologies and sprint planning, optimizing tools such as Jira, Gantt charts, Trello, optimizing team efficiency and deliverables</li>
            </div>
        </div>
    </div>
    <div className='experience-container'>
        <h2>Projects</h2>
        <div className='experience-box'>
            <h3>Envisionary Application - Fullstack</h3>
             <div className='text-container'>
                <li>Developed and integrated automation solutions in a web application that allowed users to manage predictions in real-time data analysis to meet the stakeholder requirements</li>
                <li>Implemented real-time data tracking and analysis, pulling information from multiple APIs to automate data collection and synchronization, improving accuracy in the data received by the users</li>
                <li>Maintained a Software Requirements Specification (SRS) document, systematically tracking system requirements and presented weekly updates to stakeholders based on those specifications</li>
            </div>
        </div>
        <div className='experience-box'>
            <h3>AWS Deployment - Server and Agent</h3>
             <div className='text-container'>
                <li>Automated the deployment of containerized applications using Amazon ECS and CodeDeploy, improving efficiency and consistency of application rollouts</li>
                <li>Configured and optimized AWS EC2 instances and Docker containers, while manually deploying the application to understand the deployment behind the scenes</li>
                <li>Implemented comprehensive monitoring and logging solutions with Amazon Cloudwatch and Loggly, to track performance, troubleshooting deployment inssues, and ensuring operational transparency</li>
            </div>
        </div>
        <div className='experience-box'>
            <h3>Genetic Algorithm Implementation - Parallelism</h3>
             <div className='text-container'>
                <li>Developed a multi-threaded genetic algorithm in Java, optimizing facility layout using parallel processing across 100 threads for faster computation</li>
                <li>Implemented thread-safe mechanisms using various data structures, timers and locks, ensuring data integrity and synchronization across parallel processes</li>
                <li>Optimized algorithm performance with custom mutation and crossover functions based on the facility needs, accurately solving the layout problem</li>
            </div>
        </div>
        <div className='experience-box'>
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
export default Experiences;