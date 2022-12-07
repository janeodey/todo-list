const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <div>
        <div style={newStyle}>
          <div className="col">
            <input 
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}
              className="input_text"
              placeholder="Please type here..."
            />
          </div>
          <div>
            <button
              onClick={addTask}
              className="add_btn"
            >Add Task</button>
          </div>
        </div>
      </div>
    )
  }

  const newStyle = {
    margin:"20px 0"
  }
  
  export default AddTaskForm;