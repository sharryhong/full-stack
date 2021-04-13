import React, { useState, useEffect, useReducer } from "react";
import List from "./List";
import Header from './Header';
import Form from './Form';
import useFetch from "./useFetch";

// 상위 store역할 
export const TodoContext = React.createContext();

const todoReducer = (todos, {type, payload}) => { // parameter: state, action {type, payload}
  switch (type) {
    case 'ADD_TODO':
      return;
    case 'SET_INIT_DATA':
      return payload;
    case 'CHANGE_TODO_STATUS':
      return;
    default: 
      break;
  }
}

const TodoStore = () => {
  const [todos, dispatch] = useReducer(todoReducer, []); // 두번째 argument는 초기값

  const setInitData = (initData) => {
    // dispatch로 action을 발생시킨다. 
    dispatch({ type: "SET_INIT_DATA", payload: initData });
  }

  const isLoaded = useFetch(setInitData, "http://localhost:9000/todo");

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      { title: newTodo, id: todos.length + 1, status: "todo" },
    ]);
  };

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.status === "done") todo.status = "todo";
        else todo.status = "done";
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        isLoaded,
        addTodo,
        changeTodoStatus,
      }}
    >
      <Header />
      <Form />
      <List />
    </TodoContext.Provider>
  );
};

export default TodoStore;
