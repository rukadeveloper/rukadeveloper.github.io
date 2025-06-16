import React from "react";
import { cn } from "../../../utils/utils";

const JoinCheck = ({ head, isMust, click, checked, commonRef, htmlFor }) => {
  return (
    <div id="join-check">
      <h2>
        {head}
        {isMust ? <span>(필수)</span> : ""}
      </h2>
      <div id="join-box">
        <p>
          제 1조 (목적) <br />본 약관은 베이스볼 코믹스(이하 "당사")가 제공하는
          서비스 이용과 관련하여 당사와 이용자 간의 권리, 의무 및 책임사항, 기타
          필요한 사항을 규정함으로 목적으로 합니다.
        </p>
        <p>
          제 1조 (목적) <br />본 약관은 베이스볼 코믹스(이하 "당사")가 제공하는
          서비스 이용과 관련하여 당사와 이용자 간의 권리, 의무 및 책임사항, 기타
          필요한 사항을 규정함으로 목적으로 합니다.
        </p>
      </div>
      <div id="checkbox" className={cn(checked && "checked")}>
        <input
          id={htmlFor}
          type="checkbox"
          ref={commonRef}
          checked={checked}
          onChange={click}
        />
        <label for={htmlFor}>동의합니다</label>
      </div>
    </div>
  );
};

export default JoinCheck;
