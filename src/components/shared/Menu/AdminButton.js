import React from "react";
import { useNavigate } from "react-router-dom";

const ResetButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="admin__go"
      onClick={() => {
        navigate("/admin");
      }}
    >
      관리자
    </button>
  );
};

export default ResetButton;
