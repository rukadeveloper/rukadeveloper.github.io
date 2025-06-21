import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import styled from "styled-components";
import AdminGlobalNavi from "./AdminGlobalNavi";
import HeaderIconPart from "./HeaderIconPart";

const AdminHeader = styled.div`
  &#admin__header {
    width: 100%;
    height: 90px;
    background-color: #fff;
    display: flex;
    align-items: center;
    position: relative;
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
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      #account__info {
        display: flex;
        align-items: center;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          right: 0;
          width: 1px;
          height: 20px;
          background-color: #000;
        }
        #admin__profile {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        b {
          font-weight: 400;
          margin-left: 20px;
        }
        button {
          margin-left: 20px;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          background-color: #8398c4;
          color: #fff;
          margin-right: 20px;
        }
      }
      > button {
        padding: 0 1rem;
        svg {
          width: 24px;
        }
      }
    }
  }
`;

const SideHeader = () => {
  const token = sessionStorage.getItem("token");
  const [account, setAccount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://port-0-baseball-backend-clone-mc0wwsqha35e654e.sel5.cloudtype.app/login/data",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status === "success") {
        setAccount(response.data.data);
      }
    };

    fetchData();
  }, [token]);

  return (
    <AdminHeader id="admin__header">
      <h1 className="logo">
        <Link to="/admin">베이스볼 관리자 페이지</Link>
      </h1>
      <AdminGlobalNavi />
      <HeaderIconPart account={account} />
    </AdminHeader>
  );
};

export default SideHeader;
