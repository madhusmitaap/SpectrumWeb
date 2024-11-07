import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Leads.css'; 
import user_1 from '../../assets/user_1.jpg'; 
import {FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Leads() {
  const leaders = [
    {
      name: 'Sweta Padma Mahapatra',
      field: 'CONVENER',
      image: user_1,
      instagram: 'https://instagram.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
      name: 'Smruti Somyak Pradhan',
      field: 'COORDINATOR',
      image: user_1,
      instagram: 'https://instagram.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith'
    },
    {
      name: 'J R Prasad',
      field: 'COORDINATOR',
      image: user_1,
      instagram: 'https://instagram.com/robertbrown',
      linkedin: 'https://linkedin.com/in/robertbrown'
    },
    {
      name: 'Sruti Nayak',
      field: 'Software Lead',
      image: user_1,
      instagram: 'https://instagram.com/emilydavis',
      linkedin: 'https://linkedin.com/in/emilydavis'
    },
    {
      name: 'Sarans Mishra',
      field: 'Software Lead',
      image: user_1,
      instagram: 'https://instagram.com/michaelwilson',
      linkedin: 'https://linkedin.com/in/michaelwilson'
    },
    {
      name: 'Debabrata Sahoo',
      field: 'Design Lead',
      image: user_1,
      instagram: 'https://instagram.com/sophiataylor',
      linkedin: 'https://linkedin.com/in/sophiataylor'
    },
    {
      name: 'Atrayee Jha',
      field: 'Hardware Lead',
      image: user_1,
      instagram: 'https://instagram.com/davidclark',
      linkedin: 'https://linkedin.com/in/davidclark'
    },
    {
      name: 'Mirza Matin Baig',
      field: 'External Affairs',
      image: user_1,
      instagram: 'https://instagram.com/oliviamoore',
      linkedin: 'https://linkedin.com/in/oliviamoore'
    },
    {
      name: 'Public Relation',
      field: 'Spandan Das',
      image: user_1,
      instagram: 'https://instagram.com/liamwhite',
      linkedin: 'https://linkedin.com/in/liamwhite'
    }
  ];

  
  const slides = [];
  for (let i = 0; i < leaders.length; i += 3) {
    slides.push(leaders.slice(i, i + 3));
  }

  return (
    <div className="py-12 sm:py-0 dark:bg-black
    dark:text-white duration-300 overflow-hidden">
    <div className="carousel-container">
    < div className="Leads-title">
        <h1>LEADS</h1>
        
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        showArrows={true}
        emulateTouch={true}
        centerMode={false}
        selectedItem={0}
        className="carousel"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow left">
              &#8249;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow right">
              &#8250;
            </button>
          )
        }
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="card-group">
              {slide.map((leader, index) => (
                <div key={index} className="card">
                  <img src={leader.image} alt={`${leader.name}`} className="leader-image" />
                  <div className="card-content">
                    <h3>{leader.name}</h3>
                    <p>{leader.field}</p>
                    <div className="social-handles">
                      <a href={leader.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram size={24} />
                      </a>
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        ))}
      </Carousel>
    </div>
    </div>
    </div>
  );
}
