import React, { useEffect } from "react";

import axios from "axios";

import { useLocation } from "react-router-dom";

import ButtonIcon from "./ButtonIcon";
import useLoginToken from "../../../store/useLoginToken";
import LogoutButton from "./LogoutButton";
import ResetButton from "./ResetButton";
import AdminButton from "./AdminButton";

const ButtonWrapper = () => {
  const { isAuth, setAuth, setLoginData, loginData } = useLoginToken();
  const location = useLocation();

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token && location.pathname === "/") {
      const fetchAxios = async () => {
        try {
          const response = await axios.get(
            "https://port-0-baseball-comics-backend-mc0wwsqha35e654e.sel5.cloudtype.app/login/data",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data.data.uid !== "anonymousUser") {
            setAuth(true);
          } else {
            setAuth(false);
          }
          setLoginData(response.data.data);
        } catch (error) {
          setAuth(false);
        }
      };

      fetchAxios();
    }
  }, [token, location.pathname, setLoginData, setAuth]);

  return (
    <div className="btns">
      {!isAuth && (
        <ButtonIcon className="btns-login" href="/login" label="로그인" />
      )}
      <ButtonIcon className="btns-cart" href="/cart" label="장바구니" />
      {!isAuth && (
        <ButtonIcon className="btns-join" href="/join/1" label="회원가입" />
      )}
      {isAuth && <LogoutButton />}
      {isAuth && loginData.role !== "ROLE_ADMIN" && <ResetButton />}
      {isAuth && loginData.role === "ROLE_ADMIN" && <AdminButton />}
    </div>
  );
};

export default ButtonWrapper;
