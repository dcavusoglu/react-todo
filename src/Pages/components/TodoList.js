import React, {useState} from 'react'
import TodoItem from './TodoItem';
import { SecurityUpdateGoodSharp } from '@mui/icons-material';



const TodoList = ({todos, handleDelete}) => {

  return (
    <div className='items-container'>
      {todos.sort((a, b) => b.id - a.id).map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}
export default TodoList
