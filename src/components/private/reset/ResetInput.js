import React from "react";

const ResetInput = ({
  type,
  label,
  buttonLabel,
  value,
  change,
  blur,
  valid,
  error,
  touched,
  addedCondition,
  click,
  ok,
  okLabel,
}) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input type={type} value={value} onChange={change} onBlur={blur} />
      {label !== "비밀번호 확인" && (
        <button
          type="button"
          disabled={label === "아이디" || !valid || !touched || !addedCondition}
          onClick={() => {
            click(true);
          }}
        >
          {ok ? okLabel : buttonLabel}
        </button>
      )}
      {!valid ? (
        <b style={{ color: "red" }}>{error}</b>
      ) : (
        <b style={{ color: "blue" }}>{error}</b>
      )}
    </div>
  );
};

export default ResetInput;
