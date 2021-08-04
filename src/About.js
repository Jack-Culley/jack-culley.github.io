import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <title>About Me</title>
      <h1>About Jack Culley</h1>
      <div>
        <Link className='resume' to="/Files/Resume.pdf" target="_blank" download>Resume Download</Link>
      </div>
    </div>
  );
}

export default About;