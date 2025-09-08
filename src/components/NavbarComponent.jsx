import React, { useState } from 'react';
import { Navbar, Container, Button, Offcanvas, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavbarComponent.css';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to handle navigation and smooth scrolling
  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // If not on the homepage, navigate to it first
      navigate('/');
      setTimeout(() => {
        // Wait for navigation to complete, then scroll
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on the homepage, just smooth scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    handleClose();
  };

  return (
    <>
      <Navbar expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="fas fa-code"></i> Akash
          </Navbar.Brand>
          <div className="d-lg-none">
            <Button variant="primary" onClick={handleShow}>
              <i className="fas fa-bars"></i>
            </Button>
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto">
              <Nav.Link onClick={(e) => handleNavLinkClick(e, 'home')}>Home</Nav.Link>
              <Nav.Link onClick={(e) => handleNavLinkClick(e, 'about')}>About</Nav.Link>
              <Nav.Link onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</Nav.Link>
              <Nav.Link onClick={(e) => handleNavLinkClick(e, 'education')}>Education</Nav.Link>
              <Nav.Link onClick={(e) => handleNavLinkClick(e, 'project')}>Project</Nav.Link>
              <Nav.Link onClick={(e) => handleNavLinkClick(e, 'experience')}>Experience</Nav.Link>
              <Nav.Link onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start" className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <i className="fas fa-code"></i> Akash
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'home')}>Home</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'about')}>About</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'education')}>Education</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'project')}>Project</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'experience')}>Experience</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={handleClose}>Blog</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarComponent;