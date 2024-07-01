import React from "react";
import "../assets/css/addresources.css";
const AddResource = () => {
  return (
    <div className="addresource-container">
      <section className="group1">
        <article className="left">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
          <div className="confirmPassword">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" />
          </div>
          <div className="remeber">
            <div className="left">
              <input type="checkbox" defaultChecked />
              <label htmlFor="checkbox">Remeber this device</label>
            </div>
            <div className="right">
              <a href="#">Forgot Password ?</a>
            </div>
          </div>
          <button>Sign Up</button>
        </article>
        <article className="right">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
          <div className="remeber">
            <div className="left">
              <input type="checkbox" defaultChecked />
              <label htmlFor="checkbox">Remeber this device</label>
            </div>
            <div className="right">
              <a href="#">Forgot Password ?</a>
            </div>
          </div>
          <button>Sign In</button>
        </article>
      </section>
      <section className="group2">
		
	  </section>
      <section className="group3"></section>
    </div>
  );
};

export default AddResource;
