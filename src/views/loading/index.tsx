import React from 'react';
import type { ReactNode, FC } from 'react';
import { LoadingWrapper } from './styled';
import { Spin } from 'antd';
interface IProps {
  children?: ReactNode;
}
const Loading: FC<IProps> = () => {
  return (
    <LoadingWrapper>
      <Spin />
    </LoadingWrapper>
  );
};
export default Loading;
