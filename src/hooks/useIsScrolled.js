import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useIsScrolled = (pathname) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    if (pathname === "move") {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (isScrolled) {
      document.body.classList.add("scroll");
    } else {
      document.body.classList.remove("scroll");
    }
  }, [isScrolled, pathname]);
};

export default useIsScrolled;
