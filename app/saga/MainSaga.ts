import {call, put, takeLatest} from 'redux-saga/effects';
// import {saveTODOData} from '../redux/actions/Actions';
import {FETCH_TODO_DATA} from '../redux/actions/Types';
import {saveTodoData} from '../redux/actions/Actions';
import {getUrl} from '../utils/constant';
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
    yield put(saveTodoData(data));
  } catch (error) {}
}

function* MainSaga() {
  yield takeLatest(FETCH_TODO_DATA, fetchTodoData);
}

export default MainSaga;
