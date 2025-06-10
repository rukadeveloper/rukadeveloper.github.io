import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { stadiumMocks } from "../../../mocks/stadiumScript";

const StadiumBullet = ({ setBullet }) => {
  const [activeBullet, setActiveBullet] = useState(0);

  useEffect(() => {
    setBullet(activeBullet);
  }, [activeBullet]);

  return (
    <div className="stadium-sec-bullets">
      <ul>
        {stadiumMocks.map((sta, i) => (
          <li key={i} className={`${activeBullet === i ? "active" : ""}`}>
            <Link
              to="/"
              onClick={() => {
                setActiveBullet(i);
              }}
            >
              {sta.stadium}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {stadiumMocks.map((_, i) => (
          <li
            key={i}
            className={`${activeBullet === i ? "active" : ""}`}
            onClick={() => {
              setActiveBullet(i);
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default StadiumBullet;
