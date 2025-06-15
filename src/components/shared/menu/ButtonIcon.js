import React from "react";
import { Link } from "react-router-dom";

const ButtonIcon = ({ className, href, label }) => {
  return (
    <Link className={className} to={href}>
      {label}
    </Link>
  );
};

export default ButtonIcon;
