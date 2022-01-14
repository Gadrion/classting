/* eslint-disable react/display-name */
import React from 'react';

const withContainer = (WrapperContainer, CustomComponent) => (
  hocProps => (
    <WrapperContainer
      {...hocProps}
      render={
        props => {
          const dumyProps = props;
          // props로 넘어오는 불필요하거나 중복 데이터 객체 제거
          delete dumyProps.render;
          delete dumyProps.props;
          delete dumyProps.state;
          delete dumyProps.updater;
          delete dumyProps._reactInternalFiber;
          delete dumyProps._reactInternalInstance;

          return (
            <CustomComponent {...dumyProps} />
          );
        }
      }
    />
  )
);

export default withContainer;
