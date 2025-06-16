import React from "react";

import { cn } from "../../../utils/utils";

const ButtonEach = ({ className, label, svg, button }) => {
  return (
    <button className={cn("btn-each", className)} onClick={button}>
      <span className="sr-only">{label}</span>
      {svg}
    </button>
  );
};

export default ButtonEach;
