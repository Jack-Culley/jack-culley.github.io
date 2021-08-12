import React from 'react';
import './index.css';

function WebsiteProj() {
  return (
    <div className="Proj">
        <h2>This Website</h2>
        <a href="https://github.com/Jack-Culley/jackwebsite" target="_blank">
            <img className='picproj' src='Files/headshot.jpg' width="40%" height="40%"/>
        </a>
        <h3 className='text-box proj'>This was my first website built using ReactJS. In this website, 
        I utilized ReactRouter,  
        {<a className="link" href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target='_blank'>IntersectionObserver</a>}
         (for the scroll animations), and <a className="link" href="https://www.emailjs.com/" target='_blank'>EmailJS</a> 
        for the contact form. No template was used for the UI. I learned a lot from this specific project, but am still a beginner so
        please let me know if there is anyway I can improve my design! (Praises also accepted)</h3>
    </div>
  );
}

export default WebsiteProj;