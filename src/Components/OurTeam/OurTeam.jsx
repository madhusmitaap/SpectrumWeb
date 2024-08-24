// src/components/Team.jsx
import React from 'react';
import './OurTeam.css';

const teamMembers = [
  {
    name: 'Sarans Mishra',
    role: 'FullStack Devloper',
    image: 'https://via.placeholder.com/150',
    description: 'John is a full-stack developer with 5 years of experience.',
  },
  {
    name: 'Shruti Nayak',
    role: 'FullStack Devloper',
    image: 'https://via.placeholder.com/150',
    description: 'Jane leads the team with a focus on product design and user experience.',
  },
  {
    name: 'Ankita Sahu',
    role: 'Frontend Devloper',
    image: 'https://via.placeholder.com/150',
    description: 'Alice crafts beautiful and intuitive user interfaces.',
  },
  {
    name: 'Ankita Sunani',
    role: 'Frontend Devloper',
    image: 'https://via.placeholder.com/150',
    description: 'Alice crafts beautiful and intuitive user interfaces.',
  },
  {
    name: 'Ayusha Pattnayak',
    role: 'Frontend Devloper',
    image: 'https://via.placeholder.com/150',
    description: 'Alice crafts beautiful and intuitive user interfaces.',
  },
  {
    name: 'Lagnajit Sahoo',
    role: 'Frontend Devloper',
    image: 'https://via.placeholder.com/150',
    description: 'Alice crafts beautiful and intuitive user interfaces.',
  },
  {
    name: 'Madhusmita Pradhan',
    role: 'UI/UX,Frontend Devloper',
    image: 'https://via.placeholder.com/150',
    description: 'Alice crafts beautiful and intuitive user interfaces.',
  },
  
  // Add more team members as needed
];

const OurTeam = () => {
  return (
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
  );
};

export default OurTeam;
