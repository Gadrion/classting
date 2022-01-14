import { createAction } from 'redux-actions';

export const GET_NEW_QUIZ = 'api/newQuiz/GET_NEW_QUIZ';
export const GET_NEW_QUIZ_SUCCESS = 'api/newQuiz/GET_NEW_QUIZ_SUCCESS';
export const GET_NEW_QUIZ_FAILURE = 'api/newQuiz/GET_NEW_QUIZ_FAILURE';

export const getNewQuiz = createAction(GET_NEW_QUIZ);
export const getNewQuizSuccess = createAction(GET_NEW_QUIZ_SUCCESS);
export const getNewQuizFailure = createAction(GET_NEW_QUIZ_FAILURE);
