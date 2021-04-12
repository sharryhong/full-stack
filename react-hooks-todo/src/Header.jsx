import React from "react";
import { TodoContext } from './App'

const Header = () => {
  return (
    <TodoContext.Consumer>
      {
        ({todos}) => (
          <>
            <h1>Todo</h1>
            <div>{todos.filter(todo => todo.status === 'todo').length}개 </div>
          </>
        )
      }
    </TodoContext.Consumer>
  );
};
export default Header;
