import React, { useState } from "react";
import { SubmenuData } from "./SubmenuData";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "profile-submenu clicked" : "profile-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {SubmenuData.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                <div className="submenu-icon">{item.icon}</div>
                <div className="submenu-text">{item.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
