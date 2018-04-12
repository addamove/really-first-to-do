import React, { Component } from 'react';
import Header from './components/Header';
import ToDo from './components/ToDoItem/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [], input: '' };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addItem(e) {
    if (this.state.input.replace(/\s/g, '') !== '') {
      const newItem = { text: this.state.input, key: Math.random() };

      this.setState(prevState => ({ tasks: [...prevState.tasks, newItem] }));
      console.log(this.state);
    }

    this.setState({ input: '' });
    this.input.value = '';

    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  removeTask(key) {
    this.setState({
      tasks: this.state.tasks.filter(task => task.key !== key),
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <ToDo tasks={this.state.tasks} removeTask={this.removeTask} />
          <div className="row">
            <form className="col s6 offset-s3">
              <div className="row">
                <div className="input-field   col s10">
                  <input
                    ref={(input) => {
                      this.input = input;
                    }}
                    onChange={this.handleChange}
                    placeholder="Enter task"
                  />
                </div>
                <button onClick={this.addItem} className="btn right purple lighten-2" type="submit">
                  <i className="material-icons center">add</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;