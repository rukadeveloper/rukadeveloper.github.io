import React from "react";

const AdminProfile = ({ profile }) => {
  return (
    <div id="admin__profile">
      <img
        src={profile === null ? "/images/basic_profile.jpg" : profile}
        alt="profile_img"
      />
    </div>
  );
};

export default AdminProfile;
