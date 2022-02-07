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
    case "DELETE_HABIT":
      return habits.filter((item) => item.id !== payload.id);
    case "COUNT_INCREASE":
      return habits.map((item) => {
        if (item.id === payload.id) {
          return { ...payload, count: payload.count + 1 };
        }
        return item;
      });
    case "COUNT_DECREASE":
      return habits.map((item) => {
        if (item.id === payload.id) {
          return {
            ...payload,
            count: payload.count === 0 ? 0 : payload.count - 1,
          };
        }
        return item;
      });
    case "RESET_COUNT":
      return habits.map((habit) => {
        if (habit.count !== 0) return { ...habit, count: 0 };
        return habit;
      });
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

  const onResetAll = () => {
    dispatch({ type: "RESET_COUNT" });
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
