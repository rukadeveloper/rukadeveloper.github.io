import React from "react";

import { Link } from "react-router-dom";

import { menuData } from "../../../mocks/menuScript";
import LocalNavigation from "./LocalNavigation";

const GlobalNavigation = ({ setHeaderActive, headerActive }) => {
  return (
    <div id="gnb">
      <ul
        id="gnbClear"
        onMouseOver={() => {
          setHeaderActive(true);
        }}
        onMouseLeave={() => {
          setHeaderActive(false);
        }}
      >
        {menuData.map((menu) => (
          <li key={menu.id}>
            <Link to={menu.menuLink}>{menu.menuFirst}</Link>
            <LocalNavigation menu={menu} headerActive={headerActive} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GlobalNavigation;
