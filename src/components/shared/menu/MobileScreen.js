import React from "react";
import PageInner from "../page-padding/PageInner";
import TopMobile from "./TopMobile";
import BottomMobile from "./BottomMobile";

const MobileScreen = ({ mobileScreen, setMobileScreen }) => {
  return (
    <div className={`mobile__menu__screen ${mobileScreen ? "active" : ""}`}>
      <PageInner>
        <TopMobile setMobileScreen={setMobileScreen} />
        <BottomMobile setMobileScreen={setMobileScreen} />
      </PageInner>
    </div>
  );
};

export default MobileScreen;
