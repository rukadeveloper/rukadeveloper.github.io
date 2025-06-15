import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainHeader from "./components/shared/Header/MainHeader.js";
import Main from "./components/route/Main";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
