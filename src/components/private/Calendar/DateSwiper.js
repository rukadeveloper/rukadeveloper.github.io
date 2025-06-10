import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import useStore from "../../../store/monthStore";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// common Function
import { groupByMonthAndDay } from "../../../utils/commonFunctions";

const DateSwiper = ({ kbo, setActiveIndex }) => {
  const grouped = groupByMonthAndDay(kbo);

  const { setSelectedMonth } = useStore();

  const handleMonths = (swiper) => {
    const currentIndex = swiper.activeIndex;
    const currentMonths = Object.keys(grouped)[currentIndex];
    setSelectedMonth(currentMonths);
    setActiveIndex(0);
  };

  return (
    <Swiper
      className="date__swiper"
      navigation={true}
      modules={[Navigation]}
      onSlideChange={handleMonths}
    >
      {Object.keys(grouped).map((month) => (
        <SwiperSlide>
          <span>{month.split(" ")[1]}</span>
          <span>{month.split(" ")[0]}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DateSwiper;
