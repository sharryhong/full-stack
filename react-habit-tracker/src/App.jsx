import React, { useState } from "react";
import Button from "./components/button/Button";
import HabitAddForm from "./components/habit-add-form/HabitAddForm";
import Habits from "./components/habits/Habits";
import Header from "./components/header/Header";
import styles from "./app.module.css";

export const HabitContext = React.createContext();

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

  const onAdd = (title) => {
    const habit = {
      id: Date.now(),
      title,
      count: 0,
    };
    setHabits([habit, ...habits]);
  };

  const onDelete = (habit) => {
    const newHabits = habits.filter((item) => item.id !== habit.id);
    setHabits(newHabits);
  };

  const onIncrease = (habit) => {
    const newHabits = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(newHabits);
  };

  const onDecrease = (habit) => {
    const newHabits = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count === 0 ? 0 : habit.count - 1 };
      }
      return item;
    });
    setHabits(newHabits);
  };

  const onResetAll = () => {
    const newHabits = habits.map((habit) => {
      if (habit.count !== 0) return { ...habit, count: 0 };
      return habit;
    });
    setHabits(newHabits);
  };

  return (
    <HabitContext.Provider value={{ habits }}>
      <Header />
      <section className={styles.main}>
        <HabitAddForm onAdd={onAdd} />
        <Habits
          habits={habits}
          onDelete={onDelete}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <Button name="Reset All" onClick={onResetAll} />
      </section>
    </HabitContext.Provider>
  );
}

export default App;
