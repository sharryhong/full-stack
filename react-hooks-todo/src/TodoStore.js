import React, { useState, useEffect } from "react";
import List from "./List";
import Header from './Header';
import Form from './Form';
import useFetch from "./useFetch";

// 상위 store역할 
export const TodoContext = React.createContext()

const TodoStore = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const isLoaded = useFetch(setTodos, "http://localhost:9000/todo"); 
  
  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setTodos([
      ...todos,
      { title: newTodo, id: todos.length + 1, status: "todo" },
    ]); // 임의
    setNewTodo('');
  }

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map(todo => {
      if(todo.id === id) {
        if (todo.status === 'done') todo.status = 'todo'
        else todo.status = 'done'
      }
      return todo;
    })

    setTodos(updateTodos);
  }

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        newTodo,
        isLoaded,
        changeInputData,
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
