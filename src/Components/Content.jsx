import React, { useState } from "react";
import "../assets/css/content.css";
import pesron from "../assets/images/person.svg";
import client from "../assets/images/client.svg";
import mailbox from "../assets/images/mailbox.svg";
import save from "../assets/images/save.svg";
import bubble from "../assets/images/bubble.svg";
import connect from "../assets/images/connect.svg";
import Chart from "react-apexcharts";
import { useToggle } from "./ContextProvider";

const Content = () => {

  const toggleVal = useToggle()

  const [state, setState] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });
  return (
    <div className="content-container" style={toggleVal.toggle ? {width:"calc(100% - 14rem)", float:"right"}:null}>
      <About />
	  <div className="chart">
		<div className="title">
			<h3>revenue updates</h3>
			<span>over view of profit</span>
		</div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        height="300"
		width="1000"
      />
	  </div>
   
    </div>
  );
};

const About = () => {
  return (
    <section className="about-container">
      <ul className="items">
        <li
          className="item"
          style={{ backgroundColor: "#eff6ff", color: "#2563eb" }}
        >
          <figure>
            <img src={pesron} alt="#" />
          </figure>
          <div className="title">
            <h4>employee</h4>
            <span>96</span>
          </div>
        </li>
        <li
          className="item"
          style={{ backgroundColor: "#fff7ed", color: "#f97316" }}
        >
          <figure>
            <img src={client} alt="#" />
          </figure>
          <div className="title">
            <h4>client</h4>
            <span>3,650</span>
          </div>
        </li>
        <li
          className="item"
          style={{ backgroundColor: "#e0f2fe", color: "var(--sky-blue)" }}
        >
          <figure>
            <img src={mailbox} alt="#" />
          </figure>
          <div className="title">
            <h4>projects</h4>
            <span>356</span>
          </div>
        </li>
        <li
          className="item"
          style={{ backgroundColor: "#fef2f2", color: "#ef4444" }}
        >
          <figure>
            <img src={save} alt="#" />
          </figure>
          <div className="title">
            <h4>event</h4>
            <span>696</span>
          </div>
        </li>
        <li
          className="item"
          style={{ backgroundColor: "#ecfdf5", color: "#10b981" }}
        >
          <figure>
            <img src={bubble} alt="#" />
          </figure>
          <div className="title">
            <h4>payroll</h4>
            <span>$96k</span>
          </div>
        </li>
        <li
          className="item"
          style={{ backgroundColor: "#eff6ff", color: "#2563eb" }}
        >
          <figure>
            <img src={connect} alt="#" />
          </figure>
          <div className="title">
            <h4>reports</h4>
            <span>59</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Content;
