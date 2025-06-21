import React from "react";

import { Link } from "react-router-dom";

const LocalNavigation = ({ menu, headerActive }) => {
  return (
    <div id="lnb">
      {menu.menuSecond.map((second, i) => (
        <Link to={second.secondLink} key={i}>
          {second.secondName}
        </Link>
      ))}
    </div>
  );
};

export default LocalNavigation;
