import React from "react";

const MobileBoardComponent = ({ label, data }) => {
  return (
    <div
      className={`mobile__board__component ${
        label === "home" ? "reverse" : ""
      }`}
    >
      <div>
        <div>
          <span>{data[label + "Team"]}</span>
          <span>
            {data[label + "Pitcher"] ? data[label + "Pitcher"] : "없음"}
          </span>
        </div>
        <div>
          <img src={data[label + "Image"]} alt="team__logo" />
        </div>
      </div>
      <span>{data[label + "Score"] == null ? 0 : data[label + "Score"]}</span>
    </div>
  );
};

export default MobileBoardComponent;
