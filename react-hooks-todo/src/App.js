import { useState } from "react";
import List from "./List";

const App = () => {
  const [todos, setTodos] = useState(['1']);
  return (
    <>
      <h1>Todo App</h1>
      <form action="">
        <input type="text" name="" />
        <button>할일 추가</button>
      </form>

      <List todos={todos} />
    </>
  );
};

export default App;
