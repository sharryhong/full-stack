import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./app.module.css";
import Login from "pages/login/Login";
import Home from "pages/home/Home";
import Maker from "pages/maker/Maker";
import Header from "components/base-layout/header/Header";
import MakerStore from "store/maker_store";

function App({ authService }) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

  const onLogin = (event) => {
    authService.login(event.target.innerText);
  };

  const onLogout = () => {
    authService.logout();
    navigate("/");
  };

  const goToMaker = (userId) => {
    navigate("/maker");
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      user && goToMaker(user.uid);
      setUserId(user?.uid);
    });
  }, [authService]);

  return (
    <MakerStore>
      <div className={styles.app}>
        <Header userId={userId} onLogout={onLogout} />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login authService={authService} onLogin={onLogin} />}
            />
            <Route
              path="/maker"
              element={<Maker authService={authService} />}
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
    </MakerStore>
  );
}

export default App;
