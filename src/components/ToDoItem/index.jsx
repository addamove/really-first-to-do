import React from 'react';

const item = (props) => {
  const removeTask = (key) => {
    props.removeTask(key);
  };

  const tasks = props.tasks.map(task => (
    <li className="collection-item " key={task.key}>
      <div className="animated shake ">
        {task.text}
        <a
          onClick={() => {
            removeTask(task.key);
          }}
          href="#!"
          className="secondary-content"
        >
          <i className="material-icons ">close</i>
        </a>
      </div>
    </li>
  ));

  const Collection =
    tasks.length !== 0 ? (
      <ul className={`collection with-header  z-depth-1 + ${props.animate}`}>
        <li className="collection-header">
          <h4>
            ToDos{' '}
            <button className="btn right purple lighten-3 m3 z-depth-4" onClick={props.sort}>
              {' '}
              SORT
            </button>
          </h4>
        </li>
        {tasks}
      </ul>
    ) : null;

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">{Collection}</div>
    </div>
  );
};

export default item;
