import React, { Component } from 'react';
import Navigation from './components/Navigation';
import ToDo from './containers/ToDo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksFilter: '',
    };

    this.changeTasksFilter = this.changeTasksFilter.bind(this);
  }

  changeTasksFilter(filter) {
    this.setState({ tasksFilter: filter });
  }

  render() {
    return (
      <div>
        <Navigation filter={this.state.tasksFilter} changeTasksFilter={this.changeTasksFilter} />
        <br />
        <br />

        <main>
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
