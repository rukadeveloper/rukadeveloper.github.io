import React from "react";
import MobileTitle from "./MobileTitle";
import MobileScore from "./MobileScore";
import MobileBoard from "./MobileBoard";

const MobileScoreboard = ({ data }) => {
  return (
    <div className="mobile__score__board">
      <MobileTitle />
      <MobileScore>
        <span>{data.date.split(" ")[1]}</span>
        <MobileBoard data={data} />
      </MobileScore>
    </div>
  );
};

export default MobileScoreboard;
