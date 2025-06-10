import React, { useState } from "react";

import { stadiumMocks } from "../../../mocks/stadiumScript";
import { Link } from "react-router-dom";

const StadiumDetails = ({ frontActiveBullet }) => {
  return (
    <div className="stadium-sec-details">
      <h2>{stadiumMocks[frontActiveBullet].stadium}</h2>
      <p>{stadiumMocks[frontActiveBullet].eng}</p>
      <span>
        {stadiumMocks[frontActiveBullet].details.split("|").map((split) => (
          <b>{split}</b>
        ))}
      </span>
      <Link to="/">MORE</Link>
      <img src={stadiumMocks[frontActiveBullet].imageSrc} alt="product" />
    </div>
  );
};

export default StadiumDetails;
