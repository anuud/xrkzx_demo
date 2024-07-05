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
      <img src={require('../../assets/images/loading.gif')} alt="" className="w-full h-full" />
    </LoadingWrapper>
  );
};
export default Loading;
