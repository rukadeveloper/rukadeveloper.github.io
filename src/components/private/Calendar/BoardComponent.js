import React from "react";

const BoardComponent = ({ label, kboArray, index }) => {
  return (
    <div
      className={`board__component ${
        kboArray[index].status === "취소" ? "opacity__down" : ""
      }`}
    >
      <div className="profile">
        <img src={kboArray[index][label + "Image"]} alt="profile" />
      </div>
      <span>{kboArray[index][label + "Team"]}</span>
      <div className="score">
        <span>
          {kboArray[index][label + "Score"] != null
            ? kboArray[index][label + "Score"]
            : 0}
        </span>
      </div>
    </div>
  );
};

export default BoardComponent;
