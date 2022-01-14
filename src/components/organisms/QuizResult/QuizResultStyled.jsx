import styled from 'styled-components';

export const QuizResultWrapper = styled.div`
  flex-direction: column;
`;

export const QuizResulClockWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  font-weight: 600;
`;

export const QuizResulChartWrapper = styled.div`
  margin: 25px 0;
  min-height: 400px;

  & > div:first-child {
    font-size: 35px;
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
  }
`;

export const QuizResulButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
