import MainReducer from './TodoReducer';
import {combineReducers} from 'redux';

const combinedReducers = combineReducers({
  Todos: MainReducer,
});
export default combinedReducers;
