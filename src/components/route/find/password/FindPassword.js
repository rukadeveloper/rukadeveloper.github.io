import React from "react";

import styled from "styled-components";
import FindAccountHeader from "../../../shared/findAccountHeader/FindAccountHeader";

const FindPws = styled.div`
  &#find__pws {
    max-width: 500px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FindPassword = () => {
  return (
    <FindPws id="find__pws">
      <FindAccountHeader />
    </FindPws>
  );
};

export default FindPassword;
