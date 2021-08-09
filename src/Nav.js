import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import useOnScreen from './Hooks/useOnScreen';


function Nav() {

    const navOptions = {
        rootMargin: "2000px 0px 50px 0px"
    }
    const [navRef, navBackground] = useOnScreen(navOptions);

  return (
  <div>
    <nav className={navBackground ? "scroll" : "unscroll"}>
        <a className='logo' href='#root'>
            <h3>Logo</h3>
        </a>
        <ul className='nav-links'>
            <a href='#about' className='nav-link'>
                <li>About Me</li>
            </a>
            <a className='nav-link' href='#projects'>
                <li>My Projects</li>
            </a>
            <a className='nav-link' href='#contact'>
                <li>Contact Me</li>
            </a>
        </ul>
        <div className="res-container">
             <Link className='resume' to="/Files/Resume.pdf" target="_blank" download>Resume Download</Link>
        </div>
    </nav>
    <div ref={navRef} className="nav-ref"></div>
  </div>

  );
}

export default Nav;