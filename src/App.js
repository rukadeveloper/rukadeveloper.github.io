import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainHeader from "./components/shared/Header/MainHeader";
import Main from "./components/route/Main";
import MainLogin from "./components/route/Login/MainLogin";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<MainLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
