import React, { Component } from 'react';
import Header from './components/Header';
import ToDo from './components/ToDoItem/';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [], input: '', animate: '' };

    this.addItem = this.addItem.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.sort = this.sort.bind(this);
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

  handleChangeValue(e) {
    this.setState({ input: e.target.value });
  }

  sort() {
    const newTasks = this.state.tasks
      .map(task => task.text)
      .sort()
      .map((text, index) => ({ text, key: this.state.tasks[index].key }));
    this.setState(() => ({ tasks: newTasks, animate: 'animated wobble' }));
    setTimeout(() => {
      this.setState(() => ({ animate: '' }));
    }, 500);
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
          <ToDo
            animate={this.state.animate}
            tasks={this.state.tasks}
            removeTask={this.removeTask}
            sort={this.sort}
          />
        </div>
      </div>
    );
  }
}

export default App;
