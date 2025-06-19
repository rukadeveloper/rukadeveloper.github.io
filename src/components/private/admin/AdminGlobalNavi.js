import React from "react";

import { Link } from "react-router-dom";

import { adminMenu } from "../../../mocks/adminScript";
import AdminLocalNavi from "./AdminLocalNavi";

const AdminGlobalNavi = () => {
  return (
    <nav id="gnb">
      <ul>
        {adminMenu.map((menu) => (
          <li>
            <Link to={menu.firstLink}>{menu.firstName}</Link>
            {menu.second.length > 0 && <AdminLocalNavi menu={menu} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AdminGlobalNavi;
