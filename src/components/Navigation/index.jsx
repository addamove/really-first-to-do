import React from 'react';
import PropTypes from 'prop-types';

const Navigation = props => (
  <nav>
    <div className="nav-wrapper blue lighten-2">
      <div className="container">
        <div href="!" className="brand-logo left hide-on-med-only">
          <i className="material-icons ">call_missed_outgoing</i>
          FirstToDo
        </div>
        <ul id="nav-mobile" className="right">
          <li>
            <button
              className=" white-text waves-effect waves-teal btn-flat  hide-on-med-and-down"
              onClick={() => props.showTasks('SHOW_ACTIVE')}
            >
              show active
            </button>
          </li>
          <li>
            <button
              className=" white-text waves-effect waves-teal btn-flat  hide-on-med-and-down"
              onClick={() => props.showTasks()}
            >
              show all
            </button>
          </li>
          <li>
            <button
              className="  white-text waves-effect waves-teal btn-flat  hide-on-med-and-down"
              onClick={() => props.showTasks('SHOW_COMPLETED')}
            >
              show completed
            </button>
          </li>
          <li>
            <button className="waves-effect waves-teal btn">Notes</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Navigation.propTypes = {
  showTasks: PropTypes.func.isRequired,
};

export default Navigation;
