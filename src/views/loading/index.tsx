import React from 'react';
import type { ReactNode, FC } from 'react';
import { LoadingWrapper } from './styled';
interface IProps {
  children?: ReactNode;
}
const Loading: FC<IProps> = () => {
  return (
    <LoadingWrapper>
      <div className="w-[100%] h-[60vh] flex justify-center items-center">
        <img src={require('../../assets/images/loading.gif')} alt="" />
      </div>
    </LoadingWrapper>
  );
};
export default Loading;
