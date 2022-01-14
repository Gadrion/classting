import {
  all, put, take, call,
} from 'redux-saga/effects';
import {
  GET_NEW_QUIZ, getNewQuizSuccess, getNewQuizFailure,
} from 'store/modules/quiz/newQuizModule';
import axios from 'axios';

const URL_NEW_QUIZ_GET = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';

export function* asyncGetNewQuizSaga() {
  while (true) {
    yield take(GET_NEW_QUIZ);
    const { status, data } = yield call(axios.get, URL_NEW_QUIZ_GET);

    if (status === 200) {
      yield put(getNewQuizSuccess(data));
    } else {
      yield put(getNewQuizFailure(data));
    }
  }
}

export default function* rootNewQuizSaga() {
  yield all([
    asyncGetNewQuizSaga(),
  ]);
}
