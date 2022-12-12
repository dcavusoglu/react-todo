import React, {useState, useEffect} from 'react'
import TodoItem from './TodoItem';
import axios from 'axios';
import { SecurityUpdateGoodSharp } from '@mui/icons-material';



const TodoList = ({todos, handleDelete, handleClick }) => {

  // const link = 'http://localhost:5050/api/v1/tasks';
  // const [tasks, setTasks] = useState([])
  // const getTasks = async () => {
  //   const res = await axios.get(link);
  //   console.log(res.data.data);
  //   setTasks(res.data.data);
  // }

  // useEffect (() => {
  //   getTasks();
  // }, [])
  console.log('T', todos)

  return (
    <div className='items-container'>
      {todos.sort((a, b) => b.createdAt - a.createdAt).map((todo) => (
        <TodoItem key={todo._id} todo={todo} handleClick={handleClick} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}
export default TodoList
