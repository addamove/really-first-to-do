import React from 'react';
import PropTypes from 'prop-types';

const CheckButton = props => (
  <div
    tabIndex={0}
    role="button"
    onClick={() => {
      props.onCheckClick(props.task.id);
    }}
    onKeyDown={() => {
      props.onCheckClick(props.task.id);
    }}
  >
    <i
      className={`material-icons circle ${props.task.completed ? 'teal lighten-3' : 'blue'}`}
      style={{
        cursor: 'pointer',
        marginTop: '-16px',
      }}
    >
      check
    </i>
  </div>
);

CheckButton.propTypes = {
  onCheckClick: PropTypes.func.isRequired,
  task: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
};

export default CheckButton;
