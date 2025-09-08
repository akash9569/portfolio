import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Project from './Project';
import Experience from './Experience';
import Contact from './Contact';

const MainPortfolio = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '120px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });

    // Animate Home section elements
    sr.reveal('.home .content h1', { origin: 'left' });
    sr.reveal('.home .content p', { origin: 'left', delay: 100 });
    sr.reveal('.home .content .btn-about-me', { origin: 'left', delay: 200 });
    sr.reveal('.home .content .socials', { origin: 'left', delay: 300 });
    sr.reveal('.home .image-wrapper', { origin: 'right', delay: 200 });

    // Animate About section elements
    sr.reveal('.about-section .heading', {});
    sr.reveal('.about-section .image', { origin: 'left', delay: 100 });
    sr.reveal('.about-section .content', { origin: 'right', delay: 200 });

    // Animate Skills section elements
    sr.reveal('.skills-section .heading', {});
    sr.reveal('.skills-section .skill-item', { interval: 75, delay: 100 });

    // Animate Education section elements
    sr.reveal('.education-section .heading', {});
    sr.reveal('.education-section .qoute', { delay: 100 });
    sr.reveal('.education-section .education-box', { interval: 125, delay: 200 });

    // Animate Project section elements
    sr.reveal('.project-section .heading', {});
    sr.reveal('.project-section .project-box', { interval: 125, delay: 100 });
    sr.reveal('.project-section .viewall-btn-container', { delay: 200 });

    // Animate Experience section elements
    sr.reveal('.experience-section .heading', {});
    sr.reveal('.experience-section .timeline-container', { interval: 125, delay: 100 });

    // Animate Contact section elements
    sr.reveal('.contact-section .heading', {});
    sr.reveal('.contact-section .image-box', { origin: 'left', delay: 100 });
    sr.reveal('.contact-section form', { origin: 'right', delay: 200 });
    
  }, []);

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Education />
      <Project />
      <Experience />
      <Contact />
    </>
  );
};

export default MainPortfolio;