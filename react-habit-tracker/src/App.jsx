import React, { useState } from "react";
import "./App.css";
import HabitAddForm from "./components/habit-add-form/HabitAddForm";
import Habits from "./components/habits/Habits";
import Header from "./components/header/Header";

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
  return (
    <>
      <Header />
      <HabitAddForm />
      <Habits habits={habits} />
    </>
  );
}

export default App;
