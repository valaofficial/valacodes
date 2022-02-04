import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
      <nav>
          <div className='navImg'>
              <img src='/images/logo.png' alt='Logo'/>
          </div>

          <div className='navbar-links'>
              <ul>
                  <li>
                      About
                  </li>
                  <li>
                      My Skills
                  </li>
                  <li>
                      My Projects
                  </li>
                  <li>
                      Contact
                  </li>
                  <div className='resume-btn'>
                      My Resume
                  </div>
              </ul>
          </div>
      </nav>
    );
  }

export default Navbar;
