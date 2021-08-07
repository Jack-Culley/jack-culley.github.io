import React, {useState, useEffect} from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import useOnScreen from './Hooks/useOnScreen';

//function useOnScreenNav(homeRef) {
//   return () {
//
//   }
//}

function Home() {

    const homeOptions = {
            threshold: 0.4,
    }
    const [homeRef, homeVisibility] = useOnScreen(homeOptions);

  return (
    <div className="main">
        <h1>Welcome to my website!</h1>
        <div ref={homeRef} className={homeVisibility ? "scroll home" : "unscroll home"}>
            <div></div>
            <h3 className='secondary'>John "Jack" Culley</h3>
            <img src='/Files/headshot.jpg' width='200px' height='300px'/>
            <p className="home-desc">This is a website I built with ReactJS.
            I really enjoyed designing and developing this website and I hope you can enjoy it as well!
            Please, have a look around and let me know if there is anyway I can improve my design! *Praises are also accepted.</p>
            <div className="res-container">
                <Link className='resume' to="/Files/Resume.pdf" target="_blank" download>Resume Download</Link>
            </div>
        </div>
    </div>
  );
}

export default Home;