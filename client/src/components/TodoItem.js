import React, {useState} from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const TodoItem = ({todo, handleDelete, handleUpdate}) => {
  // const [isCompleted, setCompleted] = useState(!!todo.completed); //'', null, undefined, 0, 'NaN' 'asdkjhaksd'

  return (
    <div className="todo-item">
        {
          todo.completed ?
          <CheckCircleIcon style={{ color: 'greenyellow' }} onClick={() => handleUpdate(todo)} clicked={`${todo.completed}`}/>
          :
          <CheckCircleOutlineIcon onClick={() => handleUpdate(todo)} clicked={`${todo.completed}`} id={todo.id}/>
        }

      <span className={todo.completed ? 'item-completed' : 'item-waiting'}>{todo.name}</span>
      <DeleteOutlineIcon onClick={()=>  handleDelete(todo._id)}/>
    </div>
  )
}

export default TodoItem
