import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeServiceWrapper } from './styled';
import AreaCaption from '../../../../components/area-caption';
interface IProps {
  children?: ReactNode;
}
const HomeService: FC<IProps> = () => {
  return (
    <HomeServiceWrapper>
      <div className="content wrap-v2">
        <AreaCaption text="SERVICE" page="留学多对一服务流程" />
      </div>
    </HomeServiceWrapper>
  );
};
export default HomeService;
