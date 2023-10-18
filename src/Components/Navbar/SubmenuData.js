import React from "react";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";

export const SubmenuData = [
  {
    title: "My Profile",
    path: "/profile",
    icon: <BsIcons.BsFillPersonFill />,
    cName: "submenu-item",
  },

  {
    title: "Logout",
    path: "/logout",
    icon: <BiIcons.BiLogOut />,
    cName: "submenu-item",
  },
];
