import React, { useEffect } from 'react';
import { HomeWrapper } from './styled';
import { useAppDispatch } from '../../store';
import { fetchRecommendDataAction } from './store/home';
import TopBanner from './components/top-banner';
import AreaCaption from '../../components/area-caption';
import HomeAbouut from './components/home-about';
import HomeAboutRight from './components/home-about-right';
import HomeService from './components/home-service';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
  }, []);
  return (
    <HomeWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <AreaCaption text="ABOUT US" page="关于我们" />
        <div className="about">
          <div className="left">
            <HomeAbouut />
          </div>
          <div className="right">
            <HomeAboutRight />
          </div>
        </div>
      </div>
      <HomeService />
    </HomeWrapper>
  );
};

export default Home;
