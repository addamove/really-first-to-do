import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../../components/Task';

const ToDo = (props) => {
  // filtering tasks depending on props.tasksFilter
  let filteredTasks;
  switch (props.tasksFilter) {
    case 'SHOW_ACTIVE': {
      filteredTasks = props.tasks.filter(task => !task.completed);
      break;
    }

    case 'SHOW_COMPLETED': {
      filteredTasks = props.tasks.filter(task => task.completed);
      break;
    }

    default: {
      filteredTasks = props.tasks;
      break;
    }
  }
  // actually create tasks array
  const tasks = filteredTasks.map(task => (
    <Task
      task={task}
      key={task.key}
      onCheckClick={props.onCheckClick}
      onCloseClick={props.onCloseClick}
    />
  ));

  const Collection =
    tasks.length !== 0 ? (
      <ul className={`collection with-header  z-depth-1 + ${props.animate}`}>
        <li className="collection-header">
          <h4>
            ToDos{' '}
            <button className="btn right teal  m3 z-depth-4 " onClick={props.onSortButton}>
              {' '}
              SORT
            </button>
            <button
              className="waves-effect right waves-black btn-flat z-depth-4 hide-on-small-only "
              onClick={props.onClearButton}
            >
              {' '}
              CLEAR
            </button>
          </h4>
        </li>

        {tasks}
      </ul>
    ) : (
      <div>
        <h2>A bit empy here...</h2>
        <h5>Add some ToDo...</h5>
      </div>
    );
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">{Collection}</div>
    </div>
  );
};

ToDo.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onClearButton: PropTypes.func.isRequired,
  onCheckClick: PropTypes.func.isRequired,
  onSortButton: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  animate: PropTypes.string,
  tasksFilter: PropTypes.string,
};

ToDo.defaultProps = {
  tasksFilter: 'SHOW_ALL',
  animate: '',
  tasks: [],
};

export default ToDo;
