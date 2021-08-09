import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function ProjectNav() {
  return (
    <div className="pagination-cont">
        <ul className='pagination'>
            <Link to='/'>
                <li>1</li>
            </Link>
            <Link to='/j'>
                <li>2</li>
            </Link>
        </ul>
    </div>
  );
}

export default ProjectNav;