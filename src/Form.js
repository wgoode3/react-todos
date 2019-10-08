import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      valid: false,
    };
  }
  changeTask = e => {
    let form_is_valid = e.target.value.length > 4;
    this.setState({task: e.target.value, valid: form_is_valid});
  }
  addTask = e => {
    e.preventDefault();
    let newTask = {
      title: this.state.task,
      isComplete: false
    };
    this.setState({task: ""});
    this.props.onAddTask(newTask);
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInputGroup">Task</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">Task</div>
              </div>
              <input 
                type="text" 
                className="form-control" 
                id="inlineFormInputGroup" 
                placeholder="Your task..." 
                onChange={this.changeTask}
                value={this.state.task}
              />
            </div>
          </div>
          <div className="col-auto">
            {
              this.state.valid ? 
              <button type="submit" className="btn btn-outline-primary mb-2">Add Task</button> :
              <button type="submit" disabled className="btn btn-outline-primary mb-2">Add Task</button>
            }
          </div>
        </div>
      </form>
    );
  }
}

export default Form;