import React from 'react';
import type { ReactNode, FC } from 'react';
import headerTitles from '../../assets/data/header_titles.json';
import { AppHeaderWrapper, LeftWrapper, RightWrapper } from './styled';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
interface IProps {
  children?: ReactNode;
}
const AppHeader: FC<IProps> = () => {
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
      <div className="content wrap-v1 ">
        <LeftWrapper className="main">
          <a className="logo" href="/"></a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </LeftWrapper>
        <RightWrapper>
          <Input className="search" placeholder="课程" prefix={<SearchOutlined />} />
          <span className="ipone">TEL:181-8861-8942</span>
        </RightWrapper>
      </div>
    </AppHeaderWrapper>
  );
};
export default AppHeader;
