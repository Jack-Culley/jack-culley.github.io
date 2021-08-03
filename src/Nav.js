import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <Link to='/'>
            <h3>Logo</h3>
        </Link>
        <ul>
            <Link to='/about'>
                <li>About Me</li>
            </Link>
            <Link to='/projects'>
                <li>Projects</li>
            </Link>
            <Link to='/contact'>
                <li>Contact Me</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;