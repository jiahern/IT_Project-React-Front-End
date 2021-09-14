import React from "react";

// Stateless Functional Component
const NavBar = (props) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

// If need to use Life Cycle Hooks, must use Class Component, cannot use Stateless Function Component
export default NavBar;
