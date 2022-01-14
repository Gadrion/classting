import React from 'react'
import PropTypes from 'prop-types'
import { withContainers } from 'util/hoc';
import { QuizPageContainer } from 'containers/pages';
import { QuizTimeClockContainer } from 'containers/organisms';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { QuizStepper, QuizTimeClock } from 'components/organisms';
import { PageWrapper } from './QuizPageStyled';

const QuizPage = ({
  quizPageStatus, onClick, isLoading, quizDataList, quizAnswerSubmit,
  hour, min, sec, correctCount,
}) => (
  <PageWrapper>
    {isLoading && <LoadingButton loading={isLoading} />}
    {quizPageStatus === 'ready' && (
      <Button variant="contained" onClick={onClick('isQuizStart')}>Quiz 풀기</Button>
    )}
    {quizPageStatus === 'start' && (
      <QuizStepper quizDataList={quizDataList} quizAnswerSubmit={quizAnswerSubmit} />
    )}
    {quizPageStatus === 'end' && (
      <div>
        걸린 시간<QuizTimeClock hour={hour} min={min} sec={sec} />
        {`정답 개수: ${correctCount}`}
        {`오답 개수: ${quizDataList.length - correctCount}`}
        <Button variant="contained" onClick={onClick('isQuizStart')}>다시 Quiz 풀기</Button>
      </div>
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
}

export default withContainers([QuizTimeClockContainer, QuizPageContainer], QuizPage);
