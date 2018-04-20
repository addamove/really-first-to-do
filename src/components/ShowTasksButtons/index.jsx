import React from 'react';
import PropTypes from 'prop-types';

import ShowTasksButton from './ShowTasksButton';

const ShowTasksButtons = (props) => {
  // Show only one button at one time
  let showTasksSwitch;
  if (props.filter === 'SHOW_ACTIVE') {
    showTasksSwitch = (
      <ShowTasksButton
        text="done"
        onButtonClick={() => {
          props.changeTasksFilter('SHOW_COMPLETED');
        }}
      />
    );
  } else {
    showTasksSwitch = (
      <ShowTasksButton
        text="active"
        onButtonClick={() => {
          props.changeTasksFilter('SHOW_ACTIVE');
        }}
      />
    );
  }

  return (
    <ul className="right">
      <div style={{ margin: '1px 14px 1px 0px' }} className="left">
        <i className="material-icons ">remove_red_eye</i>
      </div>

      <li>
        <button
          className=" white-text waves-effect waves-teal btn-flat "
          onClick={() => props.changeTasksFilter('SHOW_ALL')}
        >
          all
        </button>
      </li>
      {showTasksSwitch}
    </ul>
  );
};

ShowTasksButtons.propTypes = {
  changeTasksFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ShowTasksButtons;
