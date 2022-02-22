import React, { createContext, useReducer } from "react";
import { UserMakerReducer } from "./user_maker_reducer";

export const UserMakerContext = createContext();

const UserMakerStore = ({ children }) => {
  const [cards, dispatch] = useReducer(UserMakerReducer, {});
  return (
    <UserMakerContext.Provider value={{ cards, dispatch }}>
      {children}
    </UserMakerContext.Provider>
  );
};

export default UserMakerStore;
