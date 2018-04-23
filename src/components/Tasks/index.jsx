import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './Task';
import { clearTasks, toggleTasks, closeTask, sortTasks } from './../../actions/';

const ToDosHeaderText = 'TEST';
let animate;
const Tasks = (props) => {
  // filtering tasks depending on props.tasksFilter

  const tasks = props.tasks.map(task => (
    <Task
      task={task}
      key={task.id}
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

        <ul className={`collection with-header  z-depth-1 + ${animate}`}>
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

const mapDispatchToProps = dispatch => ({
  onClearButton: () => {
    dispatch(clearTasks());
  },
  onCheckClick: (id) => {
    dispatch(toggleTasks(id));
  },
  onCloseClick: (id) => {
    dispatch(closeTask(id));
  },
  onSortButton: () => {
    dispatch(sortTasks());
  },
});

export default connect(null, mapDispatchToProps)(Tasks);
