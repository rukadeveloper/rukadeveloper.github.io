import React from "react";
import BusinessImgBx from "./BusinessImgBx";
import BusinessText from "./BusinessText";

const BusinessEach = ({ business }) => {
  return (
    <div className="b-each">
      <BusinessImgBx
        bimg={business.businessThumb}
        balt={business.businessAlt}
      />
      <BusinessText btext={business.businessName} />
    </div>
  );
};

export default BusinessEach;
