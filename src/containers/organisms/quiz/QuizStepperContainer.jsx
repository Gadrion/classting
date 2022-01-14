import React from 'react';
import PropTypes from 'prop-types';

class QuizStepperContainer extends React.Component {
  state = {
    activeStep: 0,
    quizStatus: 'start', // end, done
    selectAnswerValue: 0,
    isResultOpen: false,
  };

  convertLang = quizStatus => {
    switch (quizStatus) {
      case 'start':
        return '제출';
      case 'end':
        return '다음';
      case 'done':
        return '끝내기';
    }
  }

  onClick = type => () => {
    const { activeStep, selectAnswerValue } = this.state;
    switch (type) {
      case 'start': {
        const { quizAnswerSubmit, quizDataList } = this.props;
        quizAnswerSubmit({ type: 'answerCheck', activeStep, selectAnswerValue });
        const quizStatus = activeStep !== quizDataList.length - 1 ? 'end' : 'done';
        this.setState({ quizStatus, isResultOpen: true });
        break;
      }
      case 'close': {
        this.setState({ isResultOpen: false });
        break;
      }
      case 'end': {
        this.setState({
          quizStatus: 'start',
          activeStep: activeStep + 1,
          selectAnswerValue: 0,
        });
        break;
      }
      case 'done': {
        const { quizAnswerSubmit } = this.props;
        quizAnswerSubmit({ type });
        break;
      }
      default:
        break;
    }
  }

  onChange = type => event => {
    switch (type) {
      case 'answer': {
        const { value } = event.target;
        this.setState({ selectAnswerValue: Number(value) });
        break;
      }
      default:
        break;
    }
  }

  render() {
    const { render } = this.props;

    return render({
      ...this,
      ...this.state,
      ...this.props,
    });
  }
}

QuizStepperContainer.propTypes = {
  render: PropTypes.func.isRequired,
  quizAnswerSubmit: PropTypes.func.isRequired,
  quizDataList: PropTypes.instanceOf(Array).isRequired,
};

export default QuizStepperContainer;
