import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tasks from '../../components/Tasks/';
import Input from '../../components/Input';

const getVisibleTodos = (tasks, filter) => {
  let filteredTasks;
  switch (filter) {
    case 'SHOW_ACTIVE': {
      filteredTasks = tasks.filter(task => !task.completed);
      break;
    }

    case 'SHOW_COMPLETED': {
      filteredTasks = tasks.filter(task => task.completed);
      break;
    }

    default: {
      filteredTasks = tasks;
      break;
    }
  }

  return filteredTasks;
};

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // index: 0,
      animate: '',
    };

    // this.handleChangeValue = this.handleChangeValue.bind(this);
    // this.addItem = this.addItem.bind(this);
    // this.sort = this.sort.bind(this);
  }

  // sort() {
  //   const newTasks = this.state.tasks
  //     .map(task => task.text)
  //     .sort()
  //     .map((text, index) => ({
  //       text,
  //       key: this.state.tasks[index].key,
  //       completed: this.state.tasks[index].completed,
  //     }));
  //   // set animation
  //   this.setState(() => ({ tasks: newTasks, animate: 'animated wobble' }));

  //   // remove animation
  //   setTimeout(() => {
  //     this.setState(() => ({ animate: '' }));
  //   }, 500);
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Input />
          <div className="col s12 m7 offset-m3">
            <Tasks
              tasksFilter={this.props.filter}
              tasks={this.props.tasks}
              onCheckClick={this.onCheckClick}
              onCloseClick={this.onCloseClick}
              animate={this.state.animate}
              onSortButton={this.sort}
              onClearButton={this.clear}
            />
          </div>
        </div>
      </div>
    );
  }
}

// ToDo.propTypes = {
//   tasksFilter: PropTypes.func.isRequired,
// };

const mapStateToProps = ({ tasks, filter }) =>
  // console.log(tasks);
  ({
    tasks: getVisibleTodos(tasks, filter),
    filter,
  });
export default connect(mapStateToProps)(ToDo);
