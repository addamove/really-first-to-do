import React, { Component } from 'react';
import Header from './components/header';
import ToDo from './components/ToDoItem/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [], input: '' };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    console.log(e.target.value);
    if (this.state.input.replace(/\s/g, '') !== '') {
      const newItem = this.state.input;
      this.setState(prevState => ({ tasks: prevState.tasks.concat(newItem) }));
    }

    this.setState({ input: '' });
    this.input.value = '';

    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <ToDo tasks={this.state.tasks} />
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
