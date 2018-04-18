import React from 'react';
import Task from './Task';

const Tasks = (props) => {
  let filteredTasks;
  let ToDosHeaderText;
  let HeaderAnimation;
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

  return tasks.length !== 0 ? (
    <ul className={`collection with-header  z-depth-1 + ${props.animate}`}>
      <li className="collection-header ">
        <h4>
          {ToDosHeaderText}

          <button className="btn right teal  m3 z-depth-4 " onClick={props.onSortButton}>
            {' '}
            SORT
          </button>
          <button
            className="waves-effect right waves-black btn-flat z-depth-4 hide-on-small-only "
            onClick={props.onClearButton}
          >
            {' '}
            <i className="material-icons  red-text text-lighten-4">delete</i>
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
