import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-commerce-website',
    description: 'This is a frontend E-commerce project built using React and external CSS for styling. The application includes essential functionalities such as a search bar, product listing cards with add and remove features, and dynamic product fetching from APIs. It also integrates payment functionality for a seamless shopping experience.',
    github: 'https://github.com/heyAnkit18/E-commerce-website',
    deploy: 'https://shopsphereecomm.netlify.app/' // ✅ Updated link
  },
  {
    title: 'University Education Portal',
    description: 'The University Education Portal is a modern and responsive web application designed to showcase and provide information about Vedanta Engineering University. This project features a user-friendly interface with various sections.',
    github: 'https://github.com/heyAnkit18/University-Education-Portal-REACT',
    deploy: 'https://universityportalankit.netlify.app/'
  },
  {
    title: 'Restaurant Menu Website',
    description: 'The Restaurant Project is a modern web application showcasing a fictional restaurant menu and customer reviews. It features an elegant, categorized menu for easy navigation and a dedicated user reviews section to foster community engagement',
    github: 'https://github.com/heyAnkit18/Restaurant-Website-REACT-FRAMER-MOTION',
    deploy: 'https://restaurantpunjabitadka.netlify.app/'
  },
  {
    title: 'Virtual Reality Application',
    description: 'The Virtual Reality Project built with React and Tailwind CSS is a web application offering developers tools and resources for VR development. It features a responsive design, interactive components, smooth animations, and a modern UI for an immersive user experience.',
    github: 'https://github.com/heyAnkit18/VirtualReality-Website-REACT-TAILWIND',
    deploy: 'https://stunning-meerkat-de86a1.netlify.app/'
  },
  {
    title: 'Video Sharing Platform',
    description: 'A dynamic platform for uploading and sharing videos, featuring user authentication and video management. It also includes advanced search functionality and responsive design for an enhanced user experience.',
    frontendGithub: 'https://github.com/heyAnkit18/Video-Sharing-Platform-Frontend',
    backendGithub: 'https://github.com/heyAnkit18/Video-Sharing-Platform-Backend',
    deploy: 'https://video-sharing-platform-mq45.onrender.com/'
  },
  {
    title: 'Event Booking Application',
    description: 'An application for booking events with a user-friendly interface and comprehensive event management features. It also offers an intuitive layout and easy navigation for a seamless booking experience.',
    frontendGithub: 'https://github.com/heyAnkit18/Event_Booking_Application_Frontend',
    backendGithub: 'https://github.com/heyAnkit18/Event_Booking_Application_Backend',
    deploy: 'https://momentflow.netlify.app/'
  },
  
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <p>
          Here are some of the projects I’ve worked on. Each project showcases different aspects of my development skills and expertise.
        </p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-box">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.frontendGithub && (
                  <a 
                    href={project.frontendGithub} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn github-btn"
                  >
                    <FaGithub className="icon" /> Frontend
                  </a>
                )}
                {project.backendGithub && (
                  <a 
                    href={project.backendGithub} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn github-btn"
                  >
                    <FaGithub className="icon" /> Backend
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn github-btn"
                  >
                    <FaGithub className="icon" /> GitHub
                  </a>
                )}
                {project.deploy && (
                  <a 
                    href={project.deploy} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn deploy-btn"
                  >
                    <FaExternalLinkAlt className="icon" /> Deploy
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
