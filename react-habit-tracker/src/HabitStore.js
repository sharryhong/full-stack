import React, { useReducer } from "react";
import { habitReducer } from "./reducers.js";

export const HabitContext = React.createContext();

function HabitStore(props) {
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

  return (
    <HabitContext.Provider
      value={{
        habits,
        dispatch,
      }}
    >
      {props.children}
    </HabitContext.Provider>
  );
}

export default HabitStore;
