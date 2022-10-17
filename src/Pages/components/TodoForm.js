import React, {useState, useEffect} from 'react'

const initialState = {todo:""}

const TodoForm = ({addTodo, todos}) => {
  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  useEffect(()=> {
    setForm(initialState);
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    if(form.todo === "") {
      return false;
    }
    addTodo([...todos, form]);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="todo" onChange={handleChange} value={form.todo}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
