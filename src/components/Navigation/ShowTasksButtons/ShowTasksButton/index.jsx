import React from 'react';
import PropTypes from 'prop-types';

const ShowTasksButton = props => (
  <li>
    <button
      className="  white-text waves-effect waves-teal btn-flat "
      onClick={props.onButtonClick}
    >
      {props.text}
    </button>
  </li>
);

ShowTasksButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ShowTasksButton;
