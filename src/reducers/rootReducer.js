import { combineReducers } from 'redux';
import {
  SET_VISIBILITY_FILTER,
  ADD_TASK,
  TOGGLE_TASK,
  CLEAR_TASKS,
  CLOSE_TASK,
  SORT_TASKS,
} from '../actions/actionTypes';

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      console.log(state);
      return action.filter;
    default:
      return state;
  }
}

function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TASK:
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    case CLEAR_TASKS:
      return [];

    case CLOSE_TASK:
      return state.filter(task => task.id !== action.id);
    case SORT_TASKS:
      console.log(state);
      return state
        .map(task => task.text)
        .sort()
        .map((text, index) => ({
          text,
          id: state[index].id,
          completed: state[index].completed,
        }));
    default:
      return state;
  }
}

const todoApp = combineReducers({
  filter: visibilityFilter,
  tasks,
});

export default todoApp;
