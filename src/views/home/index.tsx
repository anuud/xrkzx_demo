import React, { useEffect } from 'react';
import { HomeWrapper } from './styled';
import { useAppDispatch } from '../../store';
import { fetchRecommendDataAction } from './store/home';
import TopBanner from './components/top-banner';
import HomeService from './components/home-service';
import NewsGather from './components/news-gather';
import HomeChannelCard from './components/home-channel-card';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
  }, []);
  return (
    <HomeWrapper>
      <TopBanner />
      <NewsGather />
      <HomeChannelCard />
      <HomeService />
    </HomeWrapper>
  );
};

export default Home;
