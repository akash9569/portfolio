import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import heroImage from '../assets/images/Akash1.png'; // Make sure this path is correct

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        'a Full Stack Developer',
        'a MERN Stack Developer',
        'an Android App Developer',
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Content on the left */}
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <div className="content">
              <h1>Hi There,<br /> I'm Akash <span>Singh</span></h1>
              <p>i am into <span className="typing-text" ref={typingRef}></span></p>
              <Button href='#about' className="btn-about-me mt-4">
                <span>About Me</span>
                <i className="fas fa-arrow-circle-down ms-2"></i>
              </Button>
              <div className="socials mt-5">
                <ul className="social-icons list-unstyled d-flex justify-content-center justify-content-lg-start">
                  <li><a className="linkedin me-3" aria-label="LinkedIn" href="https://www.linkedin.com/in/akash-singh-a69213242/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                  <li><a className="github me-3" aria-label="GitHub" href="https://github.com/akash9569" target="_blank"><i className="fab fa-github"></i></a></li>
                  <li><a className="twitter me-3" aria-label="Twitter" href="https://twitter.com/AkashSi41988194" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a className="instagram" aria-label="Instagram" href="https://www.instagram.com/iamakashsingh9/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </Col>
          {/* Image on the right */}
          <Col lg={6} className="text-center">
            <div className="image-wrapper">
              <img src={heroImage} alt="Akash Singh" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;