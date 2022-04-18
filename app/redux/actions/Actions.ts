import {SAVE_TODO_DATA, FETCH_TODO_DATA} from './Types';

export interface saveTodos {
  userId: number;
  id: number;
  title: string;
  completed: string;
}

export function fetchTodoData() {
  return {
    type: FETCH_TODO_DATA,
  };
}

export function saveTodoData(response: saveTodos) {
  return {
    type: SAVE_TODO_DATA,
    response,
  };
}
