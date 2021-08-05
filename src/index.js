import './index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

function Index() {
    return (
        <Router>
            <div className="Nav">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
            <div className="footer">
                <img src="/Files/java-done.png" width="50" height="50" className="feet"/>
                <img src="/Files/css-done.png" width="50" height="50" className="feet"/>
                <img src="/Files/html-done.png" width="50" height="50" className="feet"/>
                <img src="/Files/react-done.png" width="50" height="50" className="feet"/>
                <img src="/Files/js-done.png" width="50" height="50" className="feet"/>
                <img src="/Files/nodejs-done.png" width="50" height="50" className="feet"/>

            </div>
        </Router>
    );
}

ReactDOM.render(<Index/>, document.getElementById('root'));



