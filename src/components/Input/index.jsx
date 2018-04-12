import React from 'react';

const Input = props => (
  <div className="row">
    <div className="col s12 m6 offset-m3">
      <div className="row">
        <div className="input-field   col s12 m8 l9">
          <input
            value={props.value}
            onChange={props.onChangeValue}
            onKeyPress={(e) => {
              e.key === 'Enter' ? props.addItem() : null;
            }}
            placeholder="Enter task"
          />
        </div>
        <button
          onClick={props.addItem}
          className="btn waves-effect waves-light right purple lighten-2 m3"
        >
          <i className="material-icons center">add</i>
        </button>
      </div>
    </div>
  </div>
);

export default Input;
