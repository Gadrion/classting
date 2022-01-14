import React from 'react';
import PropTypes from 'prop-types';

class MainPageContainer extends React.Component {
  state = {
    selectComponent: 'none',
  };

  componentDidMount() {
    // 퀴즈 풀기
    // 차트 보기
    // 다시 풀기
    // 오답 노트
  }

  onClick = type => () => {
    switch (type) {
      case 'quiz':
        
        break;
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

MainPageContainer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default MainPageContainer;
