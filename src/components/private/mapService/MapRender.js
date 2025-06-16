import React, { useState, useEffect, useRef } from "react";
import { mapData } from "../../../mocks/mapScript";
import { groupedArray } from "../../../utils/utils";

const MapRender = ({ sizeX, sizeY, active, activeIndex, regionMap }) => {
  const koreaMap = useRef(null);
  const [bBox, setBBox] = useState({});

  useEffect(() => {
    if (koreaMap.current) {
      setBBox(koreaMap.current.getBBox());
    }
  }, []);

  const array = groupedArray(mapData);

  console.log(array);

  return (
    <svg
      viewBox={`${bBox.x} ${bBox.y} ${bBox.width} ${bBox.height}`}
      width={sizeX}
      height={sizeY}
    >
      <g id="layer1">
        <g id="korea" ref={koreaMap}>
          {Object.entries(array).map(([regionKey, regionArr]) =>
            regionArr.map((regionOne) => (
              <path
                id={regionOne.id}
                d={regionOne.d}
                fill={`${
                  active && regionKey === regionMap[activeIndex]
                    ? "rgb(77,105,100)"
                    : "#D9E3E1"
                }`}
              />
            ))
          )}
        </g>
      </g>
    </svg>
  );
};

export default MapRender;
