import {call, put, takeLatest} from 'redux-saga/effects';
import {getUrl} from '../utils/constant';
import {Creators, Types} from '../redux/reduxSause';

interface saveData {
  userId: number;
  id: number;
  title: string;
  completed: string;
  json: any;
}

function* fetchTodoData() {
  try {
    const url = getUrl;
    const response: saveData = yield call(fetch, url);
    const data: saveData = yield response.json();
    yield put(Creators.saveTodoData(data));
  } catch (error) {}
}

function* MainSaga() {
  yield takeLatest(Types.FETCH_TODO_DATA, fetchTodoData);
}

export default MainSaga;
