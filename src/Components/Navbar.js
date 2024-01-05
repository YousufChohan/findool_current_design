import React from "react";
import MenuItems from "./MenuItems";
import { menuItemsData } from "./MenuItemData";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/logo2.png";

export const Navbar = () => {
  return (
    <>
      <Link className="home-logo" to="/">
        <i
          class="fa-solid fa-house --fa-primary-color"
          style={{ color: "#000" }}
        ></i>
      </Link>
      <nav className="desktop-nav">
        <div className="nav-logos">
          <i class="fa-solid fa-shop" style={{ color: "#000" }}></i>
          <i class="fa-solid fa-business-time" style={{ color: "#000" }}></i>
          <i class="fa-solid fa-newspaper" style={{ color: "#000" }}></i>
          <i class="fa-solid fa-magnifying-glass" style={{ color: "#000" }}></i>
          <i
            class="fa-solid fa-hand-holding-dollar"
            style={{ color: "#000" }}
          ></i>
          <i class="fa-solid fa-calendar-days" style={{ color: "#000" }}></i>
          <i class="fa-solid fa-gear" style={{ color: "#000" }}></i>
          <i class="fa-solid fa-comments" style={{ color: "#000" }}></i>
          <i class="fa-regular fa-image" style={{ color: "#000" }}></i>
          <i class="fa-solid fa-heart" style={{ color: "#000" }}></i>
          <i class="fa-solid fa-thumbs-up" style={{ color: "#000" }}></i>
          <i class="fa-solid fa-eye" style={{ color: "#000" }}></i>
          <i class="fa-solid fa-bell" style={{ color: "#000" }}></i>
          <i
            class="fa-solid fa-share-from-square"
            style={{ color: "#000" }}
          ></i>
          <i class="fa-solid fa-square-check" style={{ color: "#000" }}></i>
          <i class="fa-solid fa-briefcase" style={{ color: "#000" }}></i>
        </div>
        {/* <div className="right-triangle"></div> */}
        <ul className="menus">
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img src={logo} alt="Findool Logo" style={{ margin: "auto" }} />
            </Link>
          </div>

          {menuItemsData.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </ul>
      </nav>
    </>
  );
};
