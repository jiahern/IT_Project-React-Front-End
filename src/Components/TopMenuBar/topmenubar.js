import React, { useState } from "react";
import "./Topmenubar.css";
import GestioLogo from "./Logo.svg";
import { NavLink, Link } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import Dropdown from "./Dropdown";

function Topmenubar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img
            className="logo"
            src={GestioLogo}
            style={{ width: 130 }}
            alt="website logo"
          />
        </Link>

        <div
          className="profile"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <BsIcons.BsPeopleCircle />
          <span className="profilename">People</span>
          {dropdown && <Dropdown />}
        </div>
      </nav>
    </div>
  );
}

export default Topmenubar;
