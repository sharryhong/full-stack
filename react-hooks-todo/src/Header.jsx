import React, { useContext } from "react";
import { TodoContext } from './TodoStore'

const Header = () => {
  const {todos} = useContext(TodoContext)
  return (
    <>
      <h1>Todo</h1>
      <div>{todos.filter(todo => todo.status === 'todo').length}개 </div>
    </>
  );
};
export default Header;
