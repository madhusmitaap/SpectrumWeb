// src/components/Team.jsx
import React from 'react';
import './OurTeam.css';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Sarans Mishra',
    role: 'FullStack Devloper',
    image: 'https://via.placeholder.com/150',
    description: <div className="social-icons2">
   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={23} /></a>
   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter size={23} /></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={23} /></a> 
  </div>,
  },
  {
    name: 'Shruti Nayak',
    role: 'FullStack Devloper',
    image: 'https://via.placeholder.com/150',
    description: <div className="social-icons2">
   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={23} /></a>
   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter size={23} /></a>
   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={23} /></a> 
  </div>,
  },
  {
    name: 'Ankita Sahu',
    role: 'Frontend Devloper',
    image:  "https://i.postimg.cc/QC6Dy7cR/ankita.webp",
    description: <div className="social-icons2">
   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={23} /></a>
   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter size={23} /></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={23} /></a> 
  </div>,
  },
  {
    name: 'Madhusmita Pradhan',
    role: 'Frontend Devloper',
    image: "https://i.postimg.cc/sgKGmGhR/madhusmita.webp",
    description: <div className="social-icons2">
   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={23} /></a>
   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter size={23} /></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={23} /></a> 
  </div>,
  },
  {
    name: 'Ankita Sunani',
    role: 'Frontend Devloper',
    image: "https://i.postimg.cc/sxSZ4npn/sunani.webp",
    description: <div className="social-icons2">
   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={23} /></a>
   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter size={23} /></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={23} /></a> 
  </div>,
  },
  {
    name: 'Ayusha Pattnayak',
    role: 'Frontend Devloper',
    image: 'https://via.placeholder.com/150',
    description: <div className="social-icons2">
   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={23} /></a>
   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter size={23} /></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={23} /></a> 
  </div>,
  },
  {
    name: 'Lagnajit Sahoo',
    role: 'Frontend Devloper',
    image: 'https://via.placeholder.com/150',
    description: <div className="social-icons2">
   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={23} /></a>
   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter size={23} /></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={23} /></a> 
  </div>,
  },
 
  
  // Add more team members as needed
];

const OurTeam = () => {
  return (
    <div className="py-12 sm:py-0 dark:bg-black
    dark:text-white duration-300 overflow-hidden">
    <section className="team-section">
      <div className="heading"><h2>MEET OUR TEAM</h2></div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default OurTeam;
