import React from 'react'
import PropTypes from 'prop-types'
import { withContainers } from 'util/hoc';
import { QuizPageContainer } from 'containers/pages';
import { QuizTimeClockContainer } from 'containers/organisms';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { QuizStepper, QuizResult } from 'components/organisms';
import { PageWrapper } from './QuizPageStyled';

const QuizPage = ({
  quizPageStatus, onClick, isLoading, quizDataList, quizAnswerSubmit,
  hour, min, sec, correctCount, setRef, isVertical,
}) => (
  <PageWrapper ref={setRef} isVertical={isVertical} quizPageStatus={quizPageStatus}>
    {isLoading && <LoadingButton loading={isLoading} />}
    {quizPageStatus === 'ready' && (
      <Button variant="contained" onClick={onClick('isQuizStart')}>Quiz 풀기</Button>
    )}
    {quizPageStatus === 'start' && (
      <QuizStepper quizDataList={quizDataList} quizAnswerSubmit={quizAnswerSubmit} isVertical={isVertical} />
    )}
    {quizPageStatus === 'end' && (
      <QuizResult
        hour={hour}
        min={min}
        sec={sec}
        correctCount={correctCount}
        inCorrectCount={quizDataList.length - correctCount}
        onClick={onClick('isQuizStart')}
      />
    )}
  </PageWrapper>
)

QuizPage.propTypes = {
  quizPageStatus: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  quizDataList: PropTypes.instanceOf(Array).isRequired,
  quizAnswerSubmit: PropTypes.func.isRequired,
  hour: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  sec: PropTypes.number.isRequired,
  correctCount: PropTypes.number.isRequired,
  setRef: PropTypes.func.isRequired,
  isVertical: PropTypes.bool.isRequired,
}

export default withContainers([QuizTimeClockContainer, QuizPageContainer], QuizPage);
