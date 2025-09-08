import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import './Project.css';

const Project = () => {
  return (
    <section className="project-section" id="project">
      <h2 className="heading text-center">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>
      <Container className="mt-5">
        <Row className="justify-content-center">
          {projectsData.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="project-box">
                <img src={project.image} alt={project.title} className="img-fluid" />
                <div className="content p-3">
                  <div className="tag">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="desc mt-3">
                    <p>{project.description}</p>
                  </div>
                  {/* The buttons are now placed here, ready to be pushed to the bottom */}
                  <div className="btns d-flex justify-content-between mt-3">
                    <Button href={project.viewLink} target="_blank" className="btn-project">
                      <i className="fas fa-eye me-2"></i> View
                    </Button>
                    <Button href={project.codeLink} target="_blank" className="btn-project">
                      Code <i className="fas fa-code ms-2"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="viewall-btn-container text-center mt-2">
            <Link to="/projects" className="btn-viewall">
                <span>View All</span>
                <i className="fas fa-arrow-right ms-2"></i>
            </Link>
        </div>
      </Container>
    </section>
  );
};

export default Project;