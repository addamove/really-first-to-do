import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../../actions/index';

const Input = (props) => {
  let input;
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="row">
          <div className="input-field   col s12  l12">
            <input
              ref={(node) => {
                input = node;
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  // dispatch(addItem(input.value));
                }
              }}
              placeholder="Enter task"
            />{' '}
            <button
              style={{ margin: '-64px 14px' }}
              onClick={() => {
                if (input.value.replace(/\s/g, '') !== '') {
                  props.addItem(input.value);
                }
                input.value = '';
              }}
              className="btn-flat waves-effect waves-light right   grey lighten-3 "
            >
              <i className="material-icons center">add</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: (value) => {
    dispatch(addItem(value));
  },
});

export default connect(null, mapDispatchToProps)(Input);
