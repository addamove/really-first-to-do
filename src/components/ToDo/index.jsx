import React from 'react';

const item = (props) => {
  let status = { textDecoration: 'none' };
  const tasks = props.tasks.map((task) => {
    if (task.completed) {
      status = { textDecoration: 'line-through' };
    } else {
      status = { textDecoration: 'none' };
    }
    return (
      <li className="collection-item avatar animated taskText shake flow-text" key={task.key}>
        <i
          className="material-icons circle blue lighten-3"
          onClick={() => {
            props.onCheckClick(task.key);
          }}
          style={{
            cursor: 'pointer',
          }}
        >
          check
        </i>
        <span className="title" style={status}>
          {' '}
          {task.text}
        </span>

        <a
          onClick={() => {
            props.onCloseClick(task.key);
          }}
          href="#!"
          className="secondary-content"
        >
          <i className="material-icons ">close</i>
        </a>
      </li>
    );
  });

  const Collection =
    tasks.length !== 0 ? (
      <ul className={`collection with-header  z-depth-1 + ${props.animate}`}>
        <li className="collection-header">
          <h4>
            ToDos{' '}
            <button className="btn right teal  m3 z-depth-4 " onClick={props.sort}>
              {' '}
              SORT
            </button>
            <button
              className="waves-effect right waves-black btn-flat z-depth-4 hide-on-small-only "
              onClick={props.clear}
            >
              {' '}
              CLEAR
            </button>
          </h4>
        </li>

        {tasks}
      </ul>
    ) : (
      <div>
        <h2>A bit empy here...</h2>
        <h5>Add some ToDo...</h5>
      </div>
    );

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">{Collection}</div>
    </div>
  );
};

export default item;
