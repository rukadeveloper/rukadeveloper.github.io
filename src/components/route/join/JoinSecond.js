import React, { useReducer } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import styled from "styled-components";
import JoinHeader from "../../shared/join-header/JoinHeader";
import JoinInput from "../../private/join/JoinInput";
import JoinCheckbox from "../../private/join/JoinCheckbox";

const Second = styled.div`
  &#join__wrapper {
    .join__inner {
      max-width: 600px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 630px) {
    &#join__wrapper {
      .join__inner {
        max-width: 350px;
      }
    }
  }
`;

const JoinInfo = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #ccc;
    padding: 0.5rem 1.5rem;
    padding-top: 0.7rem;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 30px;
    margin-bottom: 50px;
  }
  .join__input {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 40px;
    label {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 10px;
      span {
        color: #1e9171;
      }
    }
    input {
      padding: 1.2rem 1.9rem;
      border: 1px solid rgba(0, 0, 0, 0.35);
      border-radius: 10px 30px 30px 30px;
      outline: none;
      font-size: 1rem;
      background-color: #fff;
      &[readonly] {
        opacity: 0.4;
      }
    }
    button {
      width: 25%;
      font-size: 1.2rem;
      background-color: #1e9171;
      padding: 1.2rem 0;
      padding-top: 1.4rem;
      border-radius: 30px;
      position: absolute;
      top: 32px;
      right: 0;
      color: #fff;
      &:disabled {
        opacity: 0.1;
      }
    }
    b {
      color: red;
      display: inline-block;
      margin-top: 16px;
      font-weight: 500;
    }
    &.error {
      input {
        border: 1px solid red;
      }
    }
  }
  .join__checkbox {
    width: 100%;
    margin-bottom: 60px;
    > h2 {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .gender-select {
      display: flex;
      gap: 10px;
      button {
        flex: 1;
        font-size: 1.2rem;
        background-color: #fff;
        border: 1px solid #1e9171;
        padding-top: 1.4rem;
        padding-bottom: 1.2rem;
        border-radius: 36px;
        &.active {
          border: none;
          background-color: #1e9171;
          color: #fff;
        }
      }
    }
  }
  > button {
    width: 100%;
    font-size: 1.2rem;
    padding-top: 1.3rem;
    padding-bottom: 1.1rem;
    background-color: #1e9171;
    color: #fff;
    border-radius: 36px;
    font-weight: 800;
    margin-bottom: 30px;
    &:disabled {
      opacity: 0.1;
    }
  }

  @media screen and (max-width: 630px) {
    > p {
      font-size: 0.9rem;
    }
    .join__input {
      label {
        font-size: 1rem;
      }
      input {
        padding: 0.9rem 1.5rem;
        font-size: 0.9rem;
        width: 100% !important;
      }
      button {
        position: static;
        font-size: 0.9rem;
        padding: 0.9rem 0;
        padding-top: 1.1rem;
        margin-top: 10px;
        width: 100%;
      }
      &.error {
        b {
          font-size: 0.9rem;
        }
      }
    }
    .join__checkbox {
      .gender-select {
        button {
          padding: 0.7rem 0;
          padding-top: 0.9rem;
          font-size: 1.05rem;
        }
      }
    }
    > button {
      padding: 0.7rem 0;
      padding-top: 0.9rem;
      font-size: 1.1rem;
      margin-bottom: 30px;
    }
  }
`;

const JoinSecond = ({ goThird }) => {
  const navigate = useNavigate("/join/3");

  const init = {
    id: {
      value: "",
      isNest: false,
      isNestClear: false,
      isOpen: false,
    },
    pw: {
      value: "",
      valid: false,
      error: "",
      touched: false,
    },
    pwCheck: {
      value: "",
      valid: false,
      error: "",
      touched: false,
    },
    name: {
      value: "",
      valid: false,
      error: "",
      touched: false,
    },
    phone: {
      value: "",
      valid: false,
      error: "",
      touched: false,
    },
    email: {
      value: "",
      valid: false,
      error: "",
      touched: false,
    },
    genderIdx: 0,
  };

  const reducer = (state, action) => {
    const idCheck = (val) => {
      return (
        val.trim() &&
        val.trim().length >= 6 &&
        val.trim().length <= 20 &&
        /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]+$/.test(val)
      );
    };

    switch (action.type) {
      case "ID_CHANGE":
        return {
          ...state,
          id: {
            ...state.id,
            value: action.val,
          },
        };
      case "ID_NEST": {
        return {
          ...state,
          id: {
            ...state.id,
            isNest: idCheck(state.id.value),
            error:
              !idCheck(state.id.value) &&
              "아이디 영어 소문자 포함 6자 ~ 20자로 입력해야 합니다.",
            isOpen: true,
          },
        };
      }
      case "MODAL_CLOSE": {
        return {
          ...state,
          id: {
            ...state.id,
            isNest: false,
            isOpen: false,
          },
        };
      }
      case "MODAL_SELECT": {
        return {
          ...state,
          id: {
            ...state.id,
            isNest: true,
            isNestClear: true,
            isOpen: false,
          },
        };
      }
      case "ID_TOUCHED":
        return {
          ...state,
          id: {
            ...state.id,
            touched: true,
          },
        };
      case "PW_CHANGE":
        return {
          ...state,
          pw: {
            ...state.pw,
            value: action.val,
            valid:
              action.val.trim() &&
              action.val.trim().length >= 6 &&
              /[A-Za-z0-9!@#$%^&*()_+\-=\]{};':"\\|,.<>/?]{6,}/.test(
                action.val
              ),
            error:
              !state.pw.valid &&
              state.pw.touched &&
              "대소문자 구분하여 영문자, 특수문자, 숫자 포함하여 6자리 이상 입력하세요",
          },
        };
      case "PW_TOUCHED":
        return {
          ...state,
          pw: {
            ...state.pw,
            touched: true,
          },
        };
      case "PW_CHECK_CHANGE":
        return {
          ...state,
          pwCheck: {
            ...state.pwCheck,
            value: action.val,
            valid: action.val.trim() && action.val.trim() === state.pw.value,
            error:
              !state.pwCheck.valid &&
              state.pwCheck.touched &&
              "비밀번호가 일치하지 않습니다",
          },
        };
      case "PW_CHECK_TOUCHED":
        return {
          ...state,
          pwCheck: {
            ...state.pwCheck,
            touched: true,
          },
        };
      case "NAME_CHANGE":
        return {
          ...state,
          name: {
            ...state.name,
            value: action.val,
            valid: action.val.trim() && /^[ㄱ-ㅎ|가-힣]+$/.test(action.val),
            error:
              !state.name.valid && state.name.touched && "한글로 입력해주세요.",
          },
        };
      case "NAME_TOUCHED":
        return {
          ...state,
          name: {
            ...state.name,
            touched: true,
          },
        };
      case "EMAIL_CHANGE":
        return {
          ...state,
          email: {
            ...state.email,
            value: action.val,
            valid: action.val.trim() && action.val.trim().includes("@"),
            error:
              !state.email.valid &&
              state.email.touched &&
              "올바르지 않은 이메일 형식입니다.",
          },
        };
      case "EMAIL_TOUCHED":
        return {
          ...state,
          email: {
            ...state.email,
            touched: true,
          },
        };
      case "PHONE_CHANGE":
        return {
          ...state,
          phone: {
            ...state.phone,
            value: action.val,
            valid: action.val.trim() !== "",
            error:
              !state.phone.valid &&
              state.phone.touched &&
              "핸드폰 번호 올바로 입력하세요.",
          },
        };
      case "PHONE_TOUCHED":
        return {
          ...state,
          phone: {
            ...state.phone,
            touched: true,
          },
        };

      case "BUTTON_CHANGE":
        return {
          ...state,
          genderIdx: action.val,
        };
      case "INIT": {
        return {
          id: {
            value: "",
            isNest: false,
            isNestClear: false,
            isOpen: false,
          },
          pw: {
            value: "",
            valid: false,
            error: "",
            touched: false,
          },
          pwCheck: {
            value: "",
            valid: false,
            error: "",
            touched: false,
          },
          name: {
            value: "",
            valid: false,
            error: "",
            touched: false,
          },
          phone: {
            value: "",
            valid: false,
            error: "",
            touched: false,
          },
          email: {
            value: "",
            valid: false,
            error: "",
            touched: false,
          },
          genderIdx: 0,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, init);

  const idChange = (e) => {
    dispatch({ type: "ID_CHANGE", val: e.target.value });
  };

  const idNest = () => {
    dispatch({ type: "ID_NEST" });
    document.body.classList.add("dimmed");
    return state.id.isOpen;
  };

  const modalClose = () => {
    dispatch({ type: "MODAL_CLOSE" });
    document.body.classList.remove("dimmed");
  };

  const modalSelect = () => {
    dispatch({ type: "MODAL_SELECT" });
    document.body.classList.remove("dimmed");
  };

  const pwChange = (e) => {
    dispatch({ type: "PW_CHANGE", val: e.target.value });
  };

  const pwCheckChange = (e) => {
    dispatch({ type: "PW_CHECK_CHANGE", val: e.target.value });
  };

  const nameChange = (e) => {
    dispatch({ type: "NAME_CHANGE", val: e.target.value });
  };

  const phoneChange = (e) => {
    dispatch({ type: "PHONE_CHANGE", val: e.target.value });
  };

  const emailChange = (e) => {
    dispatch({ type: "EMAIL_CHANGE", val: e.target.value });
  };

  const idTouch = (e) => {
    dispatch({ type: "ID_TOUCHED", val: e.target.value });
  };

  const pwTouch = () => {
    dispatch({ type: "PW_TOUCHED" });
  };

  const pwCheckTouch = () => {
    dispatch({ type: "PW_CHECK_TOUCHED" });
  };

  const nameTouch = () => {
    dispatch({ type: "NAME_TOUCHED" });
  };

  const phoneTouch = () => {
    dispatch({ type: "PHONE_TOUCHED" });
  };

  const emailTouch = () => {
    dispatch({ type: "EMAIL_TOUCHED" });
  };

  const buttonChange = (idx) => {
    dispatch({ type: "BUTTON_CHANGE", val: idx });
  };

  const idDisable = !state.id.isNest || !state.id.isNestClear;
  const pwDisable = !state.pw.valid || !state.pw.touched;
  const pwCheckDisable = !state.pwCheck.valid || !state.pwCheck.touched;
  const nameDisable = !state.name.valid || !state.name.touched;
  const phoneDisable = !state.phone.valid || !state.phone.touched;
  const emailDisable = !state.email.valid || !state.email.touched;

  const formData = new FormData();

  formData.append("userId", state.id.value);
  formData.append("password", state.pw.value);
  formData.append("email", state.email.value);
  formData.append("name", state.name.value);
  formData.append("phone", state.phone.value);

  const addSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8080/join", formData);

    if (response.data) {
      goThird();
      navigate("/join/3");
    }
  };

  return (
    <Second id="join__wrapper">
      <div className="join__inner">
        <JoinHeader activeClass={1} />
        <JoinInfo onSubmit={addSubmit}>
          <p>* 표시가 되어 있는 항목은 필수로 입력해야 합니다.</p>
          <JoinInput
            htmlFor={"id-form"}
            label={"아이디"}
            isMust={true}
            isNest={idNest}
            nestState={state.id.isNest}
            nestClear={state.id.isNestClear}
            nestOpen={state.id.isOpen}
            modalClose={modalClose}
            modalSelect={modalSelect}
            placeholder="영어소문자 숫자 포함 6자~20자로 입력해주세요"
            type={"text"}
            value={state.id.value}
            change={idChange}
            isValid={state}
            error={state.id.error}
            touched={state.id.touched}
            touch={idTouch}
          />
          <JoinInput
            htmlFor={"pw-form"}
            label={"비밀번호"}
            isMust={true}
            isNest={false}
            nestState={false}
            nestClear={false}
            nestOpen={false}
            modalClose={false}
            modalSelect={false}
            placeholder="영문(대/소문자 구분), 숫자, 특수문자를 혼용하여 6자리 이상으로 입력해주세요"
            type={"password"}
            value={state.pw.value}
            change={pwChange}
            isValid={state.pw.valid}
            error={state.pw.error}
            touched={state.pw.touched}
            touch={pwTouch}
          />
          <JoinInput
            htmlFor={"pw-check-form"}
            label={"비밀번호 확인"}
            isMust={true}
            isNest={false}
            nestState={false}
            nestClear={false}
            nestOpen={false}
            modalClose={false}
            modalSelect={false}
            placeholder=""
            type={"password"}
            value={state.pwCheck.value}
            change={pwCheckChange}
            isValid={state.pwCheck.valid}
            error={state.pwCheck.error}
            touched={state.pwCheck.touched}
            touch={pwCheckTouch}
          />
          <JoinInput
            htmlFor={"name-form"}
            label={"이름"}
            isMust={true}
            isNest={false}
            nestState={false}
            nestClear={false}
            nestOpen={false}
            modalClose={false}
            modalSelect={false}
            placeholder="이름을 입력해주세요."
            type={"text"}
            value={state.name.value}
            change={nameChange}
            isValid={state.name.valid}
            error={state.name.error}
            touched={state.name.touched}
            touch={nameTouch}
          />
          <JoinInput
            htmlFor={"tel-form"}
            label={"전화번호"}
            isMust={true}
            isNest={false}
            nestState={false}
            nestClear={false}
            nestOpen={false}
            modalClose={false}
            modalSelect={false}
            placeholder="전화번호를 입력해주세요(숫자만 입력)"
            type={"text"}
            value={state.phone.value}
            change={phoneChange}
            isValid={state.phone.valid}
            error={state.phone.error}
            touched={state.phone.touched}
            touch={phoneTouch}
          />
          <JoinInput
            htmlFor={"email-form"}
            label={"이메일"}
            isMust={true}
            isNest={false}
            nestState={false}
            nestClear={false}
            nestOpen={false}
            modalClose={false}
            modalSelect={false}
            placeholder="이메일을 입력해주세요."
            type={"text"}
            value={state.email.value}
            change={emailChange}
            isValid={state.email.valid}
            error={state.email.error}
            touched={state.email.touched}
            touch={emailTouch}
          />
          <JoinCheckbox buttonChange={buttonChange} idx={state.genderIdx} />
          <button
            type="submit"
            disabled={
              idDisable ||
              pwDisable ||
              pwCheckDisable ||
              nameDisable ||
              phoneDisable ||
              emailDisable
            }
          >
            가입하기
          </button>
        </JoinInfo>
      </div>
    </Second>
  );
};

export default JoinSecond;
