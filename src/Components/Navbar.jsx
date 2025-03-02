import React, { useState } from "react";
import "../assets/css/navbar.css";
import { useToggle } from "./ContextProvider";
import { useLocation } from "react-router-dom";
const Navbar = () => {
const toggleVal=useToggle()
const location = useLocation()


  return (
    <nav className="navbar-container">
      <div
      style={location.pathname !== "/" && location.pathname !== "/signup" && location.pathname !=="/forgotpassword"  ? {display:"flex"} : {display:"none"}}
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
      {/* <Link to={'/sign'}></Link> */}
      <div className="user">
        <i className="bi bi-person-circle"></i>
      </div>
    </nav>
  );
};

export default Navbar;
