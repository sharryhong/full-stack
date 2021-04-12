import React, { useContext } from "react";
import {TodoContext} from './TodoStore'

const Form = () => {
  const {newTodo,changeInputData, addTodo} = useContext(TodoContext)
  return (
    <>
      <form action="" >
        <input type="text" value={newTodo} onChange={changeInputData} />
        <button type="button" onClick={addTodo}>할일 추가</button>
      </form>
    </>
  );
};
export default Form;
