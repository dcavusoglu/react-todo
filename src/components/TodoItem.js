import React, {useState} from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const TodoItem = ({todo, handleDelete}) => {

  const [isClicked, setClicked] = useState(todo.clicked);
  console.log(todo.name)

  const handleClick = (e) => {
    setClicked(!isClicked)
  }

  return (
    <div className="todo-item">
      <span
        onClick={handleClick}
        clicked={isClicked}
        is={todo.id}
      >
        { isClicked ?<CheckCircleIcon style={{ color: 'greenyellow' }}/> : <CheckCircleOutlineIcon/>}
      </span>

      <p className={isClicked ? 'item-completed' : 'item-waiting'}>{todo.name}</p>
      <span onClick={()=> handleDelete(todo.id)}><DeleteOutlineIcon/></span>
    </div>
  )
}

export default TodoItem
