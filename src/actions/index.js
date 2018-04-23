import * as types from './actionTypes';

export function setVisibilityFilter(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter };
}

let nextTodoId = 0;
export const addItem = (text) => {
  nextTodoId += 1;
  return {
    type: types.ADD_TASK,
    id: nextTodoId,
    text,
  };
};

export const toggleTasks = id => ({
  type: types.TOGGLE_TASK,
  id,
});

export const clearTasks = () => ({
  type: types.CLEAR_TASKS,
});

export const closeTask = id => ({
  type: types.CLOSE_TASK,
  id,
});

export const sortTasks = () => ({
  type: types.SORT_TASKS,
});
