import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import useOnScreen from './Hooks/useOnScreen';


function Nav() {

    const [abRef, abVis] = useOnScreen({rootMargin: "0% 0% 175% 0%"});
    const [projRef, projVis] = useOnScreen({rootMargin: "-50% 0% 100% 0%"});
    const [conRef, conVis] = useOnScreen({rootMargin: "0% 0% 65% 0%"});

  return (
  <div>
    <nav>
        <a className='logo' href='#root'>
            <h3>Logo</h3>
        </a>
        <div className='nav-links'>
            <a href='#about' className={abVis ? 'nav-link seen' : 'nav-link'}>
                <li>About Me</li>
            </a>
            <a className={projVis ? 'nav-link seen' : 'nav-link'} href='#proj'>
                <li>My Projects</li>
            </a>
            <a className={conVis ? 'nav-link seen' : 'nav-link'} href='#contact'>
                <li>Contact Me</li>
            </a>
        </div>
        <div className="res-container">
             <Link className='resume' to="/Files/Resume.pdf" target="_blank" download>Resume Download</Link>
        </div>
    </nav>
    <div ref={abRef} className="ab-ref"></div>
    <div ref={projRef} className="proj-ref"></div>
    <div ref={conRef} className="con-ref"></div>
  </div>

  );
}

export default Nav;