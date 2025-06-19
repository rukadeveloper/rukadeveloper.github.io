import React, { useState } from "react";

import ResetInput from "./ResetInput";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import useLoginToken from "../../../store/useLoginToken";
import useUpdatePassword from "../../../hooks/useUpdatePassword";
import useUpdatePasswordCheck from "../../../hooks/useUpdatePasswordCheck";
import useUpdateName from "../../../hooks/useUpdateName";
import useUpdateEmail from "../../../hooks/useUpdateEmail";
import useUpdatePhone from "../../../hooks/useUpdatePhone";
import ResetFile from "./ResetFile";

const ResetInformation = () => {
  const navigate = useNavigate();
  const { loginData, setProfile } = useLoginToken();

  const [idOk, setIdOk] = useState(true);
  const [passOk, setPassOk] = useState(false);
  const [nameOk, setNameOk] = useState(false);
  const [emailOk, setEmailOk] = useState(false);
  const [phoneOk, setPhoneOk] = useState(false);

  console.log(loginData.profile);

  const {
    passwordChange,
    passwordBlur,
    passValid,
    passError,
    passValue,
    passTouched,
  } = useUpdatePassword();

  const {
    passwordCheckChange,
    passwordCheckBlur,
    passCheckValid,
    passCheckError,
    passCheckValue,
    passCheckTouched,
  } = useUpdatePasswordCheck(passValue);

  const { nameChange, nameBlur, nameValid, nameError, nameValue, nameTouched } =
    useUpdateName();

  const {
    emailChange,
    emailBlur,
    emailValid,
    emailError,
    emailValue,
    emailTouched,
  } = useUpdateEmail();

  const {
    phoneChange,
    phoneBlur,
    phoneValid,
    phoneError,
    phoneValue,
    phoneTouched,
  } = useUpdatePhone();

  const formData = new FormData();

  formData.append("userId", loginData.uid);
  formData.append("password", passValue);
  formData.append("email", emailValue);
  formData.append("name", nameValue);
  formData.append("phone", phoneValue);
  formData.append("profile", loginData.profile);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://port-0-baseball-backend-clone-mc0wwsqha35e654e.sel5.cloudtype.app/update",
        formData
      );
      console.log("dd: " + response.data);
      if (response.data.status === "success") {
        alert("정보 수정 성공!");
        navigate("/");
      }
    } catch (e) {
      alert("모종의 이유로 수정에 실패했습니다!");
    }
  };

  return (
    <div className="reset-info">
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>기본 정보</legend>
        </fieldset>
        <ResetInput
          type={"text"}
          label={"아이디"}
          buttonLabel={"변경 불가"}
          value={loginData.uid}
          change={false}
          blur={false}
          touched={false}
          addedCondition={true}
          click={setIdOk}
          ok={idOk}
          kLabel={"변경 불가"}
        />
        <ResetInput
          type={"password"}
          label={"비밀번호"}
          buttonLabel="변경하기"
          value={passValue}
          change={passwordChange}
          blur={passwordBlur}
          valid={passValid}
          error={passError}
          touched={passTouched}
          addedCondition={passCheckValid}
          click={setPassOk}
          ok={passOk}
          okLabel={"변경 완료"}
        />
        <ResetInput
          type={"password"}
          label={"비밀번호 확인"}
          buttonLabel="변경하기"
          value={passCheckValue}
          change={passwordCheckChange}
          blur={passwordCheckBlur}
          valid={passCheckValid}
          error={passCheckError}
          touched={passCheckTouched}
          addedCondition={true}
          click={false}
          ok={false}
          okLabel={""}
        />
        <ResetInput
          type={"text"}
          label={"이름"}
          buttonLabel="변경하기"
          value={nameValue}
          change={nameChange}
          blur={nameBlur}
          valid={nameValid}
          error={nameError}
          touched={nameTouched}
          addedCondition={true}
          click={setNameOk}
          ok={nameOk}
          okLabel={"변경 완료"}
        />
        <ResetInput
          type={"text"}
          label={"이메일"}
          buttonLabel="변경하기"
          value={emailValue}
          change={emailChange}
          blur={emailBlur}
          valid={emailValid}
          error={emailError}
          touched={emailTouched}
          addedCondition={true}
          click={setEmailOk}
          ok={emailOk}
          okLabel={"변경 완료"}
        />
        <ResetInput
          type={"text"}
          label={"핸드폰 번호"}
          buttonLabel="변경하기"
          value={phoneValue}
          change={phoneChange}
          blur={phoneBlur}
          valid={phoneValid}
          error={phoneError}
          touched={phoneTouched}
          addedCondition={true}
          click={setPhoneOk}
          ok={phoneOk}
          okLabel={"변경 완료"}
        />
        <ResetFile file={loginData.profile} setProfile={setProfile} />
        <div className="submit">
          <button
            type="submit"
            disabled={!idOk || !passOk || !nameOk || !emailOk || !phoneOk}
          >
            업데이트 완료시키기
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetInformation;
