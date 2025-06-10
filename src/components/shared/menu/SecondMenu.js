import React from "react";
import { Link } from "react-router-dom";

const SecondMenu = ({ data }) => {
  return (
    <ul>
      {data.map((second, i) => (
        <li key={i}>
          <Link to={second.secondLink}>{second.secondName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SecondMenu;
