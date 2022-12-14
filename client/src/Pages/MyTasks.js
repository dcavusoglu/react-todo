import React, {useEffect, useState} from 'react'
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { addTask, getTasks, updateTask, deleteTask } from '../service/axios';


const MyTasks = () => {
  const [todos, setTodos] = useState([])

  const getTaskList = async () => {
    const res = await getTasks();
    setTodos(res.data.data);
  }

  useEffect(() => {
    getTaskList();
  }, [])



  const addTodo = async todo => {
    const newTask = await addTask(todo);
    setTodos(prev => [...prev, newTask]);
    getTaskList();
  }

  const handleClick = async todo => {

    //todo.completed = !todo.completed;
    //loading...
    const result = await updateTask(todo._id , { completed: !todo.completed } );
    todo.completed = result.data.data.completed;
    setTodos([...todos])

  }

  const handleDelete = async id => {
    console.log('todo', id)
    // const taskIdToDelete = todos.filter(item => item.id === id);
    // console.log('TT',taskIdToDelete);
    const taskToDelete = await deleteTask(id)
    setTodos(prev => prev.filter(item => item.id !== taskToDelete));
    getTaskList();
  }

  return (
    <div>
      <h1>MyTasks</h1>
      <TodoForm addTodo={addTodo}/>
      {
        todos && (
          <TodoList todos={todos} handleClick={handleClick} handleDelete={handleDelete}/>
        )
      }
    </div>
  )
}

export default MyTasks
