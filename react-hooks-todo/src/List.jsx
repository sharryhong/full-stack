import React from 'react'

const List = ({todos}) => {
const todosList = todos.map((todo, index) => <li key={index}>{todo}</li>)
  return (
    <ul>
      {todosList}
    </ul>
  )
}
export default List