import React from "react";
import ProfileAndId from "./ProfileAndId";

const ReviewCard = ({ review }) => {
  return (
    <div className="rev-card">
      <p>{review.reviewCon}</p>
      <ProfileAndId review={review} />
    </div>
  );
};

export default ReviewCard;
