import React, { useState, useEffect } from "react";
import SideIcons from "./SideIcons";
import SideButton from "./SideButton";

const SideHeader = () => {
  const [sideActive, setSideActive] = useState(false);

  const clickSideActive = () => {
    setSideActive((prev) => !prev);
  };

  useEffect(() => {
    const resizeEvent = () => {
      const width = window.innerWidth;
      if (width < 910) {
        setSideActive(true);
      }
    };

    window.addEventListener("resize", resizeEvent);

    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  return (
    <div className={`side__header ${sideActive ? "hiddens" : ""}`}>
      <SideIcons
        src={"/images/svg/reservation.svg"}
        alt="reservation__icon"
        label="간단 예약하기"
        size={1.4}
      />
      <SideIcons
        src="/images/svg/counsel.svg"
        alt="counsel__icon"
        label="온라인 상담"
        size={1.3}
      />
      <button className="mobile__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        className="close__button"
        onClick={() => {
          setSideActive((prev) => !prev);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <SideButton
        click={clickSideActive}
        clickState={sideActive}
        src={"/images/svg/arrow.svg"}
        alt={"arrow"}
      />
    </div>
  );
};

export default SideHeader;
