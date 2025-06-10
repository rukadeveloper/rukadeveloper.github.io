import React from "react";
import { Link } from "react-router-dom";

const LogoLink = () => {
  return (
    <h1 className="logo">
      <Link to="/">
        <img src="/images/logo.svg" width={135} alt="logo" />
      </Link>
    </h1>
  );
};

export default LogoLink;
