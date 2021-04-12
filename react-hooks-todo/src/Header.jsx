import React from "react";

const Header = ({ todos }) => {
  return (
    <>
      <h1>Todo</h1>
      <div>{todos.filter(todo => todo.status === 'todo').length}개 </div>
    </>
  );
};
export default Header;
