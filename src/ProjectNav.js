import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

function ProjectNav() {
  return (
    <div className="pagination-cont">
        <ul className='pagination'>
            <NavLink activeStyle={{backgroundColor: "#618930", color: "white"}} exact to='/' className='proj-link'>
                <li>1</li>
            </NavLink>
            <NavLink activeStyle={{backgroundColor: "#618930", color: "white"}} to='/project-2' className='proj-link'>
                <li>2</li>
            </NavLink>
        </ul>
    </div>
  );
}

export default ProjectNav;