import React from 'react'
import './Header.css'
import logo from '../Images/Frame.png'
import {BiSearchAlt, BiUser} from "react-icons/bi"
import { BsHeartFill, BsCart } from "react-icons/bs"
import callicons from '../Images/call icon.svg'
export default function Header() {
  return (
    <div className="container grid20">
    <div className='header-container'>
      <div className="logo-search-cont">
        <img src={logo} alt="" />
        <div className='search-cont'>
        <BiSearchAlt className='icon'/>
          <input type="text" placeholder='Search Products' />
        </div>
      </div>

      <div className='contact-social-cont'>
        <div className='contact'><img src={callicons} alt="" />
        <p>Call Us +009 000 000</p>
        </div>
     

      <div className='social-icon-cont'>
        <div className='header-icon'>
          <BiUser className='headerIcon-size'/>
        </div>
        <div className='header-icon'>
        <BsHeartFill className='headerIcon-size' />
        </div>
        <div className='header-icon'>
        <BsCart className='headerIcon-size'/>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
