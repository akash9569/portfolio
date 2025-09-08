import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
import aboutImage from '../assets/images/akash.jpg';
import socialData from '../data/socialData';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <h2 className="heading text-center"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
        <Row className="align-items-center justify-content-center mt-5">
          <Col lg={5} className="text-center mb-4 mb-lg-0">
            <div className="image">
              <img 
                src={aboutImage} 
                alt="Akash Singh" 
                className="img-fluid rounded-circle" 
              />
            </div>
          </Col>
          <Col lg={7}>
            <div className="content">
              <h3>I'm Akash</h3>
              <span className="tag badge bg-primary">Full Stack Developer</span>
              <p className="mt-3">
                Akash Singh, an aspiring Software Engineer and B.Tech (CSE) student at the School of Management Sciences,
                Lucknow, with a strong foundation in programming, databases, and modern web technologies. Seeking challenging
                opportunities to apply technical skills, contribute to organizational growth, and continuously enhance
                professional expertise.
              </p>
              <div className="box-container mt-4">
                <div className="box">
                  <p><span>email:</span> akashsingh.internship@gmail.com</p>
                  <p><span>place:</span> Mirzapur, Uttar Pradesh, India - 231304</p>
                </div>
              </div>
              <div className="resumebtn mt-4">
                <Button 
                  href="https://drive.google.com/file/d/1dbFr__PCI7iCrD4MNv4jPvvoh8D_P_8v/view?usp=sharing" 
                  target="_blank" 
                  className="btn-resume"
                >
                  <span>Resume</span>
                  <i className="fas fa-chevron-right ms-2"></i>
                </Button>
              </div>

              {/* NEW: Social media buttons added here */}
              <div className="about-socials mt-4 d-flex justify-content-center justify-content-lg-start">
                {socialData.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={social.iconClass}
                      aria-label={social.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                ))}
              </div>
              {/* END NEW SOCIALS */}

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;