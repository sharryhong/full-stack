import React, { createContext, useReducer } from "react";
import { MakerReducer } from "./maker_reducer";

export const MakerStateContext = createContext();
export const MakerDispatchContext = createContext();

const initState = {
  id1: {
    id: "id1",
    name: "sharry",
    company: "HONG",
    theme: "light",
    title: "Web Front End Engineer",
    email: "sharryhong15@gmail.com",
    message: "Hello :)",
    fileName: "test",
    fileURL:
      "https://blog.kakaocdn.net/dn/6XCV7/btq0Yh1Filw/1NKlaKjEegSKkJH75oltw1/img.png",
  },
  id2: {
    id: "id2",
    name: "ori",
    company: "GOO",
    theme: "colorful",
    title: "Engineer",
    email: "goo@gmail.com",
    message: "Hello!",
    fileName: "",
    fileURL: "",
  },
};

const MakerStore = ({ children }) => {
  const [cards, dispatch] = useReducer(MakerReducer, initState);

  return (
    <MakerDispatchContext.Provider value={dispatch}>
      <MakerStateContext.Provider value={cards}>
        {children}
      </MakerStateContext.Provider>
    </MakerDispatchContext.Provider>
  );
};

export default MakerStore;
