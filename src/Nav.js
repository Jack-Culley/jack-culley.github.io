import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='Nav'>
        <Link className='nav-link' to='/'>
            <h3>Logo</h3>
        </Link>
        <ul>
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
    </nav>
  );
}

export default Nav;