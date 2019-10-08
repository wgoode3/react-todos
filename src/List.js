import React, { Component } from 'react';

class List extends Component {
  toggle = i => {
    this.props.onToggle(i);
  }
  delete = i => {
    this.props.onDelete(i);
  }
  render() {
    return (
      <table className="table table-striped">
          <tbody>
            <tr>
              <th>Completed?</th>
              <th>Task</th>
              <th>Remove?</th>
            </tr>
            {
              this.props.tasks.map( (t, i) => 
                <tr key={i}>
                  <td>
                    {
                      t.isComplete ?
                      <>
                        <input 
                          type="checkbox"
                          onClick={this.toggle.bind(this, i)}
                          defaultChecked
                        />
                        <span> complete</span> 
                      </> :
                      <>
                      <input 
                        type="checkbox"
                        onClick={this.toggle.bind(this, i)}
                      />
                        <span> incomplete</span> 
                      </>
                    }
                  </td>
                  <td>{t.title}</td>
                  <td>
                      <button 
                        className="btn btn-outline-danger btn-sm"
                        onClick={this.delete.bind(this, i)}
                      >
                        &times;
                      </button>
                    </td>
                </tr>
              )
            }
          </tbody>
        </table>
    );
  }
}

export default List;