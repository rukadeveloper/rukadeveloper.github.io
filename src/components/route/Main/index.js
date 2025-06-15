import React from "react";
import SplitWrapper from "../../private/SplitWrapper";
import Introduction from "../../private/Introduction/Introduction";
import Reviewer from "../../private/Reviewer/Reviewer";
import MapWrapper from "../../private/MapService/MapWrapper";

const Main = () => {
  return (
    <>
      <SplitWrapper />
      <Introduction />
      <Reviewer />
      <MapWrapper />
    </>
  );
};

export default Main;
