import './index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Index() {
    return (
        <Router>
            <div className="Nav">
                <Nav />
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
                <div className="Overview">\
                    <h2>Homepage</h2>
                </div>
            </div>
        </Router>
    );
}

ReactDOM.render(<Index/>, document.getElementById('root'));



