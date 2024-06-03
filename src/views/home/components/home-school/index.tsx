import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeSchoolWrapper } from './styled';
import AreaCaption from '../../../../components/area-caption';
import { Card } from 'antd';
interface IProps {
  children?: ReactNode;
}
const HomeSchool: FC<IProps> = () => {
  return (
    <HomeSchoolWrapper>
      <div className="wrap-v2">
        <AreaCaption text="INTERNATIONAL SCHOOL" page="国际学校" isSub="热门推荐" />
        <div></div>
      </div>
    </HomeSchoolWrapper>
  );
};
export default HomeSchool;
