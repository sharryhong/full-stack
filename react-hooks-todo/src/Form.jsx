import React, { useContext, useRef } from "react";
import {TodoContext} from './TodoStore'

const Form = () => {
  const inputRef = useRef(false); // 초기값 false
  const {dispatch} = useContext(TodoContext);
  const addTodoData = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) return;
      dispatch({ type: "ADD_TODO", payload: inputRef.current.value });
    inputRef.current.value = '';
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" ref={inputRef} />
        <button type="button" onClick={addTodoData}>할일 추가</button>
      </form>
    </>
  );
};
export default Form;
