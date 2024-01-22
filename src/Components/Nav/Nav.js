import React from 'react'
import './Nav.css'
import logo from '../Assets/jdlogosvg.svg'
import { FaBell } from "react-icons/fa6";
import { Link } from 'react-router-dom';



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
        <Link to= '../../Pages/Engineering'><li><button className='btn'>Login / Sign Up</button></li></Link>

      </ul>
        
    </div>
  )
}

export default Nav