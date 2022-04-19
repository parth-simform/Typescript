import {call, put, takeLatest, select} from 'redux-saga/effects';
import {Creators, saveTodos, Types} from '../redux/reduxSause';
import getapi from '../services/Api';
interface saveData {
  data: saveTodos;
}
interface deleteData {
  response: string;
  type: string;
}

function* fetchTodoData() {
  try {
    const response: saveData = yield call(getapi, '/todos');
    const data: saveData = yield response.data;
    yield put(Creators.saveTodoData(data));
  } catch (error) {}
}

function* deleteTodo(props: deleteData) {
  try {
    let num = props.response;
    let arr: Array<saveTodos> | [] = yield select(state => state.todosData);
    let data: Array<saveTodos> = [];
    data = arr.filter((x: saveTodos) => x.id !== num);
    yield put(Creators.saveTodoData(data));
  } catch (error) {}
}

function* MainSaga() {
  yield takeLatest(Types.FETCH_TODO_DATA, fetchTodoData);
  yield takeLatest(Types.DELETE_TODO, deleteTodo);
}

export default MainSaga;
