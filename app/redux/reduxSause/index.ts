import {createReducer, createActions} from 'reduxsauce';

export const {Types, Creators} = createActions({
  fetchTodoData: ['loading'],
  saveTodoData: ['response', 'loading'],
  deleteTodo: ['response', 'loading'],
});
export interface saveTodos {
  userId: number;
  id: string;
  title: string;
  completed: string;
}
export interface intialValue {
  loading: boolean;
  todosData: any;
  delete: string;
}

const INITIAL_STATE: intialValue = {
  todosData: [],
  loading: false,
  delete: '',
};
export interface Action {
  action: string;
  response: any;
}
export const fetchTodoData = (state: intialValue) => {
  return {
    ...state,
    loading: true,
  };
};
export const saveTodoData = (state: intialValue, action: Action) => {
  return {
    ...state,
    todosData: action.response,
    loading: false,
  };
};
export const deleteTodo = (state: intialValue) => {
  return {
    ...state,
    loading: true,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_TODO_DATA]: fetchTodoData,
  [Types.SAVE_TODO_DATA]: saveTodoData,
  [Types.DELETE_TODO]: deleteTodo,
});
