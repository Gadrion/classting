import { bindActionCreators } from 'redux';
import store from './index';
import * as actions from './modules/base/actionModule';

const { dispatch } = store;

export const Actions = bindActionCreators(actions, dispatch);
