import {call, put, takeLatest} from 'redux-saga/effects';
import {Creators, saveTodos, Types} from '../redux/reduxSause';
import getapi from '../services/Api';

interface saveData {
  data: saveTodos;
}

function* fetchTodoData() {
  try {
    const response: saveData = yield call(getapi, '/todos');
    const data: saveData = yield response.data;
    yield put(Creators.saveTodoData(data));
  } catch (error) {}
}

function* MainSaga() {
  yield takeLatest(Types.FETCH_TODO_DATA, fetchTodoData);
}

export default MainSaga;
