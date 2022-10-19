import React, {useState} from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const TodoList = ({todos}) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(curr=> !curr)
  }
  return (
    <div className='items-container'>
      {todos.map((item, i) =>
      <div key={i} onClick={handleClick} className="todo-item">
        { clicked === true ? <span><CheckCircleIcon/></span> : <span><CheckCircleOutlineIcon/></span>}

        <p className={clicked ? 'item-completed' : 'item-waiting'}>{item.todo}</p>
        <span><DeleteOutlineIcon/></span>
        </div>
        )}
    </div>
  )
}
export default TodoList
