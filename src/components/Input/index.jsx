import React from 'react';

const Input = props => (
  <div className="row">
    <div className="col s6 offset-s3">
      <div className="row">
        <div className="input-field   col s10">
          <input value={props.value} onChange={props.onChangeValue} placeholder="Enter task" />
        </div>
        <button onClick={props.addItem} className="btn right purple lighten-2">
          <i className="material-icons center">add</i>
        </button>
      </div>
    </div>
  </div>
);

export default Input;
