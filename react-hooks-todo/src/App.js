import { useState, useEffect } from "react";
import List from "./List";
import Header from './Header';
import useFetch from "./useFetch";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const isLoaded = useFetch(setTodos, "http://localhost:9000/todo"); 
  
  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {title: newTodo, id: todos.length + 1, 'status':'todo'}]) // 임의
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
    <>
      <Header todos={todos} />
      <form action="">
        <input type="text" value={newTodo} onChange={changeInputData} />
        <button onClick={addTodo}>할일 추가</button>
      </form>

      <List
        todos={todos}
        isLoaded={isLoaded}
        changeTodoStatus={changeTodoStatus}
      />
    </>
  );
};

export default App;
