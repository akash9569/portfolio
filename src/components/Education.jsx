import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import educationData from '../data/educationData';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h1 className="heading text-center">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>
      <p className="qoute text-center">
        Education is not the learning of facts, but the training of the mind to think.
      </p>
      <Container className="mt-5">
        <Row className="justify-content-center">
          {educationData.map((edu, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="education-box text-center">
                <div className="image-wrapper">
                  <img src={edu.image} alt="" className="img-fluid" />
                </div>
                <div className="content">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                  <h4>{edu.years}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;