import React from 'react'
import Item from './Item'

const List = ({ todos, isLoaded, changeTodoStatus }) => {
  let todoList = <div>loading...</div>;
  if (isLoaded)
    todoList = todos.map((todo) => (
      <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />
    ));
  return <ul>{todoList}</ul>;
};
export default List