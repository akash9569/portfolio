import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css';
import contactImage from '../assets/images/contact1.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          alert('Message sent successfully!');
          console.log(result.text);
      }, (error) => {
          alert('Failed to send the message, please try again later.');
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="heading text-center">
        <i className="fas fa-headset"></i> Contact <span>Me</span>
      </h2>
      <Container className="mt-5">
        <Row className="justify-content-center align-items-center">
          <Col lg={6} className="text-center mb-4 mb-lg-0">
            <div className="image-box">
              <img src={contactImage} alt="Contact" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <div className="field">
                  <input type="text" name="user_name" placeholder="Name" required />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input type="email" name="user_email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="user_phone" placeholder="Phone" />
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="message">
                  <textarea name="message" placeholder="Message" required></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>
              <div className="button-area text-center mt-4">
                <Button type="submit" className="btn-submit">
                  Submit <i className="fa fa-paper-plane ms-2"></i>
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;