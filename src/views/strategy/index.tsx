import React from 'react';
import type { ReactNode, FC } from 'react';
import { StrategyWrapper } from './styled';
import BannerStrategy from './components/banner';
import SectionStrategy from './components/section';
interface IProps {
  children?: ReactNode;
}
const Strategy: FC<IProps> = () => {
  return (
    <StrategyWrapper>
      <div className="w-[93%] m-auto">
        <BannerStrategy />
        <SectionStrategy />
      </div>
    </StrategyWrapper>
  );
};
export default Strategy;
