import React, {useEffect, useState} from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const Home = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <div>
      <h1>Home</h1>
      <TodoForm addTodo={setTodos} todos={todos}/>
      <TodoList todos={todos} />
    </div>
  )
}

export default Home
