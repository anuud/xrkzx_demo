import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeRecommendWrapper } from './style';
interface IProps {
  children?: ReactNode;
}
const HomeRecommend: FC<IProps> = () => {
  return <HomeRecommendWrapper>HomeRecommend</HomeRecommendWrapper>;
};
export default HomeRecommend;
