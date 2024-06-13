import React, { useEffect } from 'react';
import { HomeWrapper } from './styled';
import { useAppDispatch } from '../../store';
import { fetchRecommendDataAction } from './store/home';
import TopBanner from './components/top-banner';
// import HomeService from './components/home-service';
// import NewsGather from './components/news-gather';
// import HomeChannelCard from './components/home-channel-card';
import HomeCrad1 from './components/home-crad-1';
import HomeFocus from './components/home-cufoce';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
  }, []);
  return (
    <HomeWrapper>
      <TopBanner />
      <HomeCrad1 />
      <HomeFocus />
      {/* <NewsGather />
      <HomeChannelCard />
      <HomeService /> */}
    </HomeWrapper>
  );
};

export default Home;
