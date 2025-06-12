import React from "react";

const SideButton = ({ click, clickState, src, alt }) => {
  return (
    <div className="side-button">
      <button onClick={click}>
        <img src={src} alt={alt} />
        <span>{!clickState ? "메뉴 접기" : "메뉴 펼치기"}</span>
      </button>
    </div>
  );
};

export default SideButton;
