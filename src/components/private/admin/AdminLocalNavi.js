import React from "react";
import { Link } from "react-router-dom";

const AdminLocalNavi = ({ menu }) => {
  return (
    <ul id="lnb">
      {menu.second.map((m) => (
        <li>
          <Link to={m.secondLink}>{m.secondName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default AdminLocalNavi;
