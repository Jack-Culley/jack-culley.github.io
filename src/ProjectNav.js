import React from 'react';
import './index.css';
import GalleryProj from './GalleryProj.js';
import WebsiteProj from './WebsiteProj.js';


function ProjectNav({page}) {
    if(page == 1) {
        return (
            <GalleryProj/>
        );
    } else if (page == 2) {
        return (
            <WebsiteProj/>
        );
    } else {
        return (
            null
        );
    }
}

export default ProjectNav;