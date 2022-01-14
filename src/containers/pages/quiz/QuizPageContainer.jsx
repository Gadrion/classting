import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'store/actionCreators';
import { connect } from 'react-redux';

class QuizPageContainer extends React.Component {
  wrapperRef = null;

  resizeObserver;

  state = {
    quizPageStatus: 'ready', // ready, start, end
    isLoading: false,
    quizDataList: [],
    correctCount: 0,
    isVertical: false,
  };

  componentDidUpdate(prevProps) {
    const { newQuiz: prevNewQuiz } = prevProps;
    const { newQuiz } = this.props;

    if (prevNewQuiz !== newQuiz) {
      this.initData();
    }
  }
  
  componentWillUnmount() {
    this.resizeObserver.unobserve(this.wrapperRef);
  }

  initData = () => {
    const { newQuiz } = this.props;
    if (newQuiz.length !== 0) {
      this.setState({
        quizPageStatus: 'start',
        quizDataList: newQuiz,
      });
    }
  }

  onClick = type => () => {
    switch (type) {
      case 'isQuizStart': {
        Actions.get({
          menu: ['quiz', 'newQuiz'],
        });
        break;
      }
      default:
        break;
    }
  }

  quizAnswerSubmit = ({ type, activeStep, selectAnswerValue}) => {
    switch (type) {
      case 'answerCheck': {
        const { quizDataList, correctCount } = this.state;
        const activeData = quizDataList[activeStep];
        const isCorrect = activeData.quizAnswers[selectAnswerValue] === activeData.correct_answer;

        quizDataList[activeStep] = {
          ...activeData,
          isCorrect,
          selectAnswerValue,
        };

        this.setState({
          quizDataList,
          correctCount: isCorrect ? correctCount + 1: correctCount,
        });
        break;
      }
      case 'done': {
        this.setState({
          quizPageStatus: 'end',
        });
        break;
      }
      default:
        break;
    }
  }

  setRef = ref => {
    if (ref) {
      this.wrapperRef = ref;
      this.resizeObserver = new ResizeObserver(entry => {
        const { isVertical: stateIsVertical } = this.state;
        const isVertical = entry[0].contentRect.width < 800;
        if (stateIsVertical !== isVertical) {
          this.setState({ isVertical });
        }
        
      });

      this.resizeObserver.observe(this.wrapperRef);
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

QuizPageContainer.propTypes = {
  render: PropTypes.func.isRequired,
  newQuiz: PropTypes.instanceOf(Array),
};

export default connect(
  state => {
    const data = state.actionModule.get('data');

    return ({
      newQuiz: data.newQuiz || [],
    })
  },
)(QuizPageContainer);
