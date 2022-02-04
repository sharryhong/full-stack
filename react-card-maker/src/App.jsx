import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Maker from "./pages/maker/Maker";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route exact path="/" element={<Login authService={authService} />} />
        <Route
          path="maker"
          element={
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
