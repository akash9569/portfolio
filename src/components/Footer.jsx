import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import socialData from '../data/socialData';

export function Footer() {
    return (
        <section className="footer-section">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4} md={6} className="mb-4 text-center text-md-start">
                        <div className="box">
                            <h3>Akash's Portfolio</h3>
                            <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep Rising 🚀.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="mb-4 text-center text-md-start">
                        <div className="box">
                            <h3>Quick Links</h3>
                            <div className="links">
                                <a href="#home"><i className="fas fa-chevron-circle-right"></i> home</a>
                                <a href="#about"><i className="fas fa-chevron-circle-right"></i> about</a>
                                <a href="#skills"><i className="fas fa-chevron-circle-right"></i> skills</a>
                                <a href="#education"><i className="fas fa-chevron-circle-right"></i> education</a>
                                <a href="#project"><i className="fas fa-chevron-circle-right"></i> project</a>
                                <a href="#experience"><i className="fas fa-chevron-circle-right"></i> experience</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="mb-4 text-center text-md-start">
                        <div className="box">
                            <h3>Contact Info</h3>
                            <p> <i className="fas fa-phone"></i>+91 9569581233</p>
                            <p> <i className="fas fa-envelope"></i>akashsingh.internship@gmail.com</p>
                            <p> <i className="fas fa-map-marked-alt"></i>Mirzapur Uttar Pradesh, India-231304</p>
                            <div className="share mt-3">
                                <ul className="social-icons list-unstyled d-flex justify-content-center justify-content-lg-start">
                                    <li><a className="linkedin me-3" aria-label="LinkedIn" href="https://www.linkedin.com/in/akash-singh-a69213242/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                    <li><a className="github me-3" aria-label="GitHub" href="https://github.com/akash9569" target="_blank"><i className="fab fa-github"></i></a></li>
                                    <li><a className="twitter me-3" aria-label="Twitter" href="https://twitter.com/AkashSi41988194" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a className="instagram" aria-label="Instagram" href="https://www.instagram.com/iamakashsingh9/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="credit text-center mt-4">
                <h1 className="credit-text">Designed with <i className="fa-solid fa-heart"></i> by <a href="https://www.linkedin.com/in/akash-singh-a69213242/"> Akash Singh</a></h1>
            </div>
        </section>
    );
};