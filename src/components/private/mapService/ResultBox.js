import React from "react";

const ResultBox = ({ st }) => {
  return (
    <div className="result-box">
      <div>{st}</div>
      <div className="matching">예매가능</div>
    </div>
  );
};

export default ResultBox;
