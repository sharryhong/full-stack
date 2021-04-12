import React, {useContext} from 'react'
import Item from './Item'
import {TodoContext} from './TodoStore'

const List = () => {
  const { todos, isLoaded, changeTodoStatus } = useContext(TodoContext);
  let todoList = <div>loading...</div>;
  if (isLoaded)
    todoList = todos.map((todo) => (
      <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />
    ));
  return <ul>{todoList}</ul>;
};
export default List