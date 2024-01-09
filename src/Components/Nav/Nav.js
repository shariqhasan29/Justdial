import React from 'react'
import './Nav.css'
import logo from '../Assets/jdlogosvg.svg'
import { FaBell } from "react-icons/fa6";


const Nav = () => {
  return (
    <div className='Navbar'>
        <img src={logo} alt='logo'/>

      <ul className='Nav-list'>
        <li>English</li>
        <li>We are Hiring</li>
        <li>Investor Relations</li>
        <li>Advertise</li>
        <li>Free Listing</li>
        <li><FaBell /></li>
        <li><button className='btn'>Login / Sign Up</button></li>

      </ul>
        
    </div>
  )
}

export default Nav