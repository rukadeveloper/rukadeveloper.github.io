import React from "react";
import { cn } from "../../../utils/utils";

const JoinCheckbox = ({ buttonChange, idx }) => {
  const gender = ["남자", "여자"];

  return (
    <div className="join__checkbox">
      <h2>성별</h2>
      <div className="gender-select">
        {gender.map((g, i) => (
          <button
            key={i}
            className={cn(idx === i && "active")}
            type="button"
            onClick={() => {
              buttonChange(i);
            }}
          >
            {g}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JoinCheckbox;
