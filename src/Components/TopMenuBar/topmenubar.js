import React from "react";
import "./topmenubar.css";
import GestioLogo from "./Logo.svg";

function topmenubar() {
  return (
    <div>
      <div className="navbar">
        <img
          className="logo"
          src={GestioLogo}
          style={{ width: 130 }}
          alt="website logo"
        />
      </div>
    </div>
  );
}

export default topmenubar;
