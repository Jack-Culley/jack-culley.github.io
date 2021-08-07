import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import useOnScreen from './Hooks/useOnScreen';


function Nav() {

    const navOptions = {
//        rootMargin: "400px 0px -150px 0px"
    }
    const [navRef, navBackground] = useOnScreen(navOptions);

  return (
  <div>
    <nav className={navBackground ? "scroll" : "unscroll"}>
        <Link className='logo' to='/'>
            <h3>Logo</h3>
        </Link>
        <ul className='nav-links'>
            <Link className='nav-link' to='/about'>
                <li>About Me</li>
            </Link>
            <Link className='nav-link' to='/projects'>
                <li>Projects</li>
            </Link>
            <Link className='nav-link' to='/contact'>
                <li>Contact Me</li>
            </Link>
        </ul>
        <div className='socials'>
            <a href="https://github.com/Jack-Culley" target="_blank">
                <img src='/Files/github-logo-icon1.png' width="50" height="50" className='social'/>
            </a>
            <a href="https://www.linkedin.com/in/jack-culley-444b81204/" target="_blank">
                <img src='/Files/linkedin-logo-final.png' width="50" height="50" className='social'/>
            </a>
            <a href="mailto:jcu2ley@gmail.com" target="_blank">
                <img src='/Files/email-done.png' width='60' height='40' className='social'/>
            </a>
        </div>
    </nav>
    <div ref={navRef} className="nav-ref"></div>
  </div>

  );
}

export default Nav;