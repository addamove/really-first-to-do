import React from 'react';

const item = (props) => {
  const tasks = props.tasks.map(task => (
    <li className="collection-item" key={Date.now()}>
      <div>
        {task}
        <a href="#!" className="secondary-content">
          <i className="material-icons">send</i>
        </a>
      </div>
    </li>
  ));

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>ToDos</h4>
      </li>
      {tasks}
    </ul>
  );
};

export default item;
