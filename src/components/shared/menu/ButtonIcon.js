import React from "react";
import { Link } from "react-router-dom";

const ButtonIcon = ({ className, href, label }) => {
  const logout = (e) => {
    if (label === "로그아웃") {
      e.preventDefault();
      sessionStorage.setItem("loginInfo", null);
      console.log("로그아웃");
    }
  };

  return (
    <Link
      className={className}
      to={href}
      onClick={label === "로그아웃" && logout}
    >
      {label}
    </Link>
  );
};

export default ButtonIcon;
