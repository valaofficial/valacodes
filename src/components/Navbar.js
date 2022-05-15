import React from 'react';
import './Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
function Navbar() {
  let width = window.screen.width;
    return (
      <nav>
          <div className='navImg'>
            <Link spy={true} smooth={true} duration={300} to='intro-section'>
              <img src='/images/logo.png' alt='Logo'/>
            </Link>
          </div>

          {width > 768 ?
          <div className='navbar-links'>
          <ul>
              <li>
                <Link spy={true} smooth={true} duration={300} to='about-section'>
                    About
                  </Link>
              </li>
              <li>
                <Link spy={true} smooth={true} duration={300} to='skills-section'>
                    My Skills
                </Link>
              </li>
              <li>
                  <Link spy={true} smooth={true} duration={300} to='projects-section'>
                    My Projects
                  </Link>
              </li>
              <li>
                  <Link spy={true} smooth={true} duration={300} to='contact-section'>
                    Contact
                  </Link>
              </li>
              <a href='/files/resume.pdf'  download='Maina Hyelavala Resume'>
                <div className='resume-btn'> My Resume </div>
              </a>
          </ul>
      </div>
      :<MobileNav/>}
      </nav>
    );
  }

export default Navbar;

function MobileNav(){
const menu = (
  <Menu
    items={[
      {
        label: <Link spy={true} smooth={true} duration={300} to='about-section'> About </Link>,
        key: '0',
      },{
        type: 'divider',
      },
      {
        label: <Link spy={true} smooth={true} duration={300} to='skills-section'> My Skills </Link>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: <Link spy={true} smooth={true} duration={300} to='projects-section'> My Projects </Link>,
        key: '2',
      },
      {
        type: 'divider',
      },
      {
        label: <Link spy={true} smooth={true} duration={300} to='contact-section'> Contact </Link>,
        key: '3',
      },
      {
        type: 'divider',
      },
      {
        label: <a href='/files/resume.pdf'  download='Maina Hyelavala Resume'><div className='resume-btn'> My Resume </div></a>,
        key: '2',
      }
    ]}
  />
);

return  (
  <Dropdown  overlay={menu} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <div className='menu-icon'>
        <i class="fi fi-sr-apps"></i>
      </div>
    </a>
  </Dropdown>
);
}
