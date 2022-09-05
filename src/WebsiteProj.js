import React from 'react';
import './index.css';

function WebsiteProj() {
  return (
    <div className="Proj">
        <h2>This Website</h2>
        <a href="https://github.com/Jack-Culley/jackwebsite" target="_blank">
            <img className='picproj' src='Files/favicon.png' width="70%" />
        </a>
        <h3 className='text-box proj'>This was my first website built using ReactJS. In this website, 
        I utilized ReactRouter,&nbsp;          
        {<a className="link" href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target='_blank'>IntersectionObserver</a>}
         (for the scroll animations), and <a className="link" href="https://www.emailjs.com/" target='_blank'>EmailJS</a> 
         &nbsp;for the contact form. No template was used for the UI. I am currently using&nbsp;
        <a className="link" href="https://pages.github.com/" target='_blank'>Github Pages</a> to host 
        the website with a custom DNS from <a className="link" href="https://www.namecheap.com/" target='_blank'>Namecheap</a>. I learned a lot from this specific project, but am always looking to learn more so
        please let me know if there is anyway I can improve my design! (Praises also accepted)</h3>
    </div>
  );
}

export default WebsiteProj;