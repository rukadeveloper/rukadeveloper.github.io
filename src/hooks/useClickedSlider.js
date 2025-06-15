import { useState, useEffect } from "react";

const useClickedSlider = (setActiveIndex, activeIndex, ref, screenWidth) => {
  const [translate, setTranslate] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (ref.current && ref.current.children.length > 0) {
        if (window.innerWidth >= screenWidth) {
          setTranslate("translateX(calc(-100% - 60px))");
        } else {
          setTranslate("translateX(-100%)");
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, screenWidth]);

  useEffect(() => {
    console.log(translate);
  }, [translate]);

  const prev = () => {
    if (ref.current && ref.current.children.length > 0) {
      const array = Array.from(ref.current.children);
      if (activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      } else {
        setActiveIndex(array.length - 1);
      }
      ref.current.insertBefore(
        ref.current.children[array.length - 1],
        ref.current.firstElementChild
      );

      array.forEach((el, idx) => {
        el.style.transform = translate;
        el.style.transition = "none";
      });

      setTimeout(() => {
        array.forEach((el, idx) => {
          el.style.transform = "translateX(0)";
          el.style.transition = "1s ease-in-out";
        });
      }, 0);
    }
  };

  const next = () => {
    if (ref.current && ref.current.children.length > 0) {
      const array = Array.from(ref.current.children);
      setActiveIndex((prev) => (prev + 1) % array.length);
      array.forEach((el, idx) => {
        el.style.transform = translate;
        el.style.transition = "transform 1s ease-in-out";
      });

      const timeout = setTimeout(() => {
        ref.current.appendChild(ref.current.firstElementChild);

        array.forEach((el, idx) => {
          el.style.transform = "translateX(0)";
          el.style.transition = "none";
        });
      }, 1000);
    }
  };

  return {
    prev,
    next,
  };
};

export default useClickedSlider;
