import {
  put,take,
} from 'redux-saga/effects';

export function* ApiResult(putFunc) {
  const putFuncAction = yield put(putFunc);
  const result = yield take([
    `${putFuncAction.type}_SUCCESS`, `${putFuncAction.type}_FAILURE`,
  ]);
  result.isFail = result.type === `${putFuncAction.type}_FAILURE`;
  return result;
}