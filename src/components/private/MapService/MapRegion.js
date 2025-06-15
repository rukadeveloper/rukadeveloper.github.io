import React from "react";
import MapRender from "./MapRender";

const MapRegion = ({ active, activeIndex, regionMap }) => {
  return (
    <div id="map-region">
      <MapRender
        sizeX={300}
        sizeY={450}
        active={active}
        activeIndex={activeIndex}
        regionMap={regionMap}
      />
    </div>
  );
};

export default MapRegion;
