import React from "react";
import StadiumBullet from "./StadiumBullet";
import StadiumDetails from "./StadiumDetails";

const StadiumContent = ({ setBullet, frontActiveBullet }) => {
  return (
    <div className="stadium-sec-content">
      <StadiumBullet setBullet={setBullet} />
      <StadiumDetails frontActiveBullet={frontActiveBullet} />
    </div>
  );
};

export default StadiumContent;
