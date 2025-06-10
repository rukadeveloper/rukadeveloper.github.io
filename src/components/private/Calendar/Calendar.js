import axios from "axios";
import React, { useState, useEffect } from "react";
import MainContents from "./MainContents";
import DaysList from "./DaysList";
import { kboMock } from "../../../mocks/kboScript";

const Calendar = () => {
  const [kbo, setKbo] = useState([]);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/baseball/crawl"
        );
        console.log(response.data.data);
        setKbo(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {});

  return (
    <div className="calendar__list" style={{ marginTop: "60px" }}>
      <MainContents
        kbo={kboMock.data}
        setActiveIndex={setActiveDayIndex}
        activeIndex={activeDayIndex}
      />
      <DaysList
        kbo={kboMock.data}
        activeIndex={activeDayIndex}
        setActiveIndex={setActiveDayIndex}
      />
    </div>
  );
};

export default Calendar;
