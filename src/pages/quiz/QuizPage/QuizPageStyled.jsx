import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & > div {
    height: 100%;
    display: flex;
    ${props => !props.isVertical && css`
      flex-direction: column;  
    `}
    justify-content: center;
  }
`;
