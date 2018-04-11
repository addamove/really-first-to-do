import React from 'react';

const item = (props) => {
  console.log(props.tasks);

  const tasks = props.tasks.map(task => (
    <li className="collection-item" key={Math.random()}>
      <div>
        {task}
        <a href="#!" className="secondary-content">
          <i className="material-icons">send</i>
        </a>
      </div>
    </li>
  ));

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>ToDos</h4>
          </li>
          {tasks}
        </ul>
      </div>
    </div>
  );
};

export default item;
