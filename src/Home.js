import React, {useState, useEffect} from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import useOnScreen from './Hooks/useOnScreen';
import About from './About';


function Home() {

//    const homeOptions = {
//            threshold: 0.4,
//    }
//    const [homeRef, homeVisibility] = useOnScreen(homeOptions);

  return (
    <div className="main">

        <h1>John "Jack" Culley</h1>
        <h4>Student Software Developer</h4>
        <div className="res-container">
             <Link className='resume' to="/Files/Resume.pdf" target="_blank" download>Resume Download</Link>
        </div>
        <div className='socials'>
                    <a className='plug' href="https://github.com/Jack-Culley" target="_blank">
                        <img className='ext' src='/Files/git-logo.png' width="40" height="40"/>
                    </a>
                    <a className='plug' href="https://www.linkedin.com/in/jack-culley-444b81204/" target="_blank">
                        <img className='ext' src='/Files/linkedin.png' width="45" height="45"/>
                    </a>
                    <a className='plug' href="mailto:jcu2ley@gmail.com" target="_blank">
                        <img className='ext' src='/Files/email.png' width='40' height='40'/>
                    </a>
        </div>
        <div className="arrow">
        <a href="#x" className='plug'>
            <img className='ext' src='/Files/down-done.png' width="55" height="55"/>
        </a>
        </div>
        <div id='x' className="home">
            <div></div>
            <h3 className='secondary'>Portfolio</h3>
            <img src='/Files/headshot.jpg' width='200px' height='300px'/>
            <h6 className="home-desc">This is a website I built with ReactJS.
            I really enjoyed designing and developing this website and I hope you can enjoy it as well!
            Please, have a look around and let me know if there is anyway I can improve my design! *Praises are also accepted.</h6>
        </div>
        <About />
    </div>
  );
}

export default Home;