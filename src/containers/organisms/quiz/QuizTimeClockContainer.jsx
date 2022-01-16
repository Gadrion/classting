import React from 'react';
import PropTypes from 'prop-types';

class QuizTimeClockContainer extends React.Component {
  hour = 0;
  min = 0;
  sec = 0;

  clockInterval = null;

  componentDidUpdate(prevProps) {
    const { quizPageStatus: prevQuizPageStatus } = prevProps;
    const { quizPageStatus } = this.props;
    if (quizPageStatus !== prevQuizPageStatus) {
      this.initData();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.clockInterval);
  }

  initData = () => {
    const { quizPageStatus } = this.props;

    if (quizPageStatus === 'start') {
      this.clockTimer(true); 
    } else {
      clearTimeout(this.clockInterval);
    }
  }

  carryHour = () => {
    const currentHour = this.hour + 1;
    this.hour = currentHour % 24;
  }

  carryMin = () => {
    const currentMin = this.min + 1;

    if (currentMin === 60) {
      this.carryHour();
    }
    this.min = currentMin % 60;
  }

  clockTimer = isInit => {
    if (isInit) {
      this.hour = 0;
      this.min = 0;
      this.sec = 0;
    } else {
      const currentSec = this.sec + 1;
      if (currentSec === 60) {
        this.carryMin();
      }
      this.sec = currentSec % 60;
    }
    this.clockSetTimeout = setTimeout(() => {
      this.clockTimer();
    }, 1000);
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

QuizTimeClockContainer.propTypes = {
  render: PropTypes.func.isRequired,
  quizPageStatus: PropTypes.string.isRequired,
};

export default QuizTimeClockContainer;
