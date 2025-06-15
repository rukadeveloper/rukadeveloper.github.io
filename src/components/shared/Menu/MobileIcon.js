import React from "react";

const MobileIcon = ({ setMobileActive }) => {
  return (
    <div className="mobile-icon">
      <button
        onClick={() => {
          setMobileActive(true);
        }}
      >
        <span className="sr-only">모바일 아이콘</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default MobileIcon;
