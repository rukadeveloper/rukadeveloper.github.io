import React from "react";
import { menuData } from "../../../mocks/menuScript";
import SecondMenu from "./SecondMenu";
import { Link, useLocation } from "react-router-dom";

const MainMenu = () => {
  const location = useLocation();

  return (
    <nav className="app__menu">
      <ul>
        {menuData.map((menu, i) => (
          <li key={menu.id}>
            {menu.menuSecond.length === 0 ? (
              <Link
                to={menu.menuLink}
                className={`${
                  location.pathname === menu.menuLink ? "active" : ""
                }`}
              >
                {menu.menuFirst}
              </Link>
            ) : (
              <button>{menu.menuFirst}</button>
            )}
            {menu.menuSecond.length !== 0 && (
              <SecondMenu data={menu.menuSecond} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
