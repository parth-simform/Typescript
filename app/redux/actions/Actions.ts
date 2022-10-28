import {SAVE_TODO_DATA, FETCH_TODO_DATA, OPEN_EMOJI_CARD} from './Types';

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

export function openCardEmoji(response: any) {
  return {
    type: OPEN_EMOJI_CARD,
    response,
  };
}
