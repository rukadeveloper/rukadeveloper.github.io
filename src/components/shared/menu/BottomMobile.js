import React, { useState } from "react";
import { menuData } from "../../../mocks/menuScript";
import { Link } from "react-router-dom";

const BottomMobile = ({ setMobileScreen }) => {
  const [menuOn, setMenuOn] = useState(false);
  const [menuOnIdx, setMenuOnIdx] = useState(0);

  const menuClick = (idx) => {
    if (!menuOn) {
      setMenuOn(true);
      setMenuOnIdx(idx);
    } else {
      setMenuOn(false);
    }
  };

  const originalClose = () => {
    setMobileScreen(false);
  };

  return (
    <ul className="bottom__mobile">
      {menuData.map((menu, i) => (
        <li key={menu.id}>
          {menu.menuSecond.length === 0 ? (
            <Link to={menu.menuLink} onClick={originalClose}>
              {menu.menuFirst}
            </Link>
          ) : (
            <>
              <button
                onClick={() => {
                  menuClick(i);
                }}
              >
                <span>{menu.menuFirst}</span>
                {!(menuOn && menuOnIdx === i) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <ul className={`${menuOn && menuOnIdx === i ? "active" : ""}`}>
                {menu.menuSecond.map((second, ii) => (
                  <li key={ii}>
                    <Link to={second.secondLink} onClick={originalClose}>
                      {second.secondName}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BottomMobile;
