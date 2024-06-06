import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeChannelCardWrapper } from './styled';
import ChannelTit from '../../../../components/channel-tit';
import HomeMain from './components/home-main';
import HomeLeft from './components/home-left';
import HomeRight from './components/home-right';
interface IProps {
  children?: ReactNode;
}
const HomeChannelCard: FC<IProps> = () => {
  return (
    <HomeChannelCardWrapper>
      <ChannelTit text="国际学校" subtitle="International School" />
      <div className="w-4/5 m-auto pt-5 pb-5 flex bg-white">
        <HomeLeft />
        <HomeMain />
        <HomeRight />
      </div>
    </HomeChannelCardWrapper>
  );
};
export default HomeChannelCard;
