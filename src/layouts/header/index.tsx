import React from 'react';
import { Layout } from 'antd';
import type { ReactNode, FC } from 'react';
import AppHeader from '../../components/app-header';
import { useLocation } from 'react-router-dom';
import { HeaderWrapper } from './styled';

interface IProps {
  children?: ReactNode;
}
const { Header } = Layout;
const HeaderLayout: FC<IProps> = () => {
  const locations = useLocation();

  return (
    <HeaderWrapper>
      <Header
        className="Mobi"
        style={{
          height: `${locations.pathname === '/home' ? '169px' : `89px`}`,
          backgroundColor: 'white',
          position: 'sticky',
          top: 0,
          zIndex: '999',
          padding: 0
        }}
      >
        <AppHeader />
      </Header>
      <Header
        className="ipone"
        style={{
          height: `${locations.pathname === '/home' ? '110px' : `80px`}`,
          backgroundColor: 'white',
          position: 'sticky',
          top: 0,
          zIndex: '999',
          padding: 0
        }}
      >
        <AppHeader />
      </Header>
    </HeaderWrapper>
  );
};
export default HeaderLayout;
