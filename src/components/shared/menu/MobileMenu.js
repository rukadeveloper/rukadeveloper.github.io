import React from "react";

import { cn } from "../../../utils/utils";
import MobileGnb from "./MobileGnb";
import ButtonWrapper from "./ButtonWrapper";

const MobileMenu = ({ setMobileActive, mobileActive }) => {
  return (
    <div className={cn("mobile-menu", !mobileActive && "hidden")}>
      <button
        className="close-button"
        onClick={() => {
          setMobileActive(false);
        }}
      >
        <span className="sr-only">닫기 버튼</span>
        <img src="/images/close.svg" alt="close_button" width={36} />
      </button>
      <MobileGnb setMobileActive={setMobileActive} />
      <ButtonWrapper />
    </div>
  );
};

export default MobileMenu;
