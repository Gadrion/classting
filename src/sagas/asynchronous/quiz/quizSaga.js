import {
  call, select, put,
} from 'redux-saga/effects';
import * as Actions from 'store/modules/base/actionModule';
import {
  getNewQuizAction
} from './newQuiz/NewQuizSaga';

const MENU_FUNCTION_LEVEL = 1;

export function* quizMenuGetAction(options) {
  const menu = yield select(state => state.actionModule.get('menu'));
  try {
    let result;
    const menuFuction = menu[MENU_FUNCTION_LEVEL];
    switch (menuFuction) {
      case 'newQuiz': {
        result = yield call(getNewQuizAction, options);
        break;
      }
      default:
        console.log('[quizMenuSaga][quizMenuGetAction] Undefined menu', menu);
        break;
    }
    if (result.isFail === false) {
      yield put(Actions.getSuccess({
        [menuFuction]: result.data,
      }));
    }
  } catch (error) {
    console.log('error', error);
  }
}

export function* quizMenuSetAction(data) {
  const menu = yield select(state => state.actionModule.get('menu'));
  try {
    switch (menu[MENU_FUNCTION_LEVEL]) {
      case 'newQuiz1': {
        yield call(getNewQuizAction, data);
        break;
      }
      default:
        console.log('[quizMenuSaga][quizMenuSetAction] Undefined menu', menu);
        break;
    }
  } catch (error) {
    console.log('error', error);
  }
}
