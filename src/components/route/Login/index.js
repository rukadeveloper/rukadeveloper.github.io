import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Input from "../../private/InputWrapper/Input";

const LoginWrapper = styled.div`
  width: 550px;
  height: 600px;
  background-color: white;
  border: 1px solid black;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  .logo__text {
    font-family: "Poppins", sans-serif !important;
    font-size: 1.15rem;
    font-weight: 600;
    color: #00a551;
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 2rem;
    b {
      color: black;
      font-weight: 600;
    }
  }
  h2 {
    text-align: center;
    font-size: 1.5rem;
  }
  h3 {
    font-weight: 400;
    text-align: center;
    font-size: 1rem;
    color: #202020;
    margin-bottom: 3.5rem;
    margin-top: 2rem;
  }
`;

const InputWrapper = styled.div`
  form {
    > div {
      position: relative;
      width: 350px;
      margin: 0 auto;
      margin-bottom: 1.2rem;
      h2 {
        padding: 0 0.4rem;
        background-color: white;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        position: absolute;
        top: 0;
        left: 1rem;
        transform: translateY(-45%);
      }
      > input {
        width: 100%;
        display: block;
        padding: 0.8rem;
        outline: none;
        font-family: "Poppins", sans-serif !important;
      }
      &.failed {
        > h2 {
          color: red;
        }
        > input {
          border: 1px solid red;
          background-color: rgba(237, 58, 62, 0.45);
        }
        b {
          font-size: 14px;
          font-weight: 400;
          color: red;
          margin-top: 0.5rem;
          display: inline-block;
        }
      }
    }
    > button {
      width: 350px;
      margin: 0 auto;
      display: block;
      font-size: 1.1rem;
      padding: 0.8rem 0;
      background-color: #00a551;
      color: white;
      &:disabled {
        opacity: 0.45;
      }
    }
  }
`;

const CheckboxFind = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    color: #ff8682;
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  label {
    font-size: 0.9rem;
    line-height: 0.9rem;
  }
`;

const Join = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 14px;
  span {
    font-size: 14px;
  }
  button {
    font-size: 14px;
    color: #ff8682;
  }
`;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameTouched, setUserNameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const navigate = useNavigate();

  const userNameChange = (e) => {
    setUserName(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const userNameConditions = userName && userName.includes("@");

  const passwordConditions =
    password && password.length >= 4 && password.length <= 8;

  // 회원가입 이동
  const goJoin = () => {
    navigate("/join");
  };

  return (
    <main style={{ position: "relative", marginTop: "120px" }}>
      <LoginWrapper>
        {/* Logo Part */}
        <div className="logo__text">
          BASEBALL <b>COMICS</b>
        </div>
        {/* Login Header */}
        <h2>로그인</h2>
        {/* Login Second Header */}
        <h3>베이스볼 코믹스 계정에 로그인해주세요.</h3>
        {/* Input Wrapper */}
        <InputWrapper>
          <form>
            <Input
              name="아이디"
              type="text"
              placeholder="아이디를 입력해주세요."
              change={userNameChange}
              value={userName}
              conditions={userNameConditions}
              touched={userNameTouched}
              setTouched={setUserNameTouched}
              error={"아이디를 정확하게 입력해주세요."}
            />
            <Input
              name="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              change={passwordChange}
              value={password}
              conditions={passwordConditions}
              touched={passwordTouched}
              setTouched={setPasswordTouched}
              error={"비밀번호를 정확하게 입력해주세요."}
            />
            {/* Checkbox & Find Password */}
            <CheckboxFind>
              <Checkbox>
                <input type="checkbox" id="save" />
                <label htmlFor="save">아이디 기억하기</label>
              </Checkbox>
              <button type="button">비밀번호를 잊어버렸어요.</button>
            </CheckboxFind>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={!userNameConditions || !passwordConditions}
            >
              로그인
            </button>
            {/* Join Button */}
            <Join>
              <span>계정이 있으신가요?</span>
              <button type="button" onClick={goJoin}>
                회원가입
              </button>
            </Join>
          </form>
        </InputWrapper>
      </LoginWrapper>
    </main>
  );
};

export default Login;
