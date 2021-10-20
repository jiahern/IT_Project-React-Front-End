import React from "react";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import unionLogo from "./UnionLogo.svg";

export const SidebarData = [
  {
    title: "HomePage",
    path: "homepage",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
    exact: true,
  },
  // {
  //   title: "Login",
  //   path: "/login",
  //   icon: <FaIcons.FaHome />,
  //   cName: "nav-text",
  //   exact: true,
  // },
  {
    title: "Union",
    path: "union",
    icon: (
      <img
        // className=""
        src={unionLogo}
        style={{ width: 25 }}
        alt="website logo"
      />
    ),
    cName: "nav-text",
    exact: true,
  },
  {
    title: "Linkage",
    path: "linkage",
    icon: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
    exact: true,
  },
  {
    title: "Task",
    path: "task",
    icon: <FaIcons.FaTasks />,
    cName: "nav-text",
    exact: true,
  },
  {
    title: "Calendar",
    path: "calendar",
    icon: <BiIcons.BiCalendarAlt />,
    cName: "nav-text",
    exact: true,
  },
];
