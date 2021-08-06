import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="main">
        <h1>John "Jack" Culley</h1>
        <h3>Welcome to my website!</h3>
        <img src='/Files/headshot.jpg' width='200px' height='300px'/>
        <p className="home-desc">This is a website I built with ReactJS. I wanted to be able to show viewers the front-end development
        skills I have learned during the past year while also showing other projects I am up to in a sort of portfolio.
        I really enjoyed designing and developing this website and I hope you can enjoy it as well!
        Please, have a look around and let me know if there is anyway I can improve my design! *Praises are also accepted.</p>
        <div className="res-container">
                <Link className='resume' to="/Files/Resume.pdf" target="_blank" download>Resume Download</Link>
        </div>
    </div>
  );
}

export default Home;