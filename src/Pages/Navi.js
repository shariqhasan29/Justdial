import React from "react";

import logo from '../Components/Assets/jdlogosvg.svg'
import "../Components/Nav/Nav.css"
import { FaBell } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdKeyboardVoice } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navi = () => {
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />

      <ul className="Nav-list1">
        <li>
          <div className="input-field">
            <input className="input" placeholder="Coimbatore" />
          </div>
        </li>
        <li>
          <div className="input-field1">
            <input className="input" placeholder="S K Engineering Works" />
            <div className="icons">
              <MdKeyboardVoice />
              <FaSearch />
            </div>
          </div>
        </li>
      </ul>

      <ul className="Nav-list">
        <li>Advertise</li>
        <li>Free Listing</li>
        <li>
          <FaBell />
        </li>
        <Link to="../../Pages/Engineering">
          <li>
            <button className="btn">Login / Sign Up</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navi;
