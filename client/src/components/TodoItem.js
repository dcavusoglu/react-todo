import React, {useState} from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const TodoItem = ({todo, handleDelete, handleClick}) => {
  // const [isCompleted, setCompleted] = useState(!!todo.completed); //'', null, undefined, 0, 'NaN' 'asdkjhaksd'
  console.log(todo.name)



  return (
    <div className="todo-item">
        {
          todo.completed ?
          <CheckCircleIcon style={{ color: 'greenyellow' }} onClick={() => handleClick(todo)} clicked={`${todo.completed}`}/>
          :
          <CheckCircleOutlineIcon onClick={() => handleClick(todo)} clicked={`${todo.completed}`} id={todo.id}/>
        }

      <span className={todo.completed ? 'item-completed' : 'item-waiting'}>{todo.name}</span>
      <DeleteOutlineIcon onClick={()=>  handleDelete(todo._id)}/>
    </div>
  )
}

export default TodoItem
