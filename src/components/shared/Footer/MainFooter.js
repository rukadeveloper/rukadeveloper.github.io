import React from "react";

import styled from "styled-components";
import PageInner from "../page-padding/PageInner";

const Footer = styled.footer`
  margin-top: 40px;
  > div.inner {
  }
`;

const MainFooter = () => {
  return (
    <Footer>
      <PageInner></PageInner>
    </Footer>
  );
};

export default MainFooter;
