import React, { useReducer } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import qs from "qs";

import styled from "styled-components";
import InputWrapper from "../../private/login/InputWrapper";
import InputComponent from "../../private/login/InputComponent";
import OtherButton from "../../private/login/OtherButton";
import { validate } from "../../../utils/loginValidators";
import useLoginToken from "../../../store/useLoginToken";

const Login = styled.div`
  &#login_wrapper {
    width: 100%;
    height: 100vh;
    #login_inner {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        text-align: center;
        font-size: 1.9rem;
      }
      span {
        display: block;
        margin-top: 40px;
        font-size: 1.2rem;
        margin-bottom: 70px;
      }
      #input__wrapper {
        border-bottom: 1px solid rgba(0, 0, 0, 0.45);
        form {
          #input-component {
            width: 560px;
            height: 50px;
            background-color: #fff;
            display: flex;
            align-items: center;
            border: 1px solid rgb(12, 82, 57);
            border-radius: 30px;
            margin-bottom: 20px;
            &.error {
              border: 1px solid red;
              margin-bottom: 0;
            }
            label {
              display: inline-block;
              width: 50%;
              height: 50%;
              input {
                width: 100%;
                height: 100%;
                margin-left: 30px;
                font-size: 1rem;
                outline: none;
                border: none;
              }
            }
          }
          > b {
            display: block;
            font-size: 0.9rem;
            margin: 10px 0;
            color: red;
            padding-left: 20px;
            font-weight: 400;
          }
          button {
            width: 100%;
            padding: 1.1rem 0;
            padding-top: 1.25rem;
            background-color: rgb(12, 82, 57);
            font-size: 1.2rem;
            color: #fff;
            border-radius: 30px;
            margin-bottom: 30px;
            &:disabled {
              opacity: 0.1;
            }
          }
        }
      }
      .other-buttons {
        width: 560px;
        display: flex;
        > button {
          flex: 1;
          padding: 1.1rem 0;
          padding-top: 1.2rem;
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.45);
          &:hover {
            color: rgba(0, 0, 0, 0.85);
          }
        }
      }
    }
  }

  @media screen and (max-width: 650px) {
    &#login_wrapper {
      #login_inner {
        > h2 {
          font-size: 1.6rem;
        }
        > span {
          margin-top: 20px;
          font-size: 1.1rem;
        }
        #input__wrapper {
          form {
            #input-component {
              width: 400px;
            }
          }
        }
        .other-buttons {
          width: 400px;
        }
      }
    }
  }

  @media screen and (max-width: 440px) {
    &#login_wrapper {
      #login_inner {
        #input__wrapper {
          form {
            #input-component {
              width: 300px;
              label {
                width: 65%;
              }
            }
          }
        }
        .other-buttons {
          width: 300px;
          flex-direction: column;
          border-bottom: 1px solid rgba(0, 0, 0, 0.35);
        }
      }
    }
  }
`;

const MainLogin = () => {
  const navigate = useNavigate();

  const firstElement = {
    idValue: "",
    idValid: false,
    idErrorMessage: "",
    idTouched: false,
    pwdValue: "",
    pwdValid: false,
    pwdErrorMessage: "",
    pwdTouched: false,
    allAlertMessage: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ID_CHANGE":
        return {
          ...state,
          idValue: action.val,
          idValid: validate("ID CHECK", action.val),
          idErrorMessage:
            (!validate("ID CHECK", action.val) || !action.val) &&
            "아이디가 올바르지 않습니다.",
        };
      case "ID_TOUCHED":
        return {
          ...state,
          idTouched: true,
          idErrorMessage:
            (!validate("ID CHECK", action.val) || !action.val) &&
            "아이디가 올바르지 않습니다.",
        };
      case "PW_CHANGE":
        return {
          ...state,
          pwdValue: action.val,
          pwdValid: validate("PW CHECK", action.val),
          pwdErrorMessage:
            (!validate("PW CHECK", action.val) || !action.val) &&
            "비밀번호 길이가 알맞지 않습니다.",
        };
      case "PW_TOUCHED":
        return {
          ...state,
          pwdTouched: true,
          pwdErrorMessage:
            (!validate("PW CHECK", action.val) || !action.val) &&
            "비밀번호 길이가 알맞지 않습니다.",
        };
      case "LOGIN_ALERT":
        return {
          ...state,
          allAlertMessage: "아이디 혹은 비밀번호가 일치하지 않습니다.",
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, firstElement);

  const idChange = (e) => {
    dispatch({ type: "ID_CHANGE", val: e.target.value });
  };

  const pwChange = (e) => {
    dispatch({ type: "PW_CHANGE", val: e.target.value });
  };

  const idTouch = (e) => {
    dispatch({ type: "ID_TOUCHED", val: e.target.value });
  };

  const pwTouch = (e) => {
    dispatch({ type: "PW_TOUCHED", val: e.target.value });
  };

  const goJoin = () => {
    navigate("/join/1");
  };

  const { setToken } = useLoginToken();

  const submitLogin = async (e) => {
    e.preventDefault();

    console.log(state.idValue);
    console.log(state.pwdValue);

    const response = await axios.post(
      "http://localhost:8080/login",
      qs.stringify({
        username: state.idValue,
        password: state.pwdValue,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    setToken(response.data.token);

    if (response.status === 200) {
      navigate("/");
    }
  };

  return (
    <Login id="login_wrapper">
      <div id="login_inner">
        <h2>로그인</h2>
        <span>베이스볼 코믹스에 오신 것을 환영합니다.</span>
        <InputWrapper>
          <form onSubmit={submitLogin}>
            <InputComponent
              type="text"
              htmlFor="id_check"
              placeholder="아이디를 입력해주세요."
              value={state.idValue}
              change={idChange}
              valid={state.idValid}
              err={state.idErrorMessage}
              touched={state.idTouched}
              touching={idTouch}
            />
            <InputComponent
              type="password"
              htmlFor="pw_check"
              placeholder="비밀번호를 입력해주세요."
              value={state.pwdValue}
              change={pwChange}
              valid={state.pwdValid}
              err={state.pwdErrorMessage}
              touched={state.pwdTouched}
              touching={pwTouch}
            />
            <button
              type="submit"
              disabled={
                !state.idTouched ||
                !state.idValid ||
                !state.pwdTouched ||
                !state.pwdValid
              }
            >
              로그인
            </button>
          </form>
        </InputWrapper>
        <OtherButton>
          <button>아이디/비밀번호 찾기</button>
          <button onClick={goJoin}>회원가입</button>
        </OtherButton>
        {state.allAlertMessage && <p>{state.allAlertMessage}</p>}
      </div>
    </Login>
  );
};

export default MainLogin;
