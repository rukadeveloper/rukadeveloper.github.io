import React from "react";

import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import { MdGridView } from "react-icons/md";

import SliderIcon from "./SliderIcon";

const SliderButtons = ({ setSliderStop, nextButton, prevButton }) => {
  return (
    <div id="slider-buttons">
      <SliderIcon
        cpn={<MdChevronLeft size={46} />}
        setSliderStop={setSliderStop}
        button={prevButton}
      />
      <SliderIcon
        cpn={<MdGridView size={26} />}
        setSliderStop={setSliderStop}
        button={nextButton}
      />
      <SliderIcon
        cpn={<MdChevronRight size={46} />}
        setSliderStop={setSliderStop}
        button={nextButton}
      />
    </div>
  );
};

export default SliderButtons;
