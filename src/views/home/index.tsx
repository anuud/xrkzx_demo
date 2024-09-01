import React, { memo, useEffect } from 'react';
import { HomeWrapper } from './styled';
import { useAppDispatch } from '../../store';
import { fetchHomeDataAction } from './store/home';
import TopBanner from '../../components/top-banner';
// import HomeCrad1 from './components/home-crad-1';
import HomeFocus from './components/home-cufoce';
import HomeClassify from './components/home-classify';
import { useTitle } from 'ahooks';
import HomeCard from './components/home-card';
import HomeService from './components/home-service';
import HomeAdvantage from './components/home-advantage';

const Home = () => {
  useTitle('向日葵择校');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, []);
  return (
    <HomeWrapper>
      <TopBanner />
      <HomeCard />
      <HomeService />
      <HomeAdvantage />
      <HomeClassify />
      <HomeFocus />
    </HomeWrapper>
  );
};

export default memo(Home);
