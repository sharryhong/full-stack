import { useState } from "react";
import List from "./List";

const App = () => {
  const [todos, setTodos] = useState(['1']);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <h1>Todo App</h1>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일 추가</button>
      </form>

      <List todos={todos} />
    </>
  );
};

export default App;
