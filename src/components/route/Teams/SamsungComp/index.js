import React from "react";
import useIsScrolled from "../../../../hooks/useIsScrolled";
import { useLocation } from "react-router-dom";
import Samsung from "../../../private/Teams/Samsung/Samsung";

const SamsungComp = () => {
  const location = useLocation();

  useIsScrolled(location.pathname.split("/")[1]);

  return (
    <main>
      <Samsung />
    </main>
  );
};

export default SamsungComp;
