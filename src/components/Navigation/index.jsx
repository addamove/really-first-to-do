import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShowTasksButtons from './ShowTasksButtons';
import { setVisibilityFilter } from '../../actions';

const Navigation = props => (
  <nav>
    <div className="nav-wrapper blue lighten-2">
      <div className="container">
        <div href="!" className="brand-logo left hide-on-small-only">
          <i className="material-icons ">call_missed_outgoing</i>
          FirstToDo
        </div>
        <ul className="right">
          <ShowTasksButtons filter={props.filter} changeTasksFilter={props.changeTasksFilter} />
        </ul>
      </div>
    </div>
  </nav>
);

Navigation.propTypes = {
  changeTasksFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeTasksFilter: (filter) => {
    dispatch(setVisibilityFilter(filter));
  },
});

export default connect(null, mapDispatchToProps)(Navigation);
