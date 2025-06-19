import { useEffect, useRef, useCallback } from "react";

const useInfiniteSlider = (ref, stop, screenWidth1, screenWidth2) => {
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // startInterval을 useCallback으로 고정
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (ref.current && Array.from(ref.current.children).length > 0 && !stop) {
      if (
        window.innerWidth < screenWidth1 &&
        window.innerWidth >= screenWidth2
      ) {
        intervalRef.current = setInterval(() => {
          Array.from(ref.current.children).forEach((el) => {
            el.style.transform = "translateX(-100%)";
            el.style.transition = "transform 1s ease-in-out";
          });

          timeoutRef.current = setTimeout(() => {
            ref.current.appendChild(ref.current.children[0]);
            Array.from(ref.current.children).forEach((el) => {
              el.style.transform = "translateX(0)";
              el.style.transition = "none";
            });
          }, 1000);
        }, 3000);
      } else if (window.innerWidth < screenWidth2) {
        intervalRef.current = setInterval(() => {
          Array.from(ref.current.children).forEach((el) => {
            el.style.transform = "translateX(calc(-100% - 30px))";
            el.style.transition = "transform 1s ease-in-out";
          });

          timeoutRef.current = setTimeout(() => {
            ref.current.appendChild(ref.current.firstElementChild);
            Array.from(ref.current.children).forEach((el) => {
              el.style.transform = "translateX(0)";
              el.style.transition = "none";
            });
          }, 1000);
        }, 2000);
      }
    }
  }, [ref, stop, screenWidth1, screenWidth2]);

  useEffect(() => {
    startInterval();
    window.addEventListener("resize", startInterval);

    return () => {
      window.removeEventListener("resize", startInterval);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [startInterval]);
};

export default useInfiniteSlider;
