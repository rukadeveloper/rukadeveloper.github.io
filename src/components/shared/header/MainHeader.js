import React from "react";
import PageInner from "../page-padding/PageInner";
import LogoLink from "../logo/LogoLink";
import "./mainHeader.css";
import MainMenu from "../menu/MainMenu";
import MobileMenu from "../menu/MobileMenu";
import HeaderIcons from "../header-icons/HeaderIcons";
import SideHeader from "./SideHeader";

const MainHeader = () => {
  return (
    <header className="app__header">
      <PageInner>
        <LogoLink />
        <SideHeader />
        <MainMenu />
        <HeaderIcons />
        <MobileMenu />
      </PageInner>
    </header>
  );
};

export default MainHeader;
