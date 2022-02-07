import React, { useReducer } from "react";
import Button from "./components/button/Button";
import HabitAddForm from "./components/habit-add-form/HabitAddForm";
import Habits from "./components/habits/Habits";
import Header from "./components/header/Header";
import styles from "./app.module.css";

export const HabitContext = React.createContext();

const habitReducer = (habits, { type, payload }) => {
  switch (type) {
    case "ADD_HABIT":
      return [{ id: Date.now(), title: payload, count: 0 }, ...habits];
    default:
      throw new Error();
  }
};

function App() {
  const [habits, dispatch] = useReducer(habitReducer, [
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

  const onDelete = (habit) => {
    const newHabits = habits.filter((item) => item.id !== habit.id);
    // setHabits(newHabits);
  };

  const onIncrease = (habit) => {
    const newHabits = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    // setHabits(newHabits);
  };

  const onDecrease = (habit) => {
    const newHabits = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count === 0 ? 0 : habit.count - 1 };
      }
      return item;
    });
    // setHabits(newHabits);
  };

  const onResetAll = () => {
    const newHabits = habits.map((habit) => {
      if (habit.count !== 0) return { ...habit, count: 0 };
      return habit;
    });
    // setHabits(newHabits);
  };

  const setTotalCount = () => {
    return habits.filter((habit) => habit.count > 0).length;
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        dispatch,
        setTotalCount,
        onDelete,
        onIncrease,
        onDecrease,
      }}
    >
      <Header />
      <section className={styles.main}>
        <HabitAddForm />
        <Habits />
        <Button name="Reset All" onClick={onResetAll} />
      </section>
    </HabitContext.Provider>
  );
}

export default App;
