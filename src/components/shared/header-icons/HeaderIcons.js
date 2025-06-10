import React from "react";
import useSearch from "../../../store/searchStore";
import { useNavigate, useLocation } from "react-router-dom";
import EachIcons from "./EachIcons";

const HeaderIcons = () => {
  const { setIsSearch } = useSearch();
  const location = useLocation();

  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };

  const goSearch = () => {
    if (location.pathname === "/") {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };

  return (
    <div className="header__icons">
      <EachIcons
        src={"/images/svg/profile.svg"}
        size={2.2}
        sub={"로그인"}
        click={goLogin}
      />
      <EachIcons
        src={"/images/svg/search.svg"}
        size={1.7}
        sub={"검색하기"}
        click={goSearch}
      />
      <EachIcons
        src={"/images/svg/cart.svg"}
        size={1.8}
        sub={"장바구니"}
        click={goLogin}
      />
    </div>
  );
};

export default HeaderIcons;
