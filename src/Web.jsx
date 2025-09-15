import React from 'react';
import { Link } from 'react-router-dom';
import './Webpage.css';

function Web() {
  return (
    <div>
      <header>
        <h1 className='bar'>DEV@Deakin</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="query">Query</Link>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
          <Link className="log" to="/logout">Log Out</Link>
        </div>

      </header>
    </div>
  );
}

export default Web;