import React, { useEffect } from "react";
import axios from "axios";
import ButtonIcon from "./ButtonIcon";
import useLoginToken from "../../../store/useLoginToken";
import LogoutButton from "./LogoutButton";

const ButtonWrapper = () => {
  const { isAuth, token } = useLoginToken();

  useEffect(() => {
    if (token) {
      const fetchAxios = async () => {
        const response = await axios.get(
          "https://port-0-baseball-comics-backend-mc0wwsqha35e654e.sel5.cloudtype.app/login/data",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
      };

      fetchAxios();
    }
  }, [token]);

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
    </div>
  );
};

export default ButtonWrapper;
