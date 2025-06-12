import React from "react";

const SideIcons = ({ src, alt, label, size }) => {
  return (
    <div className="side__icons">
      <button>
        <img src={src} alt={alt} width={size * 16} />
        <span>{label}</span>
      </button>
    </div>
  );
};

export default SideIcons;
