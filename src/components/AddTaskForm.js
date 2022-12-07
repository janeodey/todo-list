const AddTaskForm = (props) => {
    const newTask = props.newTask;
    const setNewTask = props.setNewTask;
    const addTask = props.addTask
    return(
      <div>
        <div style={newStyle}>
          <div>
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
    margin:"20px 0",
    display:"flex"
  }
  
  export default AddTaskForm;