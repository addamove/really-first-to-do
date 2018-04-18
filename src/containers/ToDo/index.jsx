import React, { Component } from 'react';
import Tasks from '../../components/Tasks/';
// import PropTypes from 'prop-types';
import Input from '../../components/Input';

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      index: 0,
      input: '',
    };

    this.onCloseClick = this.onCloseClick.bind(this);
    this.onCheckClick = this.onCheckClick.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.addItem = this.addItem.bind(this);
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
    tasks[i].completed = !this.state.tasks[i].completed;

    this.setState(() => ({
      tasks,
    }));
  }

  addItem() {
    if (this.state.input.replace(/\s/g, '') !== '') {
      const newItem = { text: this.state.input, key: this.state.index, completed: false };
      this.setState(prevState => ({
        tasks: [...prevState.tasks, newItem],
        index: this.state.index + 1,
        input: '',
      }));
    }
  }

  handleChangeValue(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <Input
          value={this.state.input}
          onChangeValue={this.handleChangeValue}
          addItem={this.addItem}
        />
        <div className="col s12 m6 offset-m3">
          <Tasks
            tasksFilter={this.props.tasksFilter}
            tasks={this.state.tasks}
            onCheckClick={this.onCheckClick}
            onCloseClick={this.onCloseClick}
            animate={this.props.animate}
            onSortButton={this.props.onSortButton}
            onClearButton={this.props.onClearButton}
          />
        </div>
      </div>
    );
  }
}

// ToDo.propTypes = {
//   tasks: PropTypes.arrayOf(PropTypes.object),
//   onClearButton: PropTypes.func.isRequired,
//   onCheckClick: PropTypes.func.isRequired,
//   onSortButton: PropTypes.func.isRequired,
//   onCloseClick: PropTypes.func.isRequired,
//   animate: PropTypes.string,
//   tasksFilter: PropTypes.string,
// };

// ToDo.defaultProps = {
//   tasksFilter: 'SHOW_ALL',
//   animate: '',
//   tasks: [],
// };

export default ToDo;
