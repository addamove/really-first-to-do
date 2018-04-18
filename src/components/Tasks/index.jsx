import React from 'react';
import Task from './Task';

const Tasks = (props) => {
  let filteredTasks;
  // filtering tasks depending on props.tasksFilter
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

  const tasks = filteredTasks.map(task => (
    <Task
      task={task}
      key={task.key}
      onCheckClick={props.onCheckClick}
      onCloseClick={props.onCloseClick}
    />
  ));

  return tasks.length !== 0 ? (
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
};

export default Tasks;
