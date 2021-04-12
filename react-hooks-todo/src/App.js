import React, { useState, useEffect } from "react";
import List from "./List";
import Header from './Header';
import Form from './Form';
import useFetch from "./useFetch";

// 상위 store역할 
export const TodoContext = React.createContext()

const App = () => {
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
    <TodoContext.Provider value={{ todos }}>
      <Header />

      <Form
        newTodo={newTodo}
        changeInputData={changeInputData}
        addTodo={addTodo}
      />

      <List
        todos={todos}
        isLoaded={isLoaded}
        changeTodoStatus={changeTodoStatus}
      />
    </TodoContext.Provider>
  );
};

export default App;
