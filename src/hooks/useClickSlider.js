import { useEffect } from "react";

const useClickSlider = (ref, activeIndex, width) => {
  useEffect(() => {
    const resizeAble = () => {
      if (ref.current && window.innerWidth >= width) {
        const offset =
          activeIndex *
          (ref.current.children[0].getBoundingClientRect().width + 30) *
          -1;
        console.log(offset);
        ref.current.style.transform = `translateX(${offset}px)`;
        ref.current.style.transition = "transform ease-in-out .6s";
      } else if (ref.current && window.innerWidth < width) {
      }
    };

    resizeAble();

    window.addEventListener("resize", resizeAble);

    return () => {
      window.removeEventListener("resize", resizeAble);
    };
  }, [ref, activeIndex, width]);
};

export default useClickSlider;
