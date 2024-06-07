import React from 'react';
import type { ReactNode, FC } from 'react';
import { StrategyWrapper } from './styled';
import BannerStrategy from './components/banner';
import SectionStrategy from './components/section';
import TabbelStrategy from './components/tabbel';
import ClassFy from './components/classify';
import Atlas from './components/atlas';
import Course from './components/course';
import SerVce from './components/servce';
interface IProps {
  children?: ReactNode;
}
const Strategy: FC<IProps> = () => {
  return (
    <StrategyWrapper>
      <div className=" m-auto">
        <BannerStrategy />
        <SectionStrategy />
        <Atlas />
        <TabbelStrategy />
        <ClassFy />
        <Course />
        <SerVce />
      </div>
    </StrategyWrapper>
  );
};
export default Strategy;
