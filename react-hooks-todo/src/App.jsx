import React from "react";
import List from "./List";
import Header from './Header';
import Form from './Form';
import TodoStore from "./TodoStore";

const App = () => {
  return (
    <TodoStore>
      <Header />
      <Form />
      <List />
    </TodoStore>
  );
};
export default App;
