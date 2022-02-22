import React, { createContext, useReducer } from "react";
import { UserMakerReducer } from "./user_maker_reducer";

export const UserMakerStateContext = createContext();
export const UserMakerDispatchContext = createContext();

const UserMakerStore = ({ children }) => {
  const [cards, dispatch] = useReducer(UserMakerReducer, {});
  return (
    <UserMakerDispatchContext.Provider value={dispatch}>
      <UserMakerStateContext.Provider value={cards}>
        {children}
      </UserMakerStateContext.Provider>
    </UserMakerDispatchContext.Provider>
  );
};

export default UserMakerStore;
