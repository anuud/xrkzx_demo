import React from 'react';
import type { ReactNode, FC } from 'react';
import { BannerStrategyWrapper } from './styled';
interface IProps {
  children?: ReactNode;
}
const BannerStrategy: FC<IProps> = () => {
  return (
    <BannerStrategyWrapper>
      <div className="wrapper1">
        <div className="wrapper1list">
          <p className="text-sm leading-5">百余所优质国际 学校择校方案</p>
        </div>
        <div className="wrapper2list">
          <p className="text-sm leading-5">国际部/国际学校 备考指南</p>
        </div>
        <div className="wrapper3list">
          <p className="text-sm leading-5">国际部/国际学校 申请服务</p>
        </div>
      </div>
    </BannerStrategyWrapper>
  );
};
export default BannerStrategy;
