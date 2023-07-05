import React from "react";
import './index.css';

import { FaRegUserCircle } from 'react';


const NavBar = () => {
    return (
      <div className="navbar">
        <nav className="nav">
          <ul className="ul">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
               <a href="/">Information</a> 
              
            </li>
            <li>
                
                <a href="/login"><FaRegUserCircle/></a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default NavBar;