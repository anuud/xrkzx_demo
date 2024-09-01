import React from 'react';
import type { FC } from 'react';
import { SunflowerTitleWrapper } from './styled';
interface IProps {
  title: string;
}
const SunflowerTitle: FC<IProps> = ({ title }) => {
  return (
    <SunflowerTitleWrapper>
      <p>{title}</p>
      <div className="wire"></div>
    </SunflowerTitleWrapper>
  );
};
export default SunflowerTitle;
