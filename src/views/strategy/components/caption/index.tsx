import React from 'react';
import type { ReactNode, FC } from 'react';
import { CaptionWrapper } from './styled';
interface IProps {
  children?: ReactNode;
  title: string;
  subtitle?: string;
  isSub?: string;
}
const Caption: FC<IProps> = (props) => {
  return (
    <CaptionWrapper>
      <div className="start-title">
        {props.title}
        {props.isSub && <span>{props?.isSub}</span>}
      </div>
      {props.subtitle && <h4 className="start-subtitle">{props.subtitle}</h4>}
    </CaptionWrapper>
  );
};
export default Caption;
