import React, { useReducer } from "react";

import {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_ENG_NUMBER,
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
} from "../../../utils/joinValidators";

import styled from "styled-components";
import NewInputWrapper from "./NewInputWrapper";

const JoinWrap = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    > h2 {
      margin-top: 2.8rem;
      text-align: center;
      font-weight: 400;
    }
    > div {
      > .new__input__wrapper {
        width: 350px;
        height: 80px;
        background-color: #f5f5f5;
        border-radius: 1rem;
        padding: 0 1rem;
        margin: 0 auto;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        display: flex;
        gap: 1rem;
        flex-direction: column-reverse;
        justify-content: center;
        input {
          border: none;
          outline: none;
          background-color: transparent;
        }
        label {
          font-size: 0.85rem;
        }
      }
      b {
        font-size: 14px;
        font-weight: 400;
        display: block;
        margin-bottom: 0.4rem;
        color: red;
      }
      .check__conditions {
        width: 350px;
        margin: 0 auto;
        display: flex;
        gap: 1rem;
        span {
          font-size: 14px;
          opacity: 0.4;
        }
        div {
          &.hundred {
            span {
              opacity: 1;
            }
          }
        }
      }
    }
    > button {
      width: 350px;
      padding: 1rem 0;
      background-color: #000;
      margin-top: 1.3rem;
      color: white;
      font-size: 1rem;
      border-radius: 0.6rem;
      &:disabled {
        opacity: 0.15;
      }
    }
  }
`;

const joinReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_ID":
      return {
        ...state,
        idVal: action.val,
        idEngValid: validate(action.val, action.validators).idEngValid,
        idMinValid: validate(action.val, action.validators).idMinValid,
        idCheckValid: validate(action.val, action.validators).idCheckValid,
        idErrorMessage: "아이디를 올바르게 입력하세요.",
      };
    case "CHANGE_PW":
      return {
        ...state,
        passwordVal: action.val,
        passwordValid: validate(action.val, action.validators),
        passwordErrorMessage: "비밀번호를 올바르게 입력하십시오.",
      };
    case "CHANGE_PW_CHECK":
      return {
        ...state,
        passwordCheckVal: action.val,
        passwordCheckValid: validate(action.val, action.validators),
        passwordCheckErrorMessage: "일치하지 않습니다.",
      };
    case "CHANGE_EMAIL":
      return {
        ...state,
        emailVal: action.val,
        emailValid: validate(action.val, action.validators),
        emailErrorMessage: "올바르지 않은 이메일입니다.",
      };
    case "INIT":
      return {
        idVal: "",
        idEngValid: false,
        idMinValid: false,
        idCheckValid: false,
        idErrorMessage: "",
        passwordVal: "",
        passwordValid: false,
        passwordErrorMessage: "",
        passwordCheckVal: "",
        passwordCheckValid: false,
        passwordCheckErrorMessage: "",
        emailVal: "",
        emailValid: false,
        emailErrorMessage: "",
      };
    default:
      return state;
  }
};

const JoinWrapper = () => {
  const [joinState, dispatch] = useReducer(joinReducer, {
    idVal: "",
    idEngValid: false,
    idMinValid: false,
    idCheckValid: false,
    idErrorMessage: "",
    passwordVal: "",
    passwordValid: false,
    passwordErrorMessage: "",
    passwordCheckVal: "",
    passwordCheckValid: false,
    passwordCheckErrorMessage: "",
    emailVal: "",
    emailValid: false,
    emailErrorMessage: "",
  });

  const idArray = [
    VALIDATOR_ENG_NUMBER(),
    VALIDATOR_MINLENGTH(6),
    VALIDATOR_MIN(),
  ];

  const emailArray = [VALIDATOR_EMAIL()];

  const idChangeHandler = (event) => {
    dispatch({
      type: "CHANGE_ID",
      val: event.target.value,
      validators: idArray,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatch({
      type: "CHANGE_PW",
      val: event.target.value,
      validators: idArray,
    });
  };

  const passwordCheckChangeHandler = (event) => {
    dispatch({
      type: "CHANGE_PW_CHECK",
      val: event.target.value,
      validators: idArray,
    });
  };

  const emailChangeHandler = (event) => {
    dispatch({
      type: "CHANGE_EMAIL",
      val: event.target.value,
      validators: emailArray,
    });
  };

  const joinButton = async (event) => {
    event.preventDefault();
    /* const response = await axios.post("http://localhost:8080/api/join", {
      userName: joinState.idVal,
      password1: joinState.passwordVal,
      password2: joinState.passwordCheckVal,
      email: joinState.emailVal,
    });
    if (response.data.data && response.status === 200) {
      alert("회원가입 완료!");
      navigate("/");
    } else {
      alert("회원가입 실패!");
      dispatch({ type: "INIT" });
    } */
  };

  return (
    <JoinWrap>
      <form onSubmit={joinButton}>
        <h2>
          회원가입에 필요한 <br></br> 정보를 입력해주세요.
        </h2>
        <NewInputWrapper
          type="text"
          htmlFor="username"
          name="아이디"
          placeholder="아이디"
          onChange={idChangeHandler}
          value={joinState.idVal}
          isValid={[
            joinState.idEngValid,
            joinState.idMinValid,
            joinState.idCheckValid,
          ]}
          errorMessage={joinState.idErrorMessage}
          validators={idArray}
        />
        <NewInputWrapper
          type="password"
          htmlFor="password"
          name="비밀번호"
          placeholder="비밀번호"
          onChange={passwordChangeHandler}
          value={joinState.passwordVal}
          isValid={[joinState.passwordValid]}
          errorMessage={joinState.passwordErrorMessage}
          validators={idArray}
        />
        <NewInputWrapper
          type="password"
          htmlFor="passwordCheck"
          name="비밀번호 확인"
          placeholder="비밀번호 확인"
          onChange={passwordCheckChangeHandler}
          value={joinState.passwordCheckVal}
          isValid={[joinState.passwordCheckValid]}
          errorMessage={joinState.passwordErrorMessage}
          validators={idArray}
        />
        <NewInputWrapper
          type="text"
          htmlFor="email"
          name="이메일"
          placeholder="이메일"
          onChange={emailChangeHandler}
          value={joinState.emailVal}
          isValid={[joinState.emailValid]}
          errorMessage={joinState.emailErrorMessage}
          validators={emailArray}
        />
        <button
          type="submit"
          disabled={
            !joinState.idEngValid ||
            !joinState.idMinValid ||
            !joinState.idCheckValid ||
            !joinState.passwordValid ||
            !joinState.passwordCheckValid ||
            !joinState.emailValid
          }
        >
          제출하기
        </button>
      </form>
    </JoinWrap>
  );
};

export default JoinWrapper;
