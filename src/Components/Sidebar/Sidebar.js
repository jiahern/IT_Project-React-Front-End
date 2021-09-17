import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import { SidebarData } from "./SideBarData";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const { onClick, to, exact } = props;
  const [inactive, setInactive] = useState(false);
  const showsetInactive = () => setInactive(!inactive);

  useEffect(() => {
    props.onCollapse(inactive);
  }, [inactive]);

  return (
    <body className={inactive ? "side-menu inactive" : "side-menu"}>
      <div className="top-section">
        <div className="toggle-menu-btn">
          <FaIcons.FaBars onClick={showsetInactive} />
        </div>

        <div className="main-menu">
          <ul>
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  exact={item.exact}
                  onClick={() => {
                    if (inactive) {
                      setInactive(false);
                    }
                  }}
                >
                  <NavLink exact to={item.path} className="menu-item-trigger">
                    <a className="menu-item">
                      <div className="menu-icon">{item.icon}</div>
                      <span>{item.title}</span>
                    </a>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </body>
  );
};

export default Sidebar;
