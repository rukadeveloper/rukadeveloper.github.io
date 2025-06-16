import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { cn } from "../../../utils/utils";

const RegionBullet = ({
  active,
  setActive,
  activeIndex,
  setActiveIndex,
  regionMap,
}) => {
  return (
    <div className="region-bullet">
      {regionMap.map((region, i) => (
        <button
          className={cn(activeIndex === i && active && "active")}
          onClick={() => {
            setActive(true);
            setActiveIndex(i);
          }}
        >
          <span>{region}</span>
          <IoIosArrowRoundForward size={26} />
        </button>
      ))}
    </div>
  );
};

export default RegionBullet;
