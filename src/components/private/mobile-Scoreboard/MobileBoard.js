import React from "react";
import MobileBoardComponent from "./MobileBoardComponent";

const MobileBoard = ({ data }) => {
  return (
    <div
      className={`mobile__real__board ${
        data.status === "취소" ? "opac-down" : ""
      }`}
    >
      <MobileBoardComponent label="away" data={data} />
      <span>{data.status}</span>
      <MobileBoardComponent label="home" data={data} />
    </div>
  );
};

export default MobileBoard;
