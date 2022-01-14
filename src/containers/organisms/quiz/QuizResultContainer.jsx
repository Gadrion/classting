import React from 'react';
import PropTypes from 'prop-types';

class QuizResultContainer extends React.Component {
  state = {
    barData: [],
    barKeys: ['정답', '오답'],
  };

  componentDidMount() {
    this.initData();
  }

  initData = () => {
    const { correctCount, inCorrectCount, quizResolveCount } = this.props;
    
    const barData = [{
      number: quizResolveCount,
      "정답": correctCount,
      "오답": inCorrectCount,
    }];

    this.setState({ barData });
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

QuizResultContainer.defaultProps = {
  quizResolveCount: 1,
}

QuizResultContainer.propTypes = {
  render: PropTypes.func.isRequired,
  quizResolveCount: PropTypes.number,
  correctCount: PropTypes.number.isRequired,
  inCorrectCount: PropTypes.number.isRequired,
};

export default QuizResultContainer;
