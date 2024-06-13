import React, { useEffect, useRef } from 'react';
import type { ReactNode, FC } from 'react';
import headerTitles from '../../assets/data/header_titles.json';
import { AppHeaderWrapper, MainWrapper } from './styled';
import { NavLink } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
}
const AppHeader: FC<IProps> = () => {
  const domRef = useRef(null);
  useEffect(() => {
    console.log(domRef.current);
  }, []);
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
      {/* <div className="w-[65%] m-auto" ref={domRef}>
        <img
          src={require('../../assets/images/home/20240612210830.png')}
          alt=""
          style={{ width: '1000px', height: '100px' }}
        />
      </div> */}
      <div className="w-4/5 m-auto flex justify-between pt-2">
        <div>
          <a href="#">
            <img
              src={require('../../assets/images/1710834333725175.png')}
              alt=""
              className="w-40 mt-2"
            />
          </a>
        </div>
        <MainWrapper className="main">
          <div className="title-list">
            {headerTitles.map((item) => {
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
