import React, {useEffect, useState} from 'react'
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
const MyTasks = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos(prev => [...prev, todo])
  }

  const handleDelete = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div>
      <h1>MyTasks</h1>
      <TodoForm addTodo={addTodo}/>
      {
        todos && (
          <TodoList todos={todos} handleDelete={handleDelete}/>
        )
      }
    </div>
  )
}

export default MyTasks
