import { useState, useEffect } from "react";
import List from "./List";
import useFetch from "./useFetch";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const loading = useFetch(setTodos, "http://localhost:9000/todo"); 
  
  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {title: newTodo, id: todos.length + 1}]) // 임의
    setNewTodo('');
  }

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <>
      <h1>Todo App</h1>
      <form action="">
        <input type="text" value={newTodo} onChange={changeInputData} />
        <button onClick={addTodo}>할일 추가</button>
      </form>

      <List todos={todos} loading={loading} />
    </>
  );
};

export default App;
