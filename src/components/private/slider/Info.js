import React from "react";

const Info = ({ info }) => {
  return (
    <div className="info">
      <h2>{info.label}</h2>
      <h3>{info.details}</h3>
    </div>
  );
};

export default Info;
