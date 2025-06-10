import React from "react";
import BoardComponent from "./BoardComponent";

const ScoreBoard = ({ kboArray, activeIndex, setActiveIndex }) => {
  return (
    <div className="score__board">
      <BoardComponent label="home" kboArray={kboArray} index={activeIndex} />
      <BoardComponent label="away" kboArray={kboArray} index={activeIndex} />
    </div>
  );
};

export default ScoreBoard;
