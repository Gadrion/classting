import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & > div {
    height: 100%;
    ${props => (!props.isVertical || props.quizPageStatus === 'end') && css`  
      display: flex;
      justify-content: center;
    `}
  }
`;
