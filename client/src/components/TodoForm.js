import React, {useState} from 'react'


const TodoForm = ({addTodo}) => {

  const [todo, setTodo] = useState("")

  const handleChange = (e) => {
    setTodo(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);


    addTodo({
      name: todo,
      completed: false,
      id: Date.now()
    });
    setTodo("");

  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          name="todo"
          className='todo-input'
          onChange={handleChange}
          value={todo}
          required
        />
        <button className="submit-btn">Add</button>
      </form>
    </div>
  )
}

export default TodoForm
