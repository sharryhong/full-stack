import { useState, useEffect } from "react";
import List from "./List";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const [loading, setLoading] = useState(false);

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo])
  }

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:9000/todo");
    const initialData = await response.json();
    // test용 setTimeout
    setTimeout(() => {
      setTodos(initialData);
      setLoading(false);
    }, 500);
  }

  useEffect(() => {
    console.log('할일 추가')
  }, [todos])

  useEffect(() => {
    // 비동기처리시 함수호출
      fetchInitialData();
  }, []) // 한번만 실행. update시 실행안됨 

  return (
    <>
      <h1>Todo App</h1>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일 추가</button>
      </form>

      <List todos={todos} loading={loading} />
    </>
  );
};

export default App;
