import React from 'react';
import './index.css';
import Form from './Form';

function Contact({conRef}) {
  return (
    <div className="main" id="contact" ref={conRef}>
      <h1>Contact Me</h1>
      <Form />
    </div>
  )
}

export default Contact;