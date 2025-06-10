import React from "react";

const NoticeSwiperSlide = ({ notice }) => {
  return (
    <div className="notice-sec-swiper-slide">
      <div className="imgBx">
        <img src={notice.thumbnail} alt="notice-thumbnail" />
      </div>
      <div className="content">
        <h2>{notice.title}</h2>
        <span>{notice.date}</span>
      </div>
    </div>
  );
};

export default NoticeSwiperSlide;
