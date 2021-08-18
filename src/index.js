import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

function Index() {
    return (
        <div>
            <div className="Nav">  
            <Home />
            </div>
            <div className="footer">
                <h5>&#169; 2021 Jack Culley</h5>
            </div>
        </div>
    );
}

ReactDOM.render(<Index/>, document.getElementById('root'));



