import React from "react";
import "./Login.css";
import "../../App.css";
import logo from "../../Assets/Images/logo2.png";

export default function Login() {
  return (
    <>
      <div className="login-wrapper">
        <div className="login-box">
          <img src={logo} alt="Findool Logo" />
          <h2 className="heading">Log In</h2>
        </div>
      </div>
    </>
  );
}
