import React, { useState, useEffect } from "react";
import useDimmed from "./hooks/useDimmed";
import useIsScrolled from "./hooks/useIsScrolled";
import MainHeader from "./components/shared/header/MainHeader";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Main from "./components/route/Main";
import Login from "./components/route/Login";
import Join from "./components/route/Join";
import MainFooter from "./components/shared/Footer/MainFooter";
import SamsungComp from "./components/route/Teams/SamsungComp";

function App() {
  const [lazy, setLazy] = useState(true);

  useEffect(() => {
    setLazy(true);

    const lazing = setTimeout(() => {
      setLazy(false);
    }, 3000);

    return () => {
      clearTimeout(lazing);
    };
  }, []);

  useDimmed();

  return (
    <div className="app">
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/move/samsung" element={<SamsungComp />} />
        </Routes>
        <MainFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
