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
        { isClicked ?<CheckCircleIcon style={{ color: 'greenyellow' }} onClick={handleClick} clicked={isClicked}/> : <CheckCircleOutlineIcon onClick={handleClick}
        clicked={isClicked}
        id={todo.id}/>}

      <span className={isClicked ? 'item-completed' : 'item-waiting'}>{todo.name}</span>
      <DeleteOutlineIcon onClick={()=> handleDelete(todo.id)}/>
    </div>
  )
}

export default TodoItem
