import React, { useEffect, useReducer } from "react";
import useFetch from "./useFetch";
import {todoReducer} from './reducers';

// 상위 store역할 
export const TodoContext = React.createContext();

const TodoStore = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, []); // 두번째 argument는 초기값

  const setInitData = (initData) => {
    // dispatch로 action을 발생시킨다.
    dispatch({ type: "SET_INIT_DATA", payload: initData });
  };

  const isLoaded = useFetch(setInitData, "http://localhost:9000/todo");

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        isLoaded,
        dispatch,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoStore;
