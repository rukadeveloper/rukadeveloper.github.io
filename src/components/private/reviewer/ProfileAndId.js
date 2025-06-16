import React from "react";

const ProfileAndId = ({ review }) => {
  return (
    <div className="rev_profile_and_id">
      <div className="rev_profile">
        <img src={review.reviewProfile} alt={review.reviewProfileAlt} />
      </div>
      <span>{review.reviewName} 님</span>
    </div>
  );
};

export default ProfileAndId;
