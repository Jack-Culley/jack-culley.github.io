import React from 'react';
import './index.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Home() {

  return (
    <div className="main">
        <div className="container">
        <div className="column">
            <img className="me" src='Files/headshot.jpg' width='370px' height='auto' alt="Picture of Jack"/>
        </div>
        <div className="column text-box home">
        <h1>John "Jack" Culley</h1>
        <h4>Student Software Developer</h4>
        
        <div className='socials'>
                    <a className='plug' href="https://github.com/Jack-Culley" target="_blank">
                        <img className='ext' src='Files/git-logo.png' width="45" height="45" alt="link to github"/>
                    </a>
                    <a className='plug' href="https://www.linkedin.com/in/jack-culley-444b81204/" target="_blank">
                        <img className='ext' src='Files/linkedin.png' width="50" height="50" alt="link to linkedin"/>
                    </a>
                    <a className='plug' href="mailto:jcu2ley@gmail.com" target="_blank">
                        <img className='ext' src='Files/email.png' width='45' height='45' alt="link to email Jack"/>
                    </a>
        </div>
        <a href="#about" className='plug arrow'>
            <img className='ext' src='Files/down-done.png' width="40" height="40" alt="arrow"/>
        </a>
        </div>
        </div>
        <About />
        <Projects />
        <Contact />
    </div>
  );
}

export default Home;

