import React from "react";

const Form = ({ newTodo, changeInputData, addTodo }) => {
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
