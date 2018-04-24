const getVisibleTodos = (tasks, filter) => {
  let filteredTasks;
  switch (filter) {
    case 'SHOW_ACTIVE': {
      filteredTasks = tasks.filter(task => !task.completed);
      break;
    }

    case 'SHOW_COMPLETED': {
      filteredTasks = tasks.filter(task => task.completed);
      break;
    }

    default: {
      filteredTasks = tasks;
      break;
    }
  }

  return filteredTasks;
};

export default getVisibleTodos;
