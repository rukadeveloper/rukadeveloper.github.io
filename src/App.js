import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainHeader from "./components/shared/Header/MainHeader";
import Main from "./components/route/main";
import MainLogin from "./components/route/login/MainLogin";
import MainJoin from "./components/route/join/MainJoin";
import JoinSecond from "./components/route/join/JoinSecond";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<MainLogin />} />
          <Route path="/join/1" element={<MainJoin />} />
          <Route path="/join/2" element={<JoinSecond />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
