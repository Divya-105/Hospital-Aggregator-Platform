import React, { useState } from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>H</span>ospital
            <span>A</span>ggrator
          </h2>
        </div>
        

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/HospitalRegister">HospitalRegister</NavLink>
            </li>
            <li>
              
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        

          
      </nav>
    </>
  );
};

export default Navbar;