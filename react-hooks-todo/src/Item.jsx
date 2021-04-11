import React from 'react'
import './Item.css'

const Item = ({ todo, changeTodoStatus }) => {
  const toggleItem = () => {
    changeTodoStatus(todo.id)
  }

  const itemClassName = todo.status === 'done' ? 'done' : ''

  return (
    <li data-id={todo.id} className={itemClassName} onClick={toggleItem}>
      {todo.title}
    </li>
  );
};
export default Item