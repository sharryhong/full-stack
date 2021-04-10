import React from 'react'

const List = ({todos}) => {
const todosList = todos.map(todo => <li>{todo}</li>)
  return (
    <ul>
      {todosList}
    </ul>
  )
}
export default List