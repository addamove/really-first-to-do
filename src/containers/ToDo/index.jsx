import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tasks from '../../components/Tasks/';
import Input from '../../components/Input';
import { clearTasks, toggleTasks, closeTask, sortTasks } from './../../actions/';
import getVisibleTodos from './getVisibleTodos';

const ToDo = props => (
  <div className="container">
    <div className="row">
      <Input />
      <div className="col s12 m7 offset-m3">
        <Tasks
          allTasks={props.allTasks}
          filter={props.filter}
          tasks={props.tasks}
          onCheckClick={props.onCheckClick}
          onCloseClick={props.onCloseClick}
          onSortButton={props.onSortButton}
          onClearButton={props.onClearButton}
        />
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ tasks, filter }) => ({
  tasks: getVisibleTodos(tasks, filter),
  allTasks: tasks,
  filter,
});

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

ToDo.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  allTasks: PropTypes.arrayOf(PropTypes.object),
  onClearButton: PropTypes.func.isRequired,
  onCheckClick: PropTypes.func.isRequired,
  onSortButton: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

ToDo.defaultProps = {
  allTasks: [],
  tasks: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
