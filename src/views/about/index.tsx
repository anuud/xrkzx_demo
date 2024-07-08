import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import AboutHeader from './components/about-header';
import AboutProfile from './components/about-profile';
import AppCooperation from './components/app-philosophy';
interface IProps {
  children?: ReactNode;
}
const About: FC<IProps> = () => {
  return (
    <div className="w-full">
      <AboutHeader />
      <AboutProfile />
      <AppCooperation />
    </div>
  );
};
export default memo(About);
