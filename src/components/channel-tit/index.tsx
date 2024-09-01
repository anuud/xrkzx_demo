import React from 'react';
import type { ReactNode, FC } from 'react';
import { ChannelTitWrapper } from './styled';
interface IProps {
  children?: ReactNode;
  text: string;
  subtitle?: string;
}
const ChannelTit: FC<IProps> = (props) => {
  return (
    <ChannelTitWrapper className="w-full m-auto">
      <div className="pull-left flex h-14 channel">
        <h2>{props.text}</h2>
      </div>
    </ChannelTitWrapper>
  );
};
export default ChannelTit;
