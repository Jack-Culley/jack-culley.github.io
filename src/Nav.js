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
        <Link className='logo' to='/'>
            <h3>Logo</h3>
        </Link>
        <ul className='nav-links'>
            <Link className='nav-link' to='/projects'>
                <li>Projects</li>
            </Link>
            <Link className='nav-link' to='/contact'>
                <li>Contact Me</li>
            </Link>
        </ul>
    </nav>
    <div ref={navRef} className="nav-ref"></div>
  </div>

  );
}

export default Nav;