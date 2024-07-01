import React, { useState } from "react";
import "../assets/css/aside.css";
import { Link } from "react-router-dom";

const Aside = () => {
  const [active, setActive] = useState(1);
  const handleClick = (e) => {
    if (e.target.tagName === "A") {
      setActive(Number(e.target.className));
    }
  };

  return (
    <aside className="aside-container" onClick={handleClick}>
      <ul className="products">
        <li className="title">
          <h4>home</h4>
        </li>
        <li className="product">
        <Link className="link" to={'/'}><a className={active === 1 ? "1 active" : "1"}>dashboard</a></Link >
        </li>
      </ul>

      <ul className="products">
        <li className="title">
          <h4>resource</h4>
        </li>
        <li className="product">
          <Link className="link" to={'/addresource'}><a className={active === 2 ? "2 active" : "2"}>add resource</a></Link>
          <a className={active === 3 ? "3 active" : "3"}>view resource</a>
        </li>
      </ul>

      <ul className="products">
        <li className="title">
          <h4>report</h4>
        </li>
        <li className="product">
          <a className={active === 4 ? "4 active" : "4"}>JL</a>
          <a className={active === 5 ? "5 active" : "5"}>track</a>
          <a className={active === 6 ? "6 active" : "6"}>app reports</a>
          <a className={active === 7 ? "7 active" : "7"}>bundle wish</a>
          <a className={active === 8 ? "8 active" : "8"}>full report</a>
          <a className={active === 9 ? "9 active" : "9"}>allocation</a>
          <a className={active === 10 ? "10 active" : "10"}>
            Forecast Vs Actual Allocation
          </a>
          <a className={active === 11 ? "11 active" : "11"}>buffer resource</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
