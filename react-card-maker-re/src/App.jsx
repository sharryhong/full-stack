import React, { createContext, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./app.module.css";
import Login from "components/pages/login/Login";
import Home from "components/pages/home/Home";
import Maker from "components/pages/maker/Maker";
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
        <MakerStore>
          <ImageUploaderContext.Provider value={imageUploader}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login onLogin={onLogin} />} />
              <Route path="/maker" element={<Maker />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </ImageUploaderContext.Provider>
        </MakerStore>
      </main>
    </div>
  );
}

export default App;
