import React from "react";
import { groupedArray } from "../../../utils/utils";
import { mapData } from "../../../mocks/mapScript";
import ResultBox from "./ResultBox";

const MapResult = ({ active, activeIndex, regionMap }) => {
  const array = groupedArray(mapData);

  console.log(
    Object.entries(array)
      .filter((item) => item[0] === regionMap[activeIndex])[0][1]
      .filter((item) => item.stadium.length !== 0)[0]
  );

  return (
    <div className="map-result">
      {Object.entries(array)
        .filter((item) => item[0] === regionMap[activeIndex])[0][1]
        .filter((item) => item.stadium.length !== 0)[0]
        .stadium.map((st) => (
          <ResultBox st={st} />
        ))}
    </div>
  );
};

export default MapResult;
