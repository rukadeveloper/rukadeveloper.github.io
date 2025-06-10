import React, { useState, useEffect, useRef } from "react";
import SamsungProductList from "./SamsungProductList";
import PageInner from "../../../shared/page-padding/PageInner";
import DragMarker from "./DragMarker";

const SamsungProducts = () => {
  // 드래그 상태
  const [isDrag, setIsDrag] = useState(false);
  const [firstX, setFirstX] = useState(0);
  let moveX = 0;
  const max = useRef(0);
  const swiperRef = useRef(null);

  const mouseDown = (e) => {
    if (swiperRef.current) {
      setIsDrag(true);
      setFirstX(e.pageX);
    }
  };

  const mouseMove = (e) => {
    if (swiperRef.current && swiperRef.current.children.length > 0) {
      swiperRef.current.style.cursor = "grabbing";
      moveX = e.pageX - firstX;
      if (moveX >= max.current) moveX = max.current;
      swiperRef.current.style.transform = `translateX(-${moveX}px)`;
      swiperRef.current.style.transition = "transform ease-in-out .1s";
      Array.from(swiperRef.current.children).forEach((el, idx) => {
        el.style.userSelect = "none";
      });
    }
  };

  const mouseUp = () => {
    if (swiperRef.current) {
      setIsDrag(false);
      swiperRef.current.style.cursor = "grab";
    }
  };

  useEffect(() => {
    const resizeAble = () => {
      if (window.innerWidth < 1160 && swiperRef.current) {
        swiperRef.current.style.cursor = isDrag ? "grabbing" : "grab";
        max.current =
          swiperRef.current.getBoundingClientRect().width * 2 + 1.5 * 16;
      }
    };

    resizeAble();

    if (isDrag) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp); // mouseup도 윈도우에 등록 권장
    }

    return () => {
      window.removeEventListener("resize", resizeAble);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [isDrag]);
  return (
    <section id="section" className="section1">
      <PageInner>
        <h2>
          <span>파란색을 상징하는</span> 한국 최고의 명문구단, 삼성 라이온즈!
        </h2>
        <DragMarker />
        <SamsungProductList ref={swiperRef} mouseDown={mouseDown} />
      </PageInner>
    </section>
  );
};

export default SamsungProducts;
