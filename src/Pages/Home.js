import React, {useEffect, useState} from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const Home = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos(prev => [...prev, todo])
  }

  const handleDelete = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div>
      <h1>Home</h1>
      <TodoForm addTodo={addTodo}/>
      {
        todos && (
          <TodoList todos={todos} handleDelete={handleDelete}/>
        )
      }
    </div>
  )
}

export default Home
