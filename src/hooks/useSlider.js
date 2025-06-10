import { useLayoutEffect } from "react";

const useSlider = (sliderRef, fetchData) => {
  useLayoutEffect(() => {
    // sliderRef는 swiper-wrapper를 의미한다.

    console.log(Array.from(sliderRef.current.children));

    const fetchClone = () => {
      if (
        sliderRef.current &&
        Array.from(sliderRef.current.children).length > 0 &&
        fetchData.length > 0
      ) {
        console.log(sliderRef.current);
        const firstElement = sliderRef.current.children[0];
        const lastElement =
          sliderRef.current.children[sliderRef.current.children.length - 1];
        if (!lastElement.hasAttribute("data-clone")) {
          const clone = firstElement.cloneNode(true);
          clone.setAttribute("data-clone", true);
          sliderRef.current.append(clone);
        }
      }
    };

    fetchClone();
  }, [sliderRef, fetchData]);
};

export default useSlider;
