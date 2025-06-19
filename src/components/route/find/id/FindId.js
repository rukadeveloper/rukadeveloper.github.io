import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import FindAccountHeader from "../../../shared/findAccountHeader/FindAccountHeader";
import axios from "axios";
import IdModal from "../../../private/find/IdModal";

const FindIds = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    b {
      display: block;
      padding-top: 80px;
      font-size: 1.2rem;
      font-weight: 500;
    }
    input {
      width: 100%;
      padding: 0.8rem 1.3rem;
      border: 1px solid #000;
      border-radius: 30px;
      margin-top: 30px;
      outline: none;
    }
    button {
      margin-top: 30px;
      width: 100%;
      font-size: 1.1rem;
      background-color: #000;
      padding: 1rem 0;
      color: #fff;
      border-radius: 30px;
      &:disabled {
        opacity: 0.3;
      }
    }
  }
`;

const FindId = () => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [nameOpen, setNameOpen] = useState(false);
  const [foundIdentity, setFoundIdentity] = useState([]);
  const [domElement, setDomElement] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (nameOpen) {
      document.body.classList.add("dimmed");
    } else {
      document.body.classList.remove("dimmed");
    }
  }, [nameOpen]);

  useEffect(() => {
    setDomElement(document.getElementById("root"));
  }, []);

  const formData = new FormData();

  formData.append("name", name);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://port-0-baseball-comics-backend-mc0wwsqha35e654e.sel5.cloudtype.app/find/id",
        formData
      );

      console.log(response.data.data);

      if (
        response.data.data.length !== 0 &&
        Array.isArray(response.data.data)
      ) {
        setNameOpen(true);
        setFoundIdentity(response.data.data);
        setLoading(false);
      } else {
        setLoading(false);
        alert("아이디가 없습니다!");
      }
    } catch (e) {
      alert("오류 발생!");
    }
  };

  return (
    <FindIds>
      <FindAccountHeader />
      <form onSubmit={submit}>
        <b>회원가입 때 입력했던 이름을 입력해주세요.</b>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onBlur={(e) => {
            setNameTouched(true);
          }}
        />
        <button type="submit" disabled={!nameTouched || name === ""}>
          아이디 찾기
        </button>
        {nameOpen &&
          foundIdentity &&
          foundIdentity.length > 0 &&
          domElement &&
          !loading &&
          ReactDOM.createPortal(
            <IdModal foundIdentity={foundIdentity} setNameOpen={setNameOpen} />,
            domElement
          )}
      </form>
    </FindIds>
  );
};

export default FindId;
