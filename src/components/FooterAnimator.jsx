import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Footer } from './Footer';

const FooterAnimator = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 1800,
      easing: 'ease-in-out',
      reset: false,
      viewFactor: 0.2, // This tells ScrollReveal to trigger the animation when 20% of the element is visible
    });
    sr.reveal('.footer-section .box', { origin: 'bottom', interval: 200 });
    sr.reveal('.footer-section .credit-text', { origin: 'bottom', delay: 400 });
  }, []);

  return <Footer />;
};

export default FooterAnimator;