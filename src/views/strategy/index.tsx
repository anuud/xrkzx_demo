import React from 'react';
import type { ReactNode, FC } from 'react';
import { StrategyWrapper } from './styled';
interface IProps {
  children?: ReactNode;
}
const Strategy: FC<IProps> = () => {
  return <StrategyWrapper>Strategy</StrategyWrapper>;
};
export default Strategy;
