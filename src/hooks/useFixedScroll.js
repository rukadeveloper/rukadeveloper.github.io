import { useEffect } from "react";

const useFixedScroll = (ref1, ref2, screenWidth) => {
  useEffect(() => {
    if (ref1.current && ref2.current) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const movedY =
          ref2.current.offsetTop +
          ref2.current.offsetHeight -
          window.innerHeight;

        document.querySelector(".cloned")?.remove();
        if (scrollY === 0) {
          if (window.innerWidth >= screenWidth) {
            ref1.current.style.position = "relative";
            ref1.current.style.top = "0";
            ref1.current.style.alignSelf = "start";
            ref1.current.style.height = "calc(100vh - 90px)";
            ref2.current.classList.remove("end");
          }
        } else if (scrollY > 0 && scrollY < movedY) {
          if (window.innerWidth >= screenWidth) {
            if (ref1.current.style.position !== "fixed") {
              console.log("dd");
              ref1.current.style.position = "fixed";
              ref1.current.style.top = "90px";
              ref1.current.style.left = "0";
              ref1.current.style.height = "calc(100vh - 90px)";
              ref2.current.parentNode.parentNode.classList.add("end");
            }
          } else {
            ref1.current.style.position = "relative";
            ref2.current.parentNode.parentNode.classList.remove("end");
          }
        } else if (scrollY >= movedY) {
          if (window.innerWidth >= screenWidth) {
            ref1.current.style.position = "relative";
            ref1.current.style.alignSelf = "end";
            ref2.current.parentNode.parentNode.classList.remove("end");
          }
        }
      };

      handleScroll();

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }
  }, [ref1, ref2, screenWidth]);
};

export default useFixedScroll;
