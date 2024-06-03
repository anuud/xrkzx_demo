import React from 'react';
import type { ReactNode, FC } from 'react';
import { AreaHeaderWrapper } from './styled';
interface IProps {
  children?: ReactNode;
  topheader: string;
  abstract: string;
}
const AreaHeader: FC<IProps> = (props) => {
  return (
    <AreaHeaderWrapper>
      <h2 className="block text-xl w-full text-center font-black mt-8 mb-8">{props.topheader}</h2>
      <p className="block text-sm w-full text-center leading-8  mb-6">{props.abstract}</p>
    </AreaHeaderWrapper>
  );
};
export default AreaHeader;
