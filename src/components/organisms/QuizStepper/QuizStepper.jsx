import React from 'react'
import PropTypes from 'prop-types'
import { withContainer } from 'util/hoc';
import { QuizStepperContainer } from 'containers/organisms';
import { QuizCard, QuizModal } from 'components/molecules';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

const QuizStepper = ({
  quizDataList, activeStep, onClick, onChange,
  selectAnswerValue, quizStatus, convertLang,
  isResultOpen,
}) => (
  <div>
    <div>
      <Stepper activeStep={activeStep}>
        {quizDataList.map((quizData, index) => (
            <Step key={`${quizData.category}_${index + 1}`} completed={(typeof quizData.isCorrect !== 'undefined')}>
              <StepLabel error={(typeof quizData.isCorrect !== 'undefined') && !quizData.isCorrect}>
                {activeStep >= index ? `Quiz ${index + 1}` : ''}
              </StepLabel>
            </Step>
          ))}
      </Stepper>
    </div>
    <div>
      <QuizCard
        {...quizDataList[activeStep]}
        selectAnswerValue={selectAnswerValue}
        onChange={onChange('answer')}
        disabled={quizStatus === 'end'}
      />
    </div>
    <div>
      <Button onClick={onClick(quizStatus)}>
        {convertLang(quizStatus)}
      </Button>
      <QuizModal
        open={isResultOpen}
        onClose={onClick('close')}
        title="문제 정답"
        description={quizDataList[activeStep].isCorrect ? '정답입니다.' : '오답입니다.'}
      />
    </div>
  </div>
)

QuizStepper.propTypes = {
  quizDataList: PropTypes.instanceOf(Array).isRequired,
  activeStep: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  selectAnswerValue: PropTypes.number.isRequired,
  quizStatus: PropTypes.string.isRequired,
  convertLang: PropTypes.func.isRequired,
  isResultOpen: PropTypes.bool.isRequired,
}

export default withContainer(QuizStepperContainer, QuizStepper);
