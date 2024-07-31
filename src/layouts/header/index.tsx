import React from 'react';
import { Layout } from 'antd';
import type { ReactNode, FC } from 'react';
import AppHeader from '../../components/app-header';
import { useLocation } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
}
const { Header } = Layout;
const HeaderLayout: FC<IProps> = () => {
  const locations = useLocation();

  return (
    <Header
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
  );
};
export default HeaderLayout;
