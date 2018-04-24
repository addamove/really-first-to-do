import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

// header text depends on filter
const headerText = (filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return 'Active ToDos';
    case 'SHOW_COMPLETED':
      return 'Done ToDos';
    default:
      return 'ToDo';
  }
};

// wobble animation when sorting tasks
let animate;

const Tasks = (props) => {
  const tasks = props.tasks.map(task => (
    <Task
      task={task}
      key={task.id}
      onCheckClick={props.onCheckClick}
      onCloseClick={props.onCloseClick}
    />
  ));

  const ButtonsCollection = () => (
    <ul className="collection ">
      <li className="collection-item">
        {' '}
        <button
          className="btn  teal   m3 z-depth-4 "
          onClick={() => {
            props.onSortButton();
            animate = 'animated wobble';
            // remove animation
            setTimeout(() => {
              animate = '';
            }, 500);
          }}
        >
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
  );

  const EmptyToDoMessage = () => (
    <div className="animated bounce">
      <h2>A bit empy here...</h2>
      <h5>Let`s add some ToDo!</h5>
    </div>
  );

  const CollectionHeader = () => (
    <li className="collection-header ">
      <h4>
        <span className="hide-on-small-only">{headerText(props.filter)}</span>
        <span className="hide-on-med-and-up">ToDo</span>
      </h4>
    </li>
  );

  return tasks.length !== 0 ||
    (props.filter === 'SHOW_ACTIVE' && props.allTasks.length !== 0) ||
    (props.filter === 'SHOW_COMPLETED' && props.allTasks.length !== 0) ? (
      <div className="animated fadeIn">
        <ButtonsCollection />
        <ul className={`collection with-header  z-depth-1 + ${animate}`}>
          <CollectionHeader />
          {tasks}
        </ul>
      </div>
    ) : (
      <EmptyToDoMessage />
    );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  allTasks: PropTypes.arrayOf(PropTypes.object),
  onClearButton: PropTypes.func.isRequired,
  onCheckClick: PropTypes.func.isRequired,
  onSortButton: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

Tasks.defaultProps = {
  filter: 'SHOW_ALL',
  tasks: [],
  allTasks: [],
};

export default Tasks;
