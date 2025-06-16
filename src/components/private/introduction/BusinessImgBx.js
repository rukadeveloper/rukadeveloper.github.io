import React from "react";

const BusinessImgBx = ({ bimg, balt }) => {
  return (
    <div className="b-imgBx">
      <img src={bimg} alt={balt} />
    </div>
  );
};

export default BusinessImgBx;
