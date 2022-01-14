import { getNewQuiz } from 'store/modules/quiz/newQuizModule';
import { ApiResult } from 'util/function/SagaUtil';

const shuffle = array => {
  const result = array;

  for (let index = array.length - 1; index > 0; index--) { // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
    const randomPosition = Math.floor(Math.random() * (index + 1)); // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
    const temporary = result[index];
    result[index] = result[randomPosition];
    result[randomPosition] = temporary;
  }
  return result;
}

const convertQuizData = dataList => dataList.map(data => ({
  ...data,
  quizAnswers: shuffle([data.correct_answer, ...data.incorrect_answers]),
}));

export function* getNewQuizAction() {
  const { isFail, payload } = yield ApiResult(getNewQuiz({}));
  const quizDataList = convertQuizData(payload.results);

  return {
    isFail,
    data: quizDataList,
  };
}