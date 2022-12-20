import React, {useEffect, useState} from 'react'
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { addTask, getTasks, updateTask, deleteTask } from '../service/axios';


const MyTasks = () => {
  const [todos, setTodos] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    getTaskList();
  }, []);

  const calcMySuccess = () => {
    const completedTodoCount = todos.filter(t => t.completed).length;
    const allTodosCount = todos.length;

    // success / all = 3 / 6 = 0.5 * 100 => %50
    const successPercentageResult = completedTodoCount / allTodosCount * 100;
    setPercentage(successPercentageResult);

  }
  useEffect(() => {
    calcMySuccess();
  }, [todos]);

  const getTaskList = async () => {
    const res = await getTasks();
    setTodos(res.data.data);
  }

  const addTodo = async todo => {
      const newTask = await addTask(todo);
      setTodos(prev => [...prev, newTask.data.data]);
    //getTaskList();
  }

  const updateTodo = async todo => {
    await updateTask(todo._id , { completed: !todo.completed } );
    //getTaskList(); 1 yol serverdan tüm listeyi al getir

    //2. Yol client kısmındaki todo listesini güncelleyerek.
    todo.completed = !todo.completed;
    setTodos([...todos])
  }

  const deleteTodo = async id => {
    try {
      await deleteTask(id);
      getTaskList();
    } catch (error) {
      console.log("Silinemedi");
    }
  }

  //Event
  const handleUpdate = todo => {
    updateTodo(todo);
  }

  const handleDelete = id => {
    deleteTodo(id);
  }

  return (
    <div>
      <h1>MyTasks (Completed : {percentage.toFixed(2)}%)</h1>
      <TodoForm addTodo={addTodo}/>
      {
        todos && (
          <TodoList todos={todos} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
        )
      }
    </div>
  )
}

export default MyTasks
