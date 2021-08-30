import React from 'react';
import './index.css';


function Nav({abVis, projVis, conVis}) {

  return (
  <div>
    <nav>
        <a className='logo' href='#root'>
            <img src="Files/logo.png" width="90px" height="auto"/>
        </a>
        <div className='nav-links'>
            <a href='#about' className={abVis ? 'nav-link seen' : 'nav-link'}>
                <li>About Me</li>
            </a>
            <a className={projVis ? 'nav-link seen' : 'nav-link'} href='#project'>
                <li>My Projects</li>
            </a>
            <a className={conVis ? 'nav-link seen' : 'nav-link'} href='#contact'>
                <li>Contact Me</li>
            </a>
        </div>
        <div className="res-container">
            <a href="Files/Resume.pdf" target="_blank" download>
                <button className='resume'>Download My Resume</button>
            </a>
        </div>
    </nav>
  </div>

  );
}

export default Nav;