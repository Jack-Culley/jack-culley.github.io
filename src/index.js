import './index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Home from './Home';

function Index() {
    return (
        <Router>
            <div className="Nav">
                <Nav />
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
            <div className="footer">
                <h5>&#169; 2021 Jack Culley</h5>

            </div>
        </Router>
    );
}

ReactDOM.render(<Index/>, document.getElementById('root'));



