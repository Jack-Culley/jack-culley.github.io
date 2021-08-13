import React from 'react';
import './index.css';
import CryptoProj from './CryptoProj.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import WebsiteProj from './WebsiteProj.js';

function Projects() {
  return (
    <div className="main" id="project">
      <h1>Projects</h1>
      <Router>
        <div className='project-nav'>
              <Switch>
                <Route path="/" exact component={CryptoProj}/>
                <Route path="/project-2" component={WebsiteProj}/>
              </Switch>
              <ProjectNav />
        </div>
      </Router>
    </div>
  );
}

export default Projects;