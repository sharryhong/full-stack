import React from 'react';
import ReactDOM from 'react-dom';
import TodoStore from "./TodoStore";

ReactDOM.render(
  <React.StrictMode>
    <TodoStore />
  </React.StrictMode>,
  document.getElementById("root")
);

