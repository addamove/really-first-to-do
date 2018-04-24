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

  const CloseButton = () => (
    <a
      onClick={() => {
        props.onCloseClick(props.task.id);
      }}
      href="#!"
      className="secondary-content"
    >
      <i className="material-icons ">close</i>
    </a>
  );

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
      <CloseButton />
    </li>
  );
};

Task.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  onCheckClick: PropTypes.func.isRequired,
  task: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
};

export default Task;
