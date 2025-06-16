import React from "react";
import SplitWrapper from "../../private/splitWrapper";
import Introduction from "../../private/introduction/Introduction";
import Reviewer from "../../private/reviewer/Reviewer";
import MapWrapper from "../../private/mapService/MapWrapper";

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
