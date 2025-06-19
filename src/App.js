import React, { useState } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import useLoginToken from "./store/useLoginToken";

import MainHeader from "./components/shared/Header/MainHeader";
import Main from "./components/route/main";
import MainLogin from "./components/route/login/MainLogin";
import MainJoin from "./components/route/join/MainJoin";
import JoinSecond from "./components/route/join/JoinSecond";
import JoinThird from "./components/route/join/JoinThird";
import Reset from "./components/route/reset/index";
import Admin from "./components/route/admin/Admin";

import NotAdminLayout from "./components/layouts/NotAdminLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import FindId from "./components/route/find/id/FindId";
import FindPassword from "./components/route/find/password/FindPassword";

function App() {
  const [secondEnter, setSecondEnter] = useState(false);
  const [thirdEnter, setThirdEnter] = useState(false);

  const goSecond = () => {
    setSecondEnter(true);
  };

  const goThird = () => {
    setThirdEnter(true);
  };

  const { isAuth, loginData } = useLoginToken();

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <NotAdminLayout>
                <MainHeader />
                <Main />
              </NotAdminLayout>
            }
          />
          <Route
            path="/login"
            element={
              <NotAdminLayout>
                <MainHeader />
                <MainLogin />
              </NotAdminLayout>
            }
          />
          <Route
            path="/join/1"
            element={
              <NotAdminLayout>
                <MainHeader />
                <MainJoin goSecond={goSecond} />
              </NotAdminLayout>
            }
          />
          <Route
            path="/join/2"
            element={
              secondEnter ? (
                <NotAdminLayout>
                  <MainHeader />
                  <JoinSecond goThird={goThird} />
                </NotAdminLayout>
              ) : (
                <Navigate to="/join/1" replace />
              )
            }
          />
          <Route
            path="/join/3"
            element={
              thirdEnter ? (
                <NotAdminLayout>
                  <MainHeader />
                  <JoinThird />
                </NotAdminLayout>
              ) : (
                <Navigate to="/join/2" replace />
              )
            }
          />
          <Route
            path="/reset"
            element={
              isAuth ? (
                <NotAdminLayout>
                  <MainHeader />
                  <Reset />
                </NotAdminLayout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/find/id"
            element={
              <NotAdminLayout>
                <MainHeader />
                <FindId />
              </NotAdminLayout>
            }
          />
          <Route
            path="/find/password"
            element={
              <NotAdminLayout>
                <MainHeader />
                <FindPassword />
              </NotAdminLayout>
            }
          />
          <Route
            path="/admin"
            element={
              isAuth && loginData.role === "ROLE_ADMIN" ? (
                <AdminLayout>
                  <Admin />
                </AdminLayout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
