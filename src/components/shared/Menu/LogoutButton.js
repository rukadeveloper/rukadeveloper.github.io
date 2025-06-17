import React from "react";
import useLoginToken from "../../../store/useLoginToken";

const LogoutButton = () => {
  const { logout } = useLoginToken();

  return (
    <button className="logout" onClick={logout}>
      로그아웃
    </button>
  );
};

export default LogoutButton;
