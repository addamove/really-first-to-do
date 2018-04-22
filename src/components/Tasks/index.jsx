import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = (props) => {
  let filteredTasks;
  let ToDosHeaderText;
  // filtering tasks depending on props.tasksFilter
  switch (props.tasksFilter) {
    case 'SHOW_ACTIVE': {
      ToDosHeaderText = 'Active ToDos';

      filteredTasks = props.tasks.filter(task => !task.completed);
      break;
    }

    case 'SHOW_COMPLETED': {
      ToDosHeaderText = 'Completed ToDos';

      filteredTasks = props.tasks.filter(task => task.completed);
      break;
    }

    default: {
      ToDosHeaderText = 'All ToDos';
      filteredTasks = props.tasks;
      break;
    }
  }

  const tasks = filteredTasks.map(task => (
    <Task
      task={task}
      key={task.key}
      onCheckClick={props.onCheckClick}
      onCloseClick={props.onCloseClick}
    />
  ));

  return tasks.length !== 0 ||
    (props.tasksFilter === 'SHOW_ACTIVE' && props.tasks.length !== 0) ||
    (props.tasksFilter === 'SHOW_COMPLETED' && props.tasks.length !== 0) ? (
      <div className="animated fadeIn">
        <ul className="collection ">
          <li className="collection-item">
            {' '}
            <button className="btn  teal   m3 z-depth-4 " onClick={props.onSortButton}>
              {' '}
            SORT
            </button>
            <button
              className="waves-effect  z-depth-4  waves-black btn-flat "
              onClick={props.onClearButton}
            >
              {' '}
            CLEAR
            </button>
          </li>
        </ul>

        <ul className={`collection with-header  z-depth-1 + ${props.animate}`}>
          <li className="collection-header ">
            <h4>
              <span className="hide-on-small-only">{ToDosHeaderText}</span>
              <span className="hide-on-med-and-up">ToDo</span>
            </h4>
          </li>

          {tasks}
        </ul>
      </div>
    ) : (
      <div className="animated bounce">
        <h2>A bit empy here...</h2>
        <h5>Let`s add some ToDo!</h5>
      </div>
    );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onClearButton: PropTypes.func.isRequired,
  onCheckClick: PropTypes.func.isRequired,
  onSortButton: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  animate: PropTypes.string,
  tasksFilter: PropTypes.string,
};

Tasks.defaultProps = {
  tasksFilter: 'SHOW_ALL',
  animate: '',
  tasks: [],
};

export default Tasks;
