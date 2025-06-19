import { useEffect } from "react";

const useHtmlScreen = () => {
  useEffect(() => {
    const resize = () => {
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
};

export default useHtmlScreen;
