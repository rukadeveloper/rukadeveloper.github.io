import React from "react";
import { menuData } from "../../../mocks/menuScript";
import { Link } from "react-router-dom";

const MobileGnb = ({ setMobileActive }) => {
  return (
    <ul id="mobileGnb">
      {menuData.map((menu) => (
        <li key={menu.id}>
          <Link
            to={menu.menuLink}
            onClick={() => {
              setMobileActive(false);
            }}
          >
            {menu.menuFirst}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileGnb;
