import {
  all, call, select, takeEvery,
} from 'redux-saga/effects';
import {
  GET, SET,
} from 'store/modules/base/actionModule';
import {
  quizMenuGetAction, quizMenuSetAction,
} from '../quiz/quizSaga';

const MENU_LEVEL = 0;

function* actionGetAction({ payload = {} }) {
  try {
    const { options } = payload;
    const menu = yield select(state => state.actionModule.get('menu'));

    switch (menu[MENU_LEVEL]) {
      case 'quiz': {
        yield call(quizMenuGetAction, options);
        break;
      }
      default:
        console.log('[actionSaga][actionGetAction] Undefined menu', menu);
        break;
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* actionSetAction({ payload = {} }) {
  while (true) {
    try {
      const { options } = payload;
      const menu = yield select(state => state.actionModule.get('menu'));

      switch (menu[MENU_LEVEL]) {
        case 'quiz': {
          yield call(quizMenuSetAction, options);
          break;
        }
        default:
          console.log('[actionSaga][actionSetAction] Undefined menu', menu);
          break;
      }
    } catch (error) {
      console.log('error', error);
    }
  }
}

export default function* rootActionSaga() {
  yield all([
    takeEvery(GET, actionGetAction),
    takeEvery(SET, actionSetAction),
  ]);
}
