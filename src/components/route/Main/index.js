import React from "react";

import useSearch from "../../../store/searchStore";

import PageInner from "../../shared/page-padding/PageInner";
import Slider from "../../private/slider/Slider";
import Calendar from "../../private/Calendar/Calendar";
import MobileSlider from "../../private/mobile-Slider/MobileSlider";
import Search from "../../shared/search/Search";
import Products from "../../private/Products/Products";
import Stadium from "../../private/Stadium/Stadium";

import "./mainContent.css";
import Notice from "../../private/Notice/Notice";

const Main = () => {
  const { search } = useSearch();

  return (
    <main style={{ marginTop: "80px" }}>
      {search.isSearch && <Search />}
      <MobileSlider />
      <PageInner>
        <Slider />
        <Calendar />
        <Products />
      </PageInner>
      <Stadium />
      <PageInner>
        <Notice />
      </PageInner>
    </main>
  );
};

export default Main;
