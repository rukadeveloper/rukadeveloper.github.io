import React from "react";

import { cn } from "../../../utils/utils";

const InputComponent = ({
  type,
  htmlFor,
  placeholder,
  value,
  change,
  valid,
  err,
  touched,
  touching,
}) => {
  return (
    <>
      <div id="input-component" className={cn(!valid && touched && "error")}>
        <label htmlFor={htmlFor}>
          <input
            type={type}
            id={htmlFor}
            placeholder={placeholder}
            value={value}
            onChange={change}
            onFocus={touching}
          />
        </label>
      </div>
      {!valid && touched && <b>{err}</b>}
    </>
  );
};

export default InputComponent;
