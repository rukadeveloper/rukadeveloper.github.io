import React from "react";
import ButtonIcon from "./ButtonIcon";

const ButtonWrapper = () => {
  const sessionState = sessionStorage.getItem("loginInfo");

  const parse = JSON.parse(sessionState);

  return (
    <div className="btns">
      {!parse && (
        <ButtonIcon className="btns-login" href="/login" label="로그인" />
      )}
      <ButtonIcon className="btns-cart" href="/cart" label="장바구니" />
      {!parse && (
        <ButtonIcon className="btns-join" href="/join" label="회원가입" />
      )}
      {parse && (
        <ButtonIcon className="btns-logout" href="/" label="로그아웃" />
      )}
    </div>
  );
};

export default ButtonWrapper;
