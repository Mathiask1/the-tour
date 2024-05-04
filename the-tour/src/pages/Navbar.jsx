import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/App.css";


function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="navbar">
          <li className="navbar">
            <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
          </li>

          <li className="navbar">
            <a href="https://thetourforums.proboards.com/" rel="noreferrer">
              Forums
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;