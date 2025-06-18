import React from "react";
import { useNavigate } from "react-router-dom";

const ResetButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="reset__go"
      onClick={() => {
        navigate("/reset");
      }}
    >
      정보 수정
    </button>
  );
};

export default ResetButton;
