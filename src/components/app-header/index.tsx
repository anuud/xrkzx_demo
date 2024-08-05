import React, { useRef } from 'react';
import type { ReactNode, FC } from 'react';
import headerTitles from '../../assets/data/header_titles.json';
import headerIpone from '../../assets/data/header_ipone.json';
import { AppHeaderWrapper, MainWrapper } from './styled';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
}
const AppHeader: FC<IProps> = () => {
  const domRef = useRef(null);
  const locations = useLocation();
  const navgite = useNavigate();
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined;
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      );
    }
  }

  return (
    <AppHeaderWrapper>
      {locations.pathname === '/home' && (
        <div className="w-full m-auto" ref={domRef} onClick={() => navgite('/signup')}>
          <img
            src={require('../../assets/images/home/nav.png')}
            alt=""
            className="w-full lg:h-[80px] xs:h-[32px]"
          />
        </div>
      )}
      <div className="m-auto flex justify-between pt-2">
        <div className="app-left">
          <a href="#">
            <img
              src={require('../../assets/images/1710834333725175.png')}
              alt=""
              className="w-40 mt-2"
            />
          </a>
        </div>
        <MainWrapper>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
          <div className="title-ipone">
            {headerIpone.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </MainWrapper>
        <div className="head-tel">
          <p>181-8861-8942</p>
          <p className="text">好教育就选向日葵择校</p>
        </div>
      </div>
    </AppHeaderWrapper>
  );
};
export default AppHeader;
