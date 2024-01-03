import React from "react";
import logo from "../Assets/Images/logo2.png";
import search from "../Assets/Images/magnifier.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { MobileNav } from "./MobileNav";
function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="mobile-show">
          <MobileNav />
        </div>
        <Link to="/">
          <img src={logo} alt="Findool Logo" style={{ marginLeft: 20 }} />
        </Link>
        <div style={{ display: "flex", width: "60%" }}>
          <input
            placeholder="Search for anything"
            style={{
              backgroundColor: "transparent",
              width: "100%",
              border: "solid",
              borderWidth: 2,
              borderRightWidth: 0,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
              borderColor: "#f54029",
              outlineColor: "#f54029",
              padding: 10,
            }}
          />
          <div
            style={{
              padding: 10,
              backgroundColor: "#f54029",
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
            }}
          >
            <img
              src={search}
              alt="An Arrow for Sidebar"
              style={{ width: 30 }}
            />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link className="signup-button" to="/signup">
            Sign Up
          </Link>
          <Link className="login-button" to="/Login">
            Login
          </Link>
        </div>
      </div>
      {/* for large screens */}
      {/* for small screens*/}
      {/* <MobileNav /> */}
    </>
  );
}

export default Header;
