import React from "react";

const PopupButton = ({ sub, click }) => {
  return (
    <div className="sub__popup">
      <button onClick={click}>{sub}</button>
    </div>
  );
};

export default PopupButton;
