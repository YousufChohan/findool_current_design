import React from "react";
import MenuItems from "./MenuItems";
import { menuItemsData } from "./MenuItemData";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/logo2.png";

export const Navbar = () => {
  return (
    <>
      <nav className="desktop-nav">
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
