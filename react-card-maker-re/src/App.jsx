import React, { createContext, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./app.module.css";
import Login from "pages/login/Login";
import Home from "pages/home/Home";
import Maker from "pages/maker/Maker";
import Header from "components/base-layout/header/Header";
import MakerStore from "store/maker_store";

export const ImageUploaderContext = createContext();

function App({ authService, imageUploader }) {
  const navigate = useNavigate();

  const onLogin = (event) => {
    authService.login(event.target.innerText);
  };

  const onLogout = useCallback(() => {
    authService.logout();
    navigate("/");
  }, [authService]);

  return (
    <div className={styles.app}>
      <Header onLogout={onLogout} />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login authService={authService} onLogin={onLogin} />}
          />
          <Route
            path="/maker"
            element={
              <MakerStore>
                <ImageUploaderContext.Provider value={{ imageUploader }}>
                  <Maker authService={authService} />
                </ImageUploaderContext.Provider>
              </MakerStore>
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
