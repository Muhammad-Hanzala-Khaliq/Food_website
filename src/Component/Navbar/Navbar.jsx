import React from 'react'
import './Navbar.css'
// import {GiHambugerMenu} from "react-icons/gi"
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  return (
    <div className="container">
    <div className='navbar-container'>
      <div className='navbar-sub-container'>
        <div className='burger-menu'>
        <GiHamburgerMenu className='burger-menu-icon' />
            <p>Short by Department</p>
        </div>

        <div className='navbar'>
            <ul className='anim-nav'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Page</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
