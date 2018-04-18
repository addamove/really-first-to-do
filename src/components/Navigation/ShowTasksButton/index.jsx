import React from 'react';

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

export default ShowTasksButton;
