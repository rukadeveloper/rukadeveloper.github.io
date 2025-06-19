import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import AdminGlobalNavi from "./AdminGlobalNavi";

const AdminHeader = styled.div`
  &#admin__header {
    width: 100%;
    height: 90px;
    background-color: #fff;
    display: flex;
    align-items: center;
    .logo {
      padding-left: 40px;
      a {
        display: block;
        font-size: 1.5rem;
        font-family: "NanumSquareRound", sans-serif !important;
        letter-spacing: -1px;
      }
    }
    nav#gnb {
      margin-left: 40px;
      > ul {
        display: flex;
        align-items: center;
        > li {
          width: 130px;
          display: flex;
          justify-content: center;
          position: relative;
          &:hover {
            background-color: rgb(86, 108, 249);
            > a {
              color: #fff;
            }
            #lnb {
              display: block;
            }
          }
          > a {
            line-height: 90px;
            padding: 0 30px;
          }
          #lnb {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #fff;
            li {
              a {
                padding: 1.2rem 0;
                text-align: center;
                &:hover {
                  background-color: rgb(49, 17, 255);
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
    #header__icon__list {
    }
  }
`;

const SideHeader = () => {
  return (
    <AdminHeader id="admin__header">
      <h1 className="logo">
        <Link to="/admin">베이스볼 관리자 페이지</Link>
      </h1>
      <AdminGlobalNavi />
    </AdminHeader>
  );
};

export default SideHeader;
