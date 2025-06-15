import { useEffect, useRef } from "react";

const useInfiniteSlider = (ref, stop, screenWidth1, screenWidth2) => {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (ref.current && Array.from(ref.current.children).length > 0 && !stop) {
      const startInterval = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        if (
          window.innerWidth < screenWidth1 + 15 &&
          window.innerWidth >= screenWidth2
        ) {
          intervalRef.current = setInterval(() => {
            Array.from(ref.current.children).forEach((el, idx) => {
              el.style.transform = "translateX(-100%)";
              el.style.transition = "transform 1s ease-in-out";
            });

            const timeout = setTimeout(() => {
              ref.current.appendChild(ref.current.children[0]);
              Array.from(ref.current.children).forEach((el, idx) => {
                el.style.transform = "translateX(0)";
                el.style.transition = "none";
              });
            }, 1000);
          }, 3000);
        } else if (window.innerWidth < screenWidth2) {
          intervalRef.current = setInterval(() => {
            Array.from(ref.current.children).forEach((el, idx) => {
              el.style.transform = "translateX(calc(-100% - 30px))";
              el.style.transition = "transform 1s ease-in-out";
            });

            setTimeout(() => {
              ref.current.appendChild(ref.current.firstElementChild);
              Array.from(ref.current.children).forEach((el, idx) => {
                el.style.transform = "translateX(0)";
                el.style.transition = "none";
              });
            }, 1000);
          }, 2000);
        }
      };

      startInterval();

      window.addEventListener("resize", startInterval);

      return () => {
        window.removeEventListener("resize", startInterval);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [ref, stop, screenWidth1, screenWidth2]);
};

export default useInfiniteSlider;
