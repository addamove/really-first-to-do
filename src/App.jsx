import React, { Component } from 'react';
import Navigation from './components/Navigation';
import ToDo from './containers/ToDo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: '',
      tasksFilter: '',
    };

    this.sort = this.sort.bind(this);
    this.clear = this.clear.bind(this);
    this.changeTasksFilter = this.changeTasksFilter.bind(this);
  }

  changeTasksFilter(filter) {
    this.setState({ tasksFilter: filter });
  }

  clear() {
    this.setState(() => ({ tasks: [] }));
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
        <br />

        <main className="container">
          <ToDo
            animate={this.state.animate}
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
