import React, { useEffect, useRef } from "react";
import { reviewMocks } from "../../../mocks/reviewScript";
import ReviewCard from "./ReviewCard";

const ReviewSlide = () => {
  const revSlideRef = useRef(null);

  useEffect(() => {
    let observer;

    const resize = () => {
      if (revSlideRef.current) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 이미 interval이 존재하면 중복 생성 방지
              Array.from(entry.target.children)[0].style.animation =
                "autoSlide 50s infinite alternate";
            }
          });
        });
      }
      observer.observe(revSlideRef.current);
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      if (observer) {
        observer.disconnect();
        window.removeEventListener("resize", resize);
      }
    };
  }, []);

  return (
    <div className="rev-slide" ref={revSlideRef}>
      <div className="rev-slide-wrapper">
        {reviewMocks.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSlide;
