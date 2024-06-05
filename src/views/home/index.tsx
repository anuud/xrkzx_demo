import React, { useEffect } from 'react';
import { HomeWrapper } from './styled';
import { useAppDispatch } from '../../store';
import { fetchRecommendDataAction } from './store/home';
import TopBanner from './components/top-banner';
import HomeService from './components/home-service';
import NewsGather from './components/news-gather';
import ChannelTit from '../../components/channel-tit';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
  }, []);
  return (
    <HomeWrapper>
      <TopBanner />
      <NewsGather />
      <HomeService />
      <ChannelTit text="全国分站" subtitle="Other websites" />
    </HomeWrapper>
  );
};

export default Home;
