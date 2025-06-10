import React from "react";
import CheckConditions from "./CheckConditions";

const NewInputWrapper = ({
  type,
  htmlFor,
  name,
  placeholder,
  onChange,
  value,
  isValid,
  errorMessage,
  validators,
}) => {
  return (
    <div>
      <div className={`new__input__wrapper`}>
        <input
          type={type}
          id={htmlFor}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <label htmlFor={htmlFor}>{name}</label>
      </div>
      {isValid.includes(false) ? (
        <b>{errorMessage}</b>
      ) : (
        <b style={{ color: "blue" }}>올바릅니다.</b>
      )}
      <div className="check__conditions">
        {validators.map((condition, i) => (
          <CheckConditions
            key={i}
            condition={condition}
            isValid={isValid}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default NewInputWrapper;
