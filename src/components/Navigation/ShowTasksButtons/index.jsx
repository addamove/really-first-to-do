import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ShowTasksButton from './ShowTasksButton';

const ShowTasksButtons = (props) => {
  const EyeIcon = () => (
    <div style={{ margin: '1px 14px 1px 0px' }} className="left">
      <i className="material-icons ">remove_red_eye</i>
    </div>
  );

  const ShowAllTasksButton = () => (
    <li>
      <button
        className=" white-text waves-effect waves-teal btn-flat "
        onClick={() => props.changeTasksFilter('SHOW_ALL')}
      >
        all
      </button>
    </li>
  );

  // Show only one button(done/active)
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
      <EyeIcon />
      <ShowAllTasksButton />
      {showTasksSwitch}
    </ul>
  );
};

ShowTasksButtons.propTypes = {
  changeTasksFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = ({ filter }) => ({
  filter,
});

export default connect(mapStateToProps)(ShowTasksButtons);
