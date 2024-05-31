import React from 'react';
import type { ReactNode, FC } from 'react';
import { AreaCaptionWrapper } from './styled';
interface IProps {
  children?: ReactNode;
  text?: string;
  page?: string;
  isSub?: string;
}
const AreaCaption: FC<IProps> = (props) => {
  return (
    <AreaCaptionWrapper>
      <div className="section-title wow fadeInUp">
        <strong>{props.text}</strong>
        <div className="area_about">
          <div>{props.page}</div>
          {props.isSub && (
            <a href="javascript:;" className="btn">
              {props.isSub}
            </a>
          )}
        </div>
      </div>
    </AreaCaptionWrapper>
  );
};
export default AreaCaption;
