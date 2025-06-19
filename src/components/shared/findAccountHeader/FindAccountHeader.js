import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

const FindHeader = styled.div`
  &#find__header {
    display: flex;
    width: 500px;
    a {
      display: block;
      flex: 1;
      padding: 1rem 0;
      font-size: 1.1rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.56);
      text-align: center;
      &.active,
      &:hover {
        font-weight: 700;
        background-color: #000;
        color: #fff;
      }
    }
  }
`;

const FindAccountHeader = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelectorAll("#find__header a").forEach(function (el, idx) {
      if (el.getAttribute("href") === location.pathname) {
        el.classList.add("active");
      }
    });
  }, [location.pathname]);

  return (
    <FindHeader id="find__header">
      <Link to="/find/id">아이디 찾기</Link>
      <Link to="/find/password">비밀번호 찾기</Link>
    </FindHeader>
  );
};

export default FindAccountHeader;
