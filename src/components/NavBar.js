import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Task Manager</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/todos" className="nav-link">Todos</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;