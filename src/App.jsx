import React, { Component } from 'react';
import Navigation from './components/Navigation';
import ToDo from './containers/ToDo';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      input: '',
      animate: '',
      index: 0,
      tasksFilter: '',
    };

    this.addItem = this.addItem.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.onCheckClick = this.onCheckClick.bind(this);
    this.sort = this.sort.bind(this);
    this.clear = this.clear.bind(this);
    this.changeTasksFilter = this.changeTasksFilter.bind(this);
  }

  onCloseClick(key) {
    const refreshedTasks = this.state.tasks.filter(task => task.key !== key);
    this.setState({
      tasks: refreshedTasks,
    });
  }

  onCheckClick(key) {
    const { tasks } = this.state;
    let i;

    for (let index = 0; index < tasks.length; index += 1) {
      if (tasks[index].key === key) {
        i = index;
      }
    }
    this.setState(() => ({
      completed: !this.state.tasks[i].completed,
    }));

    this.forceUpdate();
  }

  changeTasksFilter(filter) {
    this.setState({ tasksFilter: filter });
  }

  addItem() {
    if (this.state.input.replace(/\s/g, '') !== '') {
      const newItem = { text: this.state.input, key: this.state.index, completed: false };
      this.setState(prevState => ({
        tasks: [...prevState.tasks, newItem],
        input: '',
        index: this.state.index + 1,
      }));
    }
  }

  clear() {
    this.setState(() => ({ tasks: [] }));
  }

  handleChangeValue(e) {
    this.setState({ input: e.target.value });
  }

  sort() {
    const newTasks = this.state.tasks
      .map(task => task.text)
      .sort()
      .map((text, index) => ({
        text,
        key: this.state.tasks[index].key,
        completed: this.state.tasks[index].completed,
      }));
    // set animation
    this.setState(() => ({ tasks: newTasks, animate: 'animated wobble' }));

    // remove animation
    setTimeout(() => {
      this.setState(() => ({ animate: '' }));
    }, 500);
  }

  render() {
    return (
      <div>
        <Navigation changeTasksFilter={this.changeTasksFilter} />
        <main className="container">
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
            tasksFilter={this.state.tasksFilter}
            onCloseClick={this.onCloseClick}
            onSortButton={this.sort}
            onClearButton={this.clear}
            onCheckClick={this.onCheckClick}
          />
        </main>
      </div>
    );
  }
}

export default App;
