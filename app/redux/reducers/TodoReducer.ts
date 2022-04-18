import {SAVE_TODO_DATA, FETCH_TODO_DATA} from '../actions/Types';

export interface intialValue {
  loading: boolean;
  todosData: any;
}

const INITIAL_STATE: intialValue = {
  loading: false,
  todosData: [],
};

export interface Action {
  type: string;
  response: any;
}

function MainReducer(state: intialValue = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case FETCH_TODO_DATA:
      return {
        ...state,
        loading: true,
      };
    case SAVE_TODO_DATA:
      return {
        ...state,
        loading: false,
        todosData: action.response,
      };

    default:
      return {
        ...state,
      };
  }
}
export default MainReducer;
