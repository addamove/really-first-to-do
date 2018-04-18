import React from 'react';
import PropTypes from 'prop-types';
import ShowTasksButton from './ShowTasksButton';

const Navigation = (props) => {
  let showTasksSwitch;
  switch (props.filter) {
    case 'SHOW_ACTIVE': {
      showTasksSwitch = (
        <ShowTasksButton
          text="done"
          onButtonClick={() => {
            props.changeTasksFilter('SHOW_COMPLETED');
          }}
        />
      );
      break;
    }
    default: {
      showTasksSwitch = (
        <ShowTasksButton
          text="active"
          onButtonClick={() => {
            props.changeTasksFilter('SHOW_ACTIVE');
          }}
        />
      );
      break;
    }
  }

  return (
    <nav>
      <div className="nav-wrapper blue lighten-2">
        <div className="container">
          <div href="!" className="brand-logo left hide-on-small-only">
            <i className="material-icons ">call_missed_outgoing</i>
            FirstToDo
          </div>
          <ul id="nav-mobile" className="right">
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
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  changeTasksFilter: PropTypes.func.isRequired,
};

export default Navigation;
