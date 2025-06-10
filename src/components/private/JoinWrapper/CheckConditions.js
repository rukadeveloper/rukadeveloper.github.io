import React from "react";

const CheckConditions = ({ condition, isValid, index }) => {
  return (
    // condition은 각각의 텍스트

    // isValid

    <div className={`${isValid[index] ? "hundred" : ""}`}>
      <span>{condition.type}</span>
    </div>
  );
};

export default CheckConditions;
