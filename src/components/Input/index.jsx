import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <div className="row">
    <div className="col s12 m6 offset-m3">
      <div className="row">
        <div className="input-field   col s12  l12">
          <input
            value={props.value}
            onChange={props.onChangeValue}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                props.addItem();
              }
            }}
            placeholder="Enter task"
          />{' '}
          <button
            style={{ margin: '-64px 14px' }}
            onClick={props.addItem}
            className="btn-flat waves-effect waves-light right   grey lighten-3 "
          >
            <i className="material-icons center">add</i>
          </button>
        </div>
      </div>
    </div>
  </div>
);

Input.propTypes = {
  value: PropTypes.string,
  onChangeValue: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
};

export default Input;
