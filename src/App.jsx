import React, { Component } from 'react';
import Header from './components/Header';
import ToDo from './components/ToDoItem/';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [], input: '' };

    this.addItem = this.addItem.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addItem() {
    if (this.state.input.replace(/\s/g, '') !== '') {
      const newItem = { text: this.state.input, key: Math.random() };
      this.setState(prevState => ({ tasks: [...prevState.tasks, newItem] }));
    }

    this.setState({ input: '' });
  }

  removeTask(key) {
    this.setState({
      tasks: this.state.tasks.filter(task => task.key !== key),
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  handleChangeValue(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <br />
          <Input
            value={this.state.input}
            onChangeValue={this.handleChangeValue}
            onKeyPress={this.handleKeyPress}
            addItem={this.addItem}
          />
          <ToDo tasks={this.state.tasks} removeTask={this.removeTask} />
        </div>
      </div>
    );
  }
}

export default App;
