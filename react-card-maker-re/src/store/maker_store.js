import React, { createContext, useReducer, useEffect, useContext } from "react";
import { MakerReducer } from "./maker_reducer";
import { useLocation } from "react-router-dom";
import { SessionContext } from "context/session_provider.js";
import * as cardApi from "service/card_service";

export const MakerStateContext = createContext();
export const MakerDispatchContext = createContext();

// home에 보여줄 데이터
const initState = {
  id1: {
    id: "id1",
    name: "sharry",
    company: "HONG",
    theme: "light",
    title: "Web Front End Engineer",
    email: "sharryhong15@gmail.com",
    message: "Hello :)",
    fileName: "snoopy",
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
  const [cards, dispatch] = useReducer(MakerReducer, {});
  const { userId } = useContext(SessionContext);
  const location = useLocation();

  useEffect(() => {
    const userDataPage = location.pathname.includes("maker");

    if (userDataPage && userId) {
      cardApi.syncCard(userId, (cards) => {
        dispatch({ type: "SYNC", payload: cards });
      });
      return;
    }
    dispatch({ type: "SYNC", payload: initState });
  }, [userId, location.pathname]);

  return (
    <MakerDispatchContext.Provider value={dispatch}>
      <MakerStateContext.Provider value={cards}>
        {children}
      </MakerStateContext.Provider>
    </MakerDispatchContext.Provider>
  );
};

export default MakerStore;
