import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useLoadingData = (setRootLoading) => {
  const location = useLocation();

  useEffect(() => {
    let timeout;

    switch (location.pathname) {
      case "/":
        timeout = setTimeout(() => {
          setRootLoading(false);
        }, 2000);
        break;
      default:
        return;
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [location.pathname, setRootLoading]);
};

export default useLoadingData;
