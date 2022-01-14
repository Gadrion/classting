import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// action
export const GET = 'action/GET';
export const GET_SUCCESS = 'action/GET_SUCCESS';
export const GET_FAILURE = 'action/GET_FAILURE';
export const SET = 'action/SET';
export const SET_SUCCESS = 'action/SET_SUCCESS';
export const SET_FAILURE = 'action/SET_FAILURE';

// action create
export const get = createAction(GET);
export const getSuccess = createAction(GET_SUCCESS);
export const getFailure = createAction(GET_FAILURE);
export const set = createAction(SET);
export const setSuccess = createAction(SET_SUCCESS);
export const setFailure = createAction(SET_FAILURE);

const initialState = Map({
    data: {}, // page data
    error: {}, // error 처리가 필요한 경우 data 저장
    loading: false, // get, set 완료 여부
    menu: [],
    dataStatus: 'none', // 'fail', 'success'
  });

  export default handleActions({
    [GET]: (state, { payload = {} }) => {
      const { menu } = payload;
  
      return state
        .set('menu', menu)
        .set('loading', true)
        .set('dataStatus', 'none')
        .set('error', {});
    },
    [GET_SUCCESS]: (state, { payload = {} }) => {
      const dataKey = Object.keys(payload)[0];
      return state
			.setIn(['data', dataKey], payload[dataKey])
			.set('loading', false)
			.set('dataStatus', 'success')
    },
    [GET_FAILURE]: (state, { payload }) => state
			.set('error', payload)
			.set('dataStatus', 'fail')
			.set('loading', false),
    [SET]: state => state
			.set('loading', true)
			.set('dataStatus', 'none')
			.set('error', {}),
		[SET_SUCCESS]: state => state
			.set('loading', false)
			.set('dataStatus', 'success'),
		[SET_FAILURE]: (state, { payload }) => state
			.set('error', payload)
			.set('dataStatus', 'fail')
			.set('loading', false),
}, initialState);
