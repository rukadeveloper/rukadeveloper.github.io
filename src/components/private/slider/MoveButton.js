import React from "react";
import { useNavigate } from "react-router-dom";

const MoveButton = ({ slider }) => {
  const navigate = useNavigate();

  return (
    <button
      className="move__button"
      onClick={() => {
        navigate(slider.link);
      }}
    >
      <span>이동하기</span>
      <img src="/images/svg/location.svg" alt="location" width={16} />
    </button>
  );
};

export default MoveButton;
