import React from "react";

import { noticeMocks } from "../../../mocks/noticeScript";

const NoticeSwiperButton = ({ activeIndex, setActiveIndex }) => {
  const increase = () => {
    setActiveIndex((prev) => (prev + 1) % noticeMocks.length);
  };

  const decrease = () => {
    setActiveIndex((prev) => (prev - 1) % noticeMocks.length);
  };

  return (
    <div className="notice-sec-swiper-button">
      <button onClick={decrease} disabled={activeIndex <= 0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <p>
        <span>{(activeIndex + 1).toString().padStart(2, "0")}</span>
        <span>/</span>
        <span>{noticeMocks.length.toString().padStart(2, "0")}</span>
      </p>
      <button
        onClick={increase}
        disabled={activeIndex + 1 === noticeMocks.length}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default NoticeSwiperButton;
