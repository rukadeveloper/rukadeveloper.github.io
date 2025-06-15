import React from "react";
import ButtonIcon from "./ButtonIcon";

const ButtonWrapper = () => {
  return (
    <div className="btns">
      <ButtonIcon className="btns-login" href="/login" label="로그인" />
      <ButtonIcon className="btns-cart" href="/cart" label="장바구니" />
      <ButtonIcon className="btns-join" href="/join" label="회원가입" />
    </div>
  );
};

export default ButtonWrapper;
