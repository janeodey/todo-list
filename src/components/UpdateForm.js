const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
      <>
        {/* Update Task */}
        <div className="row">
          <div>
            <input 
              value={ updateData && updateData.title }
              onChange={ (e) => changeTask(e)}
              className="input_text"
            />
          </div>
          <div className="update_div_btn">
            <button
              onClick={updateTask}
              className="update_btn"
            >Update</button>
            <button
              onClick={cancelUpdate}
              className="cancel_btn"
            >Cancel</button>
          </div>
        </div>
        <br />  
      </>
    )
  }
  
  export default UpdateForm;