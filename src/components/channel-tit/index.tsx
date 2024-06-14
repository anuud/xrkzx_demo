import React from 'react';
import type { ReactNode, FC } from 'react';
import { ChannelTitWrapper } from './styled';
interface IProps {
  children?: ReactNode;
  text: string;
  subtitle: string;
}
const ChannelTit: FC<IProps> = (props) => {
  return (
    <ChannelTitWrapper className="w-4/5 m-auto bg-white">
      <div className="pull-left flex h-14 channel">
        <h2>{props.text}</h2>
        <em className="channel-rm">{props.subtitle}</em>
      </div>
    </ChannelTitWrapper>
  );
};
export default ChannelTit;
