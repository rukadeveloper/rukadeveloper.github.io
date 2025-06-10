import React, { forwardRef } from "react";
import { noticeMocks } from "../../../mocks/noticeScript";
import NoticeSwiperSlide from "./NoticeSwiperSlide";

const NoticeSwiper = forwardRef((props, ref) => {
  return (
    <div className="notice-sec-swiper">
      <div className="notice-sec-swiper-wrapper" ref={ref}>
        {noticeMocks.map((notice) => (
          <NoticeSwiperSlide notice={notice} />
        ))}
      </div>
    </div>
  );
});

export default NoticeSwiper;
