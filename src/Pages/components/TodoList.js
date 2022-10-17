import React, {useState} from 'react'

const TodoList = ({todos}) => {

  return (
    <div>
      {todos.map((item, i) => <div key={i}>{item.todo}</div>)}
    </div>
  )
}

export default TodoList
