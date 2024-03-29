import React, { useEffect, useRef, useState } from "react";
import { menuItemsData } from "./MenuItemData";
import { MobileMenuItems } from "./MobileMenuItems";
import hamburger from "../Assets/Images/hamburger.png";

export const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showMenu]);

  return (
    <nav className="mobile-nav">
      <button
        className="mobile-nav__menu-button"
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <img src={hamburger} alt="An icon for menu" style={{ width: 35 }} />
      </button>

      {/* If state true then render mobile menu items */}
      {showMenu && (
        <ul className="menus" ref={ref}>
          {menuItemsData.map((menu, index) => {
            return (
              <MobileMenuItems
                items={menu}
                key={index}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            );
          })}
        </ul>
      )}
    </nav>
  );
};
