import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <div className="row">
    <div className="col s12 m6 offset-m3">
      <div className="row">
        <div className="input-field   col s12 m8 l9">
          <input
            value={props.value}
            onChange={props.onChangeValue}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                props.addItem();
              }
            }}
            placeholder="Enter task"
          />
        </div>
        <button
          onClick={props.addItem}
          className="btn waves-effect waves-light right  teal accent-4 m3"
        >
          <i className="material-icons center">add</i>
        </button>
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
