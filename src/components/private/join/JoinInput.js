import React from "react";
import ReactDOM from "react-dom";
import { cn } from "../../../utils/utils";
import NestModal from "./NestModal";

const JoinInput = ({
  htmlFor,
  label,
  isMust,
  isNest,
  nestOpen,
  placeholder,
  type,
  value,
  change,
  isValid,
  error,
  touched,
  touch,
}) => {
  return (
    <div
      className={cn("join__input", !isNest && !isValid && touched && "error")}
    >
      <label htmlFor={htmlFor}>
        {label}
        {isMust && <span>*</span>}{" "}
      </label>
      <input
        className={cn(isNest && "w-70")}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={change}
        onBlur={touch}
      />
      {isNest && (
        <button disabled={!isValid} onClick={isNest}>
          중복확인
        </button>
      )}
      {nestOpen &&
        ReactDOM.createPortal(
          <NestModal error={error} />,
          document.getElementById("root")
        )}
      {!isNest && !isValid && touched && <b>{error}</b>}
    </div>
  );
};

export default JoinInput;
