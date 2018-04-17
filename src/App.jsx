import React, { Component } from 'react';
import Header from './components/Header';
import ToDo from './components/ToDo/';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      filteredTasks: [],
      input: '',
      animate: '',
      index: 0,
    };

    this.addItem = this.addItem.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.onCheckClick = this.onCheckClick.bind(this);
    this.sort = this.sort.bind(this);
    this.clear = this.clear.bind(this);
    this.showTasks = this.showTasks.bind(this);
  }

  onCloseClick(key) {
    this.setState({
      tasks: this.state.tasks.filter(task => task.key !== key),
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

    this.state.tasks[i].completed = !this.state.tasks[i].completed;

    this.forceUpdate();
  }

  showTasks(filter) {
    switch (filter) {
      case 'SHOW_COMPLETED':
        this.setState(() => ({
          filteredTasks: [...this.state.tasks.filter(task => task.completed)],
        }));

        break;

      case 'SHOW_ACTIVE':
        this.setState(() => ({
          filteredTasks: [...this.state.tasks.filter(task => !task.completed)],
        }));
        break;

      default:
        this.setState(() => ({
          filteredTasks: this.state.tasks,
        }));
    }
  }

  addItem() {
    if (this.state.input.replace(/\s/g, '') !== '') {
      const newItem = { text: this.state.input, key: this.state.index, completed: false };
      this.state.index += 1;
      this.setState(prevState => ({
        tasks: [...prevState.tasks, newItem],
        input: '',
        filteredTasks: [...prevState.filteredTasks, newItem],
      }));
      console.log(this.state);
    }
  }

  clear() {
    this.setState(() => ({ tasks: [], filteredTasks: [] }));
  }

  handleChangeValue(e) {
    this.setState({ input: e.target.value });
  }

  sort() {
    const newTasks = this.state.filteredTasks
      .map(task => task.text)
      .sort()
      .map((text, index) => ({
        text,
        key: this.state.tasks[index].key,
        completed: this.state.tasks[index].completed,
      }));
    // set animation
    this.setState(() => ({ filteredTasks: newTasks, animate: 'animated wobble' }));

    // remove animation
    setTimeout(() => {
      this.setState(() => ({ animate: '' }));
    }, 500);
  }

  render() {
    return (
      <div>
        <Header showTasks={this.showTasks} />
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
            tasks={this.state.filteredTasks}
            onCloseClick={this.onCloseClick}
            sort={this.sort}
            clear={this.clear}
            onCheckClick={this.onCheckClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
