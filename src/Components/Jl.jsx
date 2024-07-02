import React from "react";
import { useToggle } from "./ContextProvider";
import '../assets/css/jl.css'
const Jl = () => {
  const toggleVal = useToggle();
  return (
    <div
      className="jl-container"
      style={
        toggleVal.toggle
          ? { width: "calc(100% - 14rem)", float: "right" }
          : null
      }
    >
      <div className="column">
        <div className="input-group">
          <select required>
            <option value=""></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <label className="placeholder">plt</label>
        </div>
		<div className="input-group">
          <select required>
            <option value=""></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <label className="placeholder">plt</label>
        </div>
      </div>
    </div>
  );
};

export default Jl;
