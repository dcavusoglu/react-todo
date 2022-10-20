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
      clicked: false,
      id: Date.now()
    });
    setTodo("");

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          onChange={handleChange}
          value={todo.todo}
          required
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
