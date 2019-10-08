import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {title: "Learn React", isComplete: false},
        {title: "Learn Python", isComplete: true}
      ],
      filteredTasks : [
        {title: "Learn React", isComplete: false},
        {title: "Learn Python", isComplete: true}
      ],
      filter: "All"
    };
  }
  setFilter = e => {
    this.setState({filter: e.target.value});
    this.filter(e.target.value);
  }
  filter = thing => {
    if(thing === "All") {
      this.setState({filteredTasks: this.state.tasks});
    } else if(thing === "Complete") {
      this.setState({filteredTasks: this.state.tasks.filter(t => t.isComplete)});
    } else if(thing === "Incomplete") { 
      this.setState({filteredTasks: this.state.tasks.filter(t => !t.isComplete)});
    }
  }
  someoneAddedSomething = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task],
      filteredTasks: [...this.state.tasks, task]
    });
  }
  onToggle = i => {
    let tmp = [...this.state.tasks];
    tmp[i].isComplete = !tmp[i].isComplete;
    this.setState({tasks: tmp});
    this.filter(this.state.filter);
  }
  onDelete = i => {
    let tmp = [...this.state.tasks];
    tmp.splice(i, 1);
    this.setState({tasks: tmp});
    this.filter(this.state.filter);
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Todos App</h1>
        </div>
        <div className="form-group">
          <select className="form-control" 
            onChange={this.setFilter}
          >
            <option>All</option>
            <option>Complete</option>
            <option>Incomplete</option>
          </select>
        </div>
        <Form 
          onAddTask={this.someoneAddedSomething} 
        />
        <List 
          tasks={this.state.filteredTasks} 
          onToggle={this.onToggle}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
