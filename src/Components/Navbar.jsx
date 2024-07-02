import React from "react";
import "../assets/css/navbar.css";
import { useToggle } from "./ContextProvider";
const Navbar = () => {
const toggleVal=useToggle()
  return (
    <nav className="navbar-container">
      <div
        className={toggleVal?.toggle ? "toggle active" : "toggle"}
        onClick={() => toggleVal.setToggle(!toggleVal.toggle)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="title">tracker</h1>
      <div className="input">
        <input type="text" placeholder="Search items" />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="user">
        <i className="bi bi-person-circle"></i>
      </div>
    </nav>
  );
};

export default Navbar;
