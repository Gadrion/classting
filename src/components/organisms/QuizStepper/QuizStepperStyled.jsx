import styled, { css } from 'styled-components';

export const QuizStepperWrapper = styled.div`
  ${props => !props.isVertical && css`
      flex-direction: column;  
    `}
`;