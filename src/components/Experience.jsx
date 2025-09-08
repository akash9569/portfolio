import React from 'react';
import { Container } from 'react-bootstrap';
import experienceData from '../data/experienceData';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="heading text-center">
        <i className="fas fa-briefcase"></i> Experience
      </h2>
      <Container className="mt-5">
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div 
              key={index}
              className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="content">
                <div className="tag">
                  <h3>{item.company}</h3>
                </div>
                <div className="desc">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;