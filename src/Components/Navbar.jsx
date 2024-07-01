import React from "react";
import "../assets/css/navbar.css";
const Navbar = ({ inputChanges }) => {
  return (
    <nav className="navbar-container">
      <h1 className="title">tracker</h1>
      <div
        className="input"
        style={inputChanges.active ? { backgroundColor: "var(--white)", border:"1px solid #808080" } : null}
        onClick={(e) => {
          e.stopPropagation()
          return inputChanges.setActive(true);
        }}
      >
        <input type="text" placeholder="Search items" />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
