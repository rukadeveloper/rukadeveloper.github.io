import React, { useState } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import useLoginToken from "./store/useLoginToken";

import MainHeader from "./components/shared/Header/MainHeader";
import Main from "./components/route/main";
import MainLogin from "./components/route/login/MainLogin";
import MainJoin from "./components/route/join/MainJoin";
import JoinSecond from "./components/route/join/JoinSecond";
import JoinThird from "./components/route/join/JoinThird";
import Reset from "./components/shared/reset/Reset";

function App() {
  const [secondEnter, setSecondEnter] = useState(false);
  const [thirdEnter, setThirdEnter] = useState(false);

  const goSecond = () => {
    setSecondEnter(true);
  };

  const goThird = () => {
    setThirdEnter(true);
  };

  const { isAuth } = useLoginToken();

  return (
    <div className="app">
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<MainLogin />} />
          <Route path="/join/1" element={<MainJoin goSecond={goSecond} />} />
          <Route
            path="/join/2"
            element={
              secondEnter ? (
                <JoinSecond goThird={goThird} />
              ) : (
                <Navigate to="/join/1" replace />
              )
            }
          />
          <Route
            path="/join/3"
            element={
              thirdEnter ? <JoinThird /> : <Navigate to="/join/2" replace />
            }
          />
          <Route
            path="/reset"
            element={isAuth ? <Reset /> : <Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
