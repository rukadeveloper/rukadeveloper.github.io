import React from "react";

const ResetInput = ({ label, value, button, type, click, onChange }) => {
  return (
    <div id="reset__input">
      <label>{label}</label>
      <input type={type} readOnly={label === "아이디"} value={value} />
      <button
        disabled={label === "아이디"}
        onClick={click}
        onChange={label !== "아이디" && onChange}
      >
        {button}
      </button>
    </div>
  );
};

export default ResetInput;
