import React from "react";
import AdminProfile from "./account/AdminProfile";
import useLoginToken from "../../../store/useLoginToken";

const AccountInfo = ({ account }) => {
  const { logout } = useLoginToken();

  return (
    <div id="account__info">
      <AdminProfile profile={account.profile} />
      <b>{account.uid} 님</b>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default AccountInfo;
