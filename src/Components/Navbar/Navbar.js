import React, { useEffect, useState } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import { SidebarData } from "./SideBarData";
import { NavLink, Link, useLocation } from "react-router-dom";
// import "./Topmenubar.css";
import GestioLogo from "./Logo.svg";
import Dropdown from "./Dropdown";
import { GetUserProfile } from "../../api";
// const BASE_URL = "http://localhost:5000/";
const BASE_URL = "https://gestioitproject.herokuapp.com/";

const Navbar = (props) => {
  const [inactive, setInactive] = useState(false);
  const showsetInactive = () => setInactive(!inactive);
  const [dropdown, setDropdown] = useState(false);

  //assign location variable
  const location = useLocation();

  //destructing pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  console.log("splitLocation is " + splitLocation[1]);

  useEffect(() => {
    props.onCollapse(inactive);
  }, [inactive]);

  const { loading, profile, error } = GetUserProfile();
  console.log(profile);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  // var profileName = JSON.stringify(profile);
  // console.log("What FUCK" + profileName);
  return (
    <div className="topnavbar-box">
      <nav className="topnavbar">
        <div className="toggle-menu-btn">
          <FaIcons.FaBars onClick={showsetInactive} />
        </div>
        <Link to="/" className="logobox">
          <img
            className="logo"
            src={GestioLogo}
            style={{ width: 130 }}
            alt="website logo"
          />
        </Link>

        <div
          className="profile"
          onClick={() => setDropdown(!false)}
          onMouseLeave={() => setDropdown(false)}
        >
          {/* <BsIcons.BsPeopleCircle /> */}
          {profile.map((item, index) => {
            return (
              <div>
                {(() => {
                  if (!item.profilePic || item.profilePic === "") {
                    return (
                      <div class="flex">
                        <div className=" py-1">
                          <BsIcons.BsPeopleCircle class="w-8 h-8" />
                        </div>
                        <span className="profilename ">
                          {item.firstName + item.lastName}
                        </span>
                      </div>
                    );
                  } else {
                    return (
                      <div class="flex">
                        <div className="">
                          <img
                            class="w-8 h-8"
                            src={BASE_URL + item.profilePic}
                            // alt="Profile Pic"
                          />
                        </div>
                        <span className="profilename ">
                          {item.firstName + item.lastName}
                        </span>
                      </div>
                    );
                  }
                })()}
                {/* {item.firstName + item.lastName}
              </span> */}
              </div>
            );
          })}
          {dropdown && <Dropdown />}
        </div>
      </nav>

      <body className={inactive ? "side-menu inactive" : "side-menu"}>
        <div className="top-section">
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
                    <Link
                      exact
                      to={"/" + item.path}
                      // className={"menu-item-trigger " + item.title}
                      className={
                        splitLocation[1] == item.path
                          ? "icon-active"
                          : "icon-inactive"
                      }
                      // activeClassName="active"
                    >
                      <a className="menu-item">
                        <div className="menu-icon">{item.icon}</div>
                        <span>{item.title}</span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Navbar;
