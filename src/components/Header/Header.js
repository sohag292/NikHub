import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ActiveLink from '../ActiveLink/ActiveLink';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sohag">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-1" >NikHub</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink to="/Statistics">Statistics</ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink to="/Appliedjobs">Applied Jobs</ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink to="/blogs">Blog</ActiveLink>
            </li>
          </ul>
          <button className="custom" type="button">Star Applying</button>

        </div>
      </div>
    </nav>
  );
}


