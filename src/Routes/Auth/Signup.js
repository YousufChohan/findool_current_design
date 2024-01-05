import React from "react";
import "./Signup.css";
import "../../App.css";
import logo from "../../Assets/Images/logo2.png";

export default function Signup() {
  return (
    <>
      <div className="signup-wrapper">
        <div className="signup-box">
          <img src={logo} alt="Findool Logo" />
          <h2 className="heading">Sign Up</h2>
          <h2 className="sub-heading">Create your account</h2>
        </div>
      </div>
    </>
  );
}
