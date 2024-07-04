import React, { useEffect } from 'react';
import { HomeWrapper } from './styled';
import { useAppDispatch } from '../../store';
import { fetchHomeDataAction } from './store/home';
import TopBanner from './components/top-banner';
import HomeCrad1 from './components/home-crad-1';
import HomeFocus from './components/home-cufoce';
import HomeClassify from './components/home-classify';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, []);
  return (
    <HomeWrapper>
      <TopBanner />
      <HomeCrad1 />
      <HomeClassify />
      <HomeFocus />
    </HomeWrapper>
  );
};

export default Home;
