import React, {useContext} from 'react'
import './Item.css'
import { TodoContext } from "./TodoStore";

const Item = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const toggleItem = (e) => {
    dispatch({ type: "CHANGE_TODO_STATUS", payload: e.target.dataset.id });
  }

  const itemClassName = todo.status === 'done' ? 'done' : ''

  return (
    <li data-id={todo.id} className={itemClassName} onClick={toggleItem}>
      {todo.title}
    </li>
  );
};
export default Item