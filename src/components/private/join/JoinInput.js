import React from "react";
import ReactDOM from "react-dom";
import { cn } from "../../../utils/utils";
import NestModal from "./NestModal";

const JoinInput = ({
  htmlFor,
  label,
  isMust,
  isNest,
  nestState,
  nestClear,
  nestOpen,
  modalClose,
  modalSelect,
  placeholder,
  type,
  value,
  change,
  isValid,
  error,
  touched,
  touch,
  nestLoading,
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
        readOnly={nestClear && nestState}
      />
      {isNest && (
        <button
          onClick={isNest}
          disabled={nestState && nestClear}
          type="button"
        >
          {nestState && nestClear ? "확인 완료" : "중복 확인"}
        </button>
      )}
      {nestOpen &&
        ReactDOM.createPortal(
          <NestModal
            error={error}
            modalClose={modalClose}
            modalSelect={modalSelect}
            nestLoading={nestLoading}
          />,
          document.getElementById("root")
        )}
      {!isNest && !isValid && touched && <b>{error}</b>}
    </div>
  );
};

export default JoinInput;
