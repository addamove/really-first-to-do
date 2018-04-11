import React from 'react';
import Header from './components/header';
import ToDo from './components/ToDoItem/';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <ToDo tasks={['asdf', 'asdf']} />
    </div>
  </div>
);

export default App;
