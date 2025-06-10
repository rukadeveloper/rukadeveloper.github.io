import React, { useState, useEffect, forwardRef, useRef } from "react";
import useSwipers from "../../../store/swiperStore";

const SwiperBar = forwardRef(({ props }, ref) => {
  const [isDragging, setIsDragging] = useState(false);
  const [barLeft, setBarLeft] = useState(0);
  const barRef = useRef(null);
  const bigBarRef = useRef(null);
  const startX = useRef(0);
  const startLeft = useRef(0);

  const { setBarLefts } = useSwipers();

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    startLeft.current = barLeft;
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX.current;
    let newLeft = startLeft.current + dx;

    const min = 0;
    const max =
      bigBarRef.current.getBoundingClientRect().width -
      barRef.current.getBoundingClientRect().width;

    console.log("max : " + max);

    if (newLeft < min) newLeft = min;
    if (newLeft > max) newLeft = max;

    setBarLeft(newLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      setBarLefts(barLeft);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, barLeft]);

  return (
    <div className="swiper-bar" ref={bigBarRef}>
      <div
        className="filled-bar"
        style={{
          width: ref.current
            ? `calc(100% * (4 / ${ref.current.children.length}))`
            : 0,
          backgroundColor: "black",
          left: barLeft,
        }}
        ref={barRef}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
});

export default SwiperBar;
