import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { AboutHeaderWrapper } from './styled';
interface IProps {
  children?: ReactNode;
}
const AboutHeader: FC<IProps> = () => {
  return (
    <AboutHeaderWrapper>
      <div className="w-full banner-sub lg:h-96 xs:h-52 flex justify-center items-center">
        <div className="w-full">
          <h5 className="text">ABOUT US</h5>
          <h4 className="about">关于我们</h4>
        </div>
      </div>
    </AboutHeaderWrapper>
  );
};
export default memo(AboutHeader);
