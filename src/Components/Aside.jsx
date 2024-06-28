import React from "react";
import "../assets/css/aside.css";

const Aside = () => {
  return (
    <aside className="aside-container">
      <ul className="products">
        <li className="title">
          <h4>home</h4>
        </li>
        <li className="product">
          <a href="#">dashboard</a>
        </li>
      </ul>

      <ul className="products">
        <li className="title">
          <h4>resource</h4>
        </li>
        <li className="product">
          <a href="#">add resource</a>
          <a href="#">view resource</a>
        </li>
      </ul>

      <ul className="products">
        <li className="title">
          <h4>report</h4>
        </li>
        <li className="product">
          <a href="#">JL</a>
          <a href="#">track</a>
          <a href="#">app reports</a>
          <a href="#">bundle wish</a>
          <a href="#">full report</a>
          <a href="#">allocation</a>
          <a href="#">Forecast Vs Actual Allocation</a>
          <a href="#">buffer resource</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
