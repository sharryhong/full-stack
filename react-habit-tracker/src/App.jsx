import React, { useState } from "react";
import Button from "./components/button/Button";
import HabitAddForm from "./components/habit-add-form/HabitAddForm";
import Habits from "./components/habits/Habits";
import Header from "./components/header/Header";
import styles from "./app.module.css";

function App() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: "Coding",
      count: 0,
    },
    {
      id: 2,
      title: "Reading",
      count: 0,
    },
  ]);
  const [totalCount, setTotalCount] = useState(0);

  const onAdd = (title) => {
    const habit = {
      id: Date.now(),
      title,
      count: 0,
    };
    setHabits([habit, ...habits]);
  };

  return (
    <>
      <Header totalCount={totalCount} />
      <section className={styles.main}>
        <HabitAddForm onAdd={onAdd} />
        <Habits habits={habits} />
        <Button name="Reset All" />
      </section>
    </>
  );
}

export default App;
