import React from 'react';
import PropTypes from 'prop-types';

const Task = (props) => {
  let status = { textDecoration: 'none' };
  if (props.task.completed) {
    status = { textDecoration: 'line-through' };
  } else {
    status = { textDecoration: 'none' };
  }

  return (
    <li className="collection-item avatar animated taskText pulse flow-text" key={props.task.key}>
      <div
        tabIndex={0}
        role="button"
        onClick={() => {
          props.onCheckClick(props.task.key);
        }}
        onKeyDown={() => {
          props.onCheckClick(props.task.key);
        }}
      >
        <i
          className="material-icons circle blue lighten-3"
          style={{
            cursor: 'pointer',
          }}
        >
          check
        </i>
      </div>
      <span className="title" style={status}>
        {' '}
        {props.task.text}
      </span>

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
