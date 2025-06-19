import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div
      className="admin__layout"
      style={{ backgroundColor: "#000", width: "100%", height: "100vh" }}
    >
      {children}
    </div>
  );
};

export default AdminLayout;
