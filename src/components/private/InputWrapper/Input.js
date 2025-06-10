import React from "react";

const Input = ({
  type,
  placeholder,
  name,
  change,
  value,
  conditions,
  touched,
  setTouched,
  error,
}) => {
  return (
    <div className={!conditions && touched ? "failed" : ""}>
      <h2>{name}</h2>
      <input
        type={type}
        placeholder={placeholder}
        onChange={change}
        onFocus={() => {
          setTouched(true);
        }}
        value={value}
      />
      {!conditions && touched && <b>{error}</b>}
    </div>
  );
};

export default Input;
