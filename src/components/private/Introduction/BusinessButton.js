import React from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

import ButtonEach from "./ButtonEach";

const BusinessButton = ({ activeIndex, businessMocks, prev, next }) => {
  return (
    <div className="b-btn">
      <ButtonEach
        className="prev"
        label="이전으로 돌아가는 버튼"
        svg={<IoIosArrowRoundBack size={25} />}
        button={prev}
      />
      <ButtonEach
        className="next"
        label="다음으로 넘어가는 버튼"
        svg={<IoIosArrowRoundForward size={25} />}
        button={next}
      />
      <p>
        <span>{activeIndex + 1}</span>
        <span>/</span>
        <span>{businessMocks.length}</span>
      </p>
    </div>
  );
};

export default BusinessButton;
