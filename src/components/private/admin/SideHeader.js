import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const AdminHeader = styled.div`
  &#admin__header {
    width: 200px;
    height: 100vh;
    background-color: #222222;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem 1.5rem;
    > a {
      &:first-of-type {
        color: #fff;
        font-size: 1.3rem;
        font-weight: 600;
        padding-bottom: 0.8rem;
        border-bottom: 1px solid rgba(255, 255, 255.5);
      }
    }
  }
`;

const SideHeader = () => {
  return (
    <AdminHeader id="admin__header">
      <Link to="/admin">Baseball Admin</Link>
    </AdminHeader>
  );
};

export default SideHeader;
