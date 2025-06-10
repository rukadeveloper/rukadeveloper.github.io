import React from "react";
import PopupButton from "./PopupButton";

const EachIcons = ({ src, size, sub, click }) => {
  return (
    <div>
      <button>
        <img src={src} alt="profile" width={size * 16} />
      </button>
      <PopupButton sub={sub} click={click} />
    </div>
  );
};

export default EachIcons;
