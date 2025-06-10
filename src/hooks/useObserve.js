import { useEffect } from "react";

const useObserve = (ref, className, threshold) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          } else {
            entry.target.classList.remove(className);
          }
        });
      },

      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, className, threshold]);
};

export default useObserve;
