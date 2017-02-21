import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => {
  return (
    <nav className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <Link to="/">New Data</Link>
          </li>
          <li>
            <Link to="/report">Report</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export {Nav};
