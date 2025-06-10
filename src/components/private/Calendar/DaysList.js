import React from "react";
import useStore from "../../../store/monthStore";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import {
  getDayShort,
  groupByMonthAndDay,
} from "../../../utils/commonFunctions";

import "./DaysList.css";

const DaysList = ({ kbo, activeIndex, setActiveIndex }) => {
  const { selectedMonth } = useStore();

  const filteredKbo = groupByMonthAndDay(kbo);

  const breakPoints = {
    768: {
      slidesPerView: 10,
    },
    600: {
      slidesPerView: 6,
    },
    450: {
      slidesPerView: 4,
    },
  };

  return (
    <Swiper
      slidesPerView={4}
      breakpoints={breakPoints}
      spaceBetween={16}
      modules={[Navigation]}
      navigation={true}
      className="days__list"
    >
      {Object.keys(filteredKbo[selectedMonth]).map((keys, i) => (
        <SwiperSlide>
          <button
            className={`${activeIndex === i ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(i);
            }}
          >
            <span>{keys.split("-")[2]}</span>
            <span>{getDayShort(keys)}</span>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DaysList;
