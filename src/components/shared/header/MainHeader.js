import React, { useState } from "react";

import styled from "styled-components";

import PageInner from "../page-padding/PageInner";
import LogoLink from "../Logo/LogoLink";
import GlobalNavigation from "../Menu/GlobalNavigation";
import ButtonWrapper from "../Menu/ButtonWrapper";
import MobileIcon from "../Menu/MobileIcon";
import MobileMenu from "../Menu/MobileMenu";

const MHeader = styled.header`
  &.wrapped__header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background-color: #fff;
    z-index: 40;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: 0;
      transition: height ease-in-out 1s;
      background-color: #333;
      z-index: 2;
    }
    .inner {
      max-width: 95%;
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        &.logo {
          a {
            display: block;
            img {
              display: block;
            }
          }
        }
      }
      div#gnb {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 30;
        > ul#gnbClear {
          display: flex;
          > li {
            position: relative;
            > a {
              color: #000;
              line-height: 90px;
              padding: 0 1.2rem;
              padding-top: 3px;
              transition: padding ease-in-out 0.6s;
              &:hover {
                color: rgb(150, 129, 78);
                font-weight: 700;
              }
            }
            div#lnb {
              position: absolute;
              left: 0;
              right: 0;
              top: 100%;
              z-index: 10;
              a {
                text-align: center;
                padding-bottom: 1.6rem;
                color: #fff;
                opacity: 0.45;
                &:hover {
                  color: rgba(255, 170, 11);
                  opacity: 1;
                }
                &:first-child {
                  padding-top: 1.6rem;
                }
              }
            }
          }
        }
      }
      .btns {
        display: flex;
        gap: 1.1rem;
        a {
          display: block;
          width: 90px;
          text-align: center;
          padding: 0.5rem 0;
          padding-top: 0.6rem;
          border: 1px solid rgba(0, 0, 0, 0.45);
          border-radius: 2rem;
          font-size: 0.9rem;
          &:hover {
            border: 1px solid rgb(36, 131, 71);
            color: rgb(36, 131, 71);
          }
        }
      }
      .mobile-icon {
        display: none;
        width: 30px;
        height: 30px;
        button {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 14px 14px;
          grid-auto-rows: 14px 14px;
          grid-gap: 2px;
          span {
            &:not(:first-child) {
              display: block;
              width: 14px;
              height: 14px;
              border-radius: 3px;
              background-color: #efefef;
            }
            &:nth-child(3) {
              background-color: rgb(36, 131, 71);
            }
          }
        }
      }
      .mobile-menu {
        display: none;
      }
    }
    &.hovered {
      &::after {
        height: 460px;
      }
      .inner {
        div#gnb {
          ul#gnbClear {
            > li {
              > a {
                padding: 0 1.8rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1210px) {
    &.wrapped__header {
      .inner {
        > div#gnb {
          display: none;
        }
        > .btns {
          display: none;
        }
        > .mobile-icon {
          display: block;
        }
        > .mobile-menu {
          display: block;
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          width: 320px;
          background-color: #fff;
          border-left: 1px solid rgba(0, 0, 0, 0.45);
          padding: 1rem 2.5rem;
          padding-top: 5rem;
          transition: transform 1s ease-in-out;
          button.close-button {
            position: absolute;
            top: 1rem;
            right: 1.5rem;
          }
          ul#mobileGnb {
            > li {
              position: relative;
              > a {
                padding: 1.2rem 0;
                transition: color 1s ease-in-out;
                line-height: 16px;
                &:hover {
                  color: rgb(36, 131, 71);
                  &::before {
                    width: 30px;
                  }
                }
                &::before {
                  content: "";
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  left: -2.5rem;
                  width: 0;
                  height: 1px;
                  background-color: rgb(36, 131, 71);
                  transition: width 1s ease-in-out;
                }
              }
            }
          }
          .btns {
            display: inline-flex;
            flex-direction: column;
            margin-top: 2.5rem;
          }
        }
      }
    }
  }
`;

const MainHeader = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  return (
    <MHeader className={`wrapped__header ${headerActive ? "hovered" : ""}`}>
      <PageInner>
        <LogoLink />
        <GlobalNavigation
          setHeaderActive={setHeaderActive}
          headerActive={headerActive}
        />
        <ButtonWrapper />
        <MobileIcon setMobileActive={setMobileActive} />
        <MobileMenu
          setMobileActive={setMobileActive}
          mobileActive={mobileActive}
        />
      </PageInner>
    </MHeader>
  );
};

export default MainHeader;
