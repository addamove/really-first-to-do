import React from 'react';
import PropTypes from 'prop-types';
import CheckButton from './CheckButton';

const Task = (props) => {
  let status = { textDecorationLine: 'none' };
  if (props.task.completed) {
    status = { textDecorationLine: 'line-through' };
  } else {
    status = { textDecorationLine: 'none' };
  }

  return (
    <li
      className="collection-item avatar animated slideInUp flow-text "
      style={{ marginTop: '14px' }}
    >
      <span className="title" style={status}>
        {' '}
        {props.task.text}
      </span>
      <CheckButton onCheckClick={props.onCheckClick} task={props.task} />
      <a
        onClick={() => {
          props.onCloseClick(props.task.key);
        }}
        href="#!"
        className="secondary-content"
      >
        <i className="material-icons ">close</i>
      </a>
    </li>
  );
};

Task.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  onCheckClick: PropTypes.func.isRequired,
  task: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    key: PropTypes.number,
  }).isRequired,
};

export default Task;
