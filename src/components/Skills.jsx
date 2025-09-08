import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import skillsData from '../data/skillsData';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Container>
        <h2 className="heading text-center">
          <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
        </h2>
        <Row className="justify-content-center mt-5">
          {skillsData.map((skill, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index} className="mb-4">
              <div className="skill-item text-center">
                <img src={skill.imageUrl} alt={skill.name} className="img-fluid mb-2" />
                <span className="d-block">{skill.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;