import React, { useState } from "react";
import "../assets/css/addresources.css";
import { useToggle } from "./ContextProvider";
import { Link } from "react-router-dom";

const AddResource = () => {
  const [addData, setAddData] = useState({
    emp: "",
    name: "",
    app: "",
    rk: "",
    rt: "",
    as: "",
    ab: "",
  });
  const toggleVal = useToggle();
  return (
    <div
      className="addresource-container"
      style={
        toggleVal.toggle
          ? { width: "calc(100% - 14rem)", float: "right" }
          : null
      }
    >
      <form className="form">
        <section className="section one">
          <div className="column">
            <div className="input-group">
              <input
                type="text"
                onChange={(e) =>
                  setAddData({ ...setAddData, emp: e.target.value })
                }
                required
              />
              <label className="placeholder">emp</label>
            </div>
            <div className="input-group">
              <input
                type="text"
                required
                onChange={(e) =>
                  setAddData({ ...setAddData, name: e.target.value })
                }
              />
              <label className="placeholder">name</label>
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
            <div className="input-group">
              <select required>
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <label className="placeholder">tkv</label>
            </div>
          </div>
          <div className="column">
            <div className="input-group">
              <select
                required
                onChange={(e) =>
                  setAddData({ ...setAddData, app: e.target.value })
                }
              >
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <label className="placeholder">app</label>
            </div>
            <div className="input-group">
              <select required onChange={(e)=> setAddData({...setAddData, rk: e.target.value})}>
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="C">D</option>
                <option value="C">E</option>
                <option value="C">F</option>
              </select>
              <label className="placeholder">rk</label>
            </div>
            <div className="input-group">
              <select required>
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <label className="placeholder">re</label>
            </div>
            <div className="input-group">
              <select required>
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <label className="placeholder">place</label>
            </div>
          </div>
          <div className="column">
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">ut</label>
            </div>
            <div className="input-group">
              <select required>
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <label className="placeholder">bd</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">pc</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">emd</label>
            </div>
          </div>
        </section>
        <hr />
        <section className="section two">
          <div className="column">
            <h4>R</h4>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">rw</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">runc</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">rune</label>
            </div>
          </div>
          <div className="column">
            <h4>RD</h4>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder"></label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder"></label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder"></label>
            </div>
          </div>
          <div className="column">
            <h4>NT</h4>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder"></label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder"></label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder"></label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder"></label>
            </div>
          </div>
          <div className="column">
            <h4>ENT</h4>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder"></label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">op</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder"></label>
            </div>
          </div>
          <div className="column">
            <h4>OR</h4>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">of</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">tr</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">pn</label>
            </div>
          </div>
          <div className="column">
            <h4>RB</h4>
            <div className="input-group-radio">
              <input type="radio" />
              <label className="placeholder">Yes</label>
            </div>
            <div className="input-group-radio">
              <input type="radio" />
              <label className="placeholder">No</label>
            </div>
            <div className="input-group">
              <select required>
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <label className="placeholder">uc</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">cc</label>
            </div>
          </div>
          <div className="column">
            <h4></h4>
            <div className="input-group">
              <select required>
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <label className="placeholder">pu</label>
            </div>
            <div className="input-group">
              <select required>
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <label className="placeholder">pt</label>
            </div>
            <div className="input-group">
              <input type="date" required />
              <label className="placeholder">ads</label>
            </div>
            <div className="input-group">
              <input type="date" required />
              <label className="placeholder">ade</label>
            </div>
          </div>
          <div className="column">
            <h4>NU</h4>
            <div className="input-group">
              <label className="placeholder">Why No ?</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label className="placeholder">r/p to</label>
            </div>
          </div>
        </section>
        <Link className="link" to={"/viewresource"}>
          <button>submit</button>
        </Link>
      </form>
    </div>
  );
};

export default AddResource;