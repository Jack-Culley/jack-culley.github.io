import React from 'react';
import './index.css';
import CryptoProj from './CryptoProj.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import WebsiteProj from './WebsiteProj.js';

function Projects() {
  return (
    <div className="main">
      <h2>Projects</h2>
      <Router>
        <div className='project-nav'>
              <Switch>
                <Route path="/" exact component={CryptoProj}/>
                <Route path="/j" component={WebsiteProj}/>
              </Switch>
              <ProjectNav />
        </div>
      </Router>
    </div>
  );
}

export default Projects;