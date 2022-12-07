import "./myStyle.css"
import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import TodoList from './components/TodoList';


function App() {

  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task 
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // Delete 
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // Update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className="body_content">
      <div className="container App">

        <h1>Todo List</h1>

        {updateData && updateData ? (
          <UpdateForm 
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <AddTaskForm 
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}

        {/* Display Todos */}

        {toDo && toDo.length ? '' : 'Task not Available, Kindly add List Items...'}

        <TodoList
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
        />  

      </div>
    </div>
  );
}

export default App;