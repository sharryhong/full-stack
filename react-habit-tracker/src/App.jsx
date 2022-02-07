import React from "react";
import Habits from "./components/habits/Habits";
import Header from "./components/header/Header";
import styles from "./app.module.css";
import HabitStore from "./HabitStore";

function App() {
  return (
    <HabitStore>
      <Header />
      <section className={styles.main}>
        <Habits />
      </section>
    </HabitStore>
  );
}

export default App;
